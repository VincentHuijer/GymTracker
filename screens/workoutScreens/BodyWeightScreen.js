import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { supabase } from '../../lib/supabase';
import moment from 'moment';
import { SessionContext } from '../../SessionContext';
import { useContext } from 'react';
import ThinLine from '../../components/ThinLine';
import { ChevronDown, ChevronUp, FileTextIcon, PencilIcon } from '../../assets/SvgIcons';
import WhiteTextButtonNew from '../../components/WhiteTextButtonNew';

const BodyWeightScreen = () => {
  const { session } = useContext(SessionContext);
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [monthlyData, setMonthlyData] = useState([]);
  const [visibleEntries, setVisibleEntries] = useState({});

  useEffect(() => {
    const initialVisibility = {};
    monthlyData.forEach((monthData) => {
      initialVisibility[monthData.month] = true;
    });
    setVisibleEntries(initialVisibility);
  }, [monthlyData]);

  const toggleVisibility = (month) => {
    setVisibleEntries((prevVisibility) => ({
      ...prevVisibility,
      [month]: !prevVisibility[month],
    }));
  };


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (!session || !session.user) {
        console.error('No user session found.');
        return;
      }

      const { data: bodyWeights, error } = await supabase
        .from('BodyWeightTracker')
        .select('*')
        .eq('userid', session.user.id)
        .order('recorded_at', { ascending: false });

      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        const formattedData = formatData(bodyWeights);
        setMonthlyData(formattedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const formatData = (bodyWeights) => {
    const groupedData = {};
    bodyWeights.forEach((entry) => {
      const month = moment(entry.recorded_at).format('MMMM YYYY');
      if (!groupedData[month]) {
        groupedData[month] = [];
      }
      groupedData[month].push(entry);
    });

    const formattedData = Object.keys(groupedData).map((month) => {
      const entries = groupedData[month];
      const lastWeight = entries[0].weight;
      const weightDifference = entries[0].weight - entries[entries.length - 1].weight;
      return { month, lastWeight, weightDifference, entries };
    });

    return formattedData;
  };

  const handleSaveWeight = async () => {
    try {
      if (!session || !session.user) {
        console.error('No user session found.');
        return;
      }

      const formattedDateTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
      const { data, error } = await supabase
        .from('BodyWeightTracker')
        .insert([
          {
            weight: parseFloat(weight),
            notes,
            recorded_at: formattedDateTime,
            userid: session.user.id,
          },
        ]);

      if (error) {
        console.error('Error saving weight:', error.message);
      } else {
        console.log('Weight saved successfully:', data);
        setWeight('');
        setNotes('');
        setDateTime('');
        fetchData(); 
      }
    } catch (error) {
      console.error('Error saving weight:', error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#1C1C1E' }}>
          {monthlyData.map((monthData) => (
            <View>
              <View
                style={{
                  backgroundColor: '#252429',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 24, color: 'white' }}>{monthData.month}</Text>
                <Text style={{ fontSize: 24, color: '#5BE432', marginLeft: 10 }}>
                  {`${monthData.weightDifference.toFixed(1)}kg`}
                </Text>
                <Text style={{ fontSize: 24, color: 'white' }}>{`${monthData.lastWeight}kg`}</Text>
                <TouchableOpacity onPress={() => toggleVisibility(monthData.month)}>
                  {visibleEntries[monthData.month] ? <ChevronUp /> : <ChevronDown />}
                </TouchableOpacity>
              </View>
              {visibleEntries[monthData.month] && (
                monthData.entries.map((entry, index) => (
                  <View>
                    <View
                      key={index}
                      style={{
                        backgroundColor: '#46454C',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        paddingVertical: 10,
                      }}>
                      <Text style={{ fontSize: 20, color: 'white' }}>{moment(entry.recorded_at).format('D/M (ddd)')}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {entry.notes ? <FileTextIcon /> : <View style={{ width: 24 }} />}
                      </View>
                      {index < monthData.entries.length - 1 && (
                        <Text style={{ fontSize: 20, color: '#E43D32', marginLeft: 10 }}>
                        {`${(parseFloat(entry.weight) - parseFloat(monthData.entries[index + 1].weight)).toFixed(1)}kg`}
                        </Text>
                      )}
                      <Text style={{ fontSize: 20, color: 'white' }}>{`${parseFloat(entry.weight).toFixed(1)}kg`}</Text>
                      <PencilIcon />
                    </View>
                    {index !== monthData.entries.length - 1 && <ThinLine />}
                  </View>
                ))
              )}
            </View>
          ))}
          <TextInput value={weight} onChangeText={setWeight} keyboardType="numeric" placeholder="Enter weight" />
          <TextInput value={notes} onChangeText={setNotes} placeholder="Enter notes" />
          <TextInput value={dateTime} onChangeText={setDateTime} placeholder="Enter date & time" />
          <Button title="Save Weight" onPress={handleSaveWeight} />
        </View>
      </ScrollView>
      <WhiteTextButtonNew text={'new entry'} onPress={() => navigation.navigate('NewEntry')}/>
    </View>
  );
};

export default BodyWeightScreen;
