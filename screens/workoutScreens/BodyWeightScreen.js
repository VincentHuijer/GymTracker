import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { supabase } from '../../lib/supabase';
import moment from 'moment';
import { SessionContext } from '../../SessionContext';
import { useContext } from 'react';
import ThinLine from '../../components/ThinLine';
import { ChevronDown, ChevronUp, FileTextIcon, PencilIcon } from '../../assets/SvgIcons';
import WhiteTextButtonNew from '../../components/WhiteTextButtonNew';
import NewEntryModal from '../../components/NewEntryModal';
import EditEntryModal from '../../components/EditEntryModal';

const BodyWeightScreen = () => {
  const { session } = useContext(SessionContext);
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');
  const [dateTime, setDateTime] = useState(moment().format('YYYY-MM-DD HH:mm'));
  const [monthlyData, setMonthlyData] = useState([]);
  const [visibleEntries, setVisibleEntries] = useState({});
  const [newEntryModalVisible, setNewEntryModalVisible] = useState(false);
  const [EditEntryModalVisible, setEditEntryModalVisible] = useState(false);

  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => { //show/hide months with chevron
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
    if (selectedEntry) {
      setEditEntryModalVisible(true);
    }
  }, [selectedEntry]);
  

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

  const handleEditWeight = async (updatedEntry) => {
    try {
      if (!session || !session.user) {
        console.error('No user session found.');
        return;
      }
  
      const { data, error } = await supabase
        .from('BodyWeightTracker')
        .update(updatedEntry)
        .match({ id: updatedEntry.id, userid: session.user.id });
  
      if (error) {
        console.error('Error updating weight entry:', error.message);
      } else {
        console.log('Weight entry updated successfully:', data);
        fetchData();
      }
    } catch (error) {
      console.error('Error updating weight entry:', error.message);
    }
  };
  
  const handleRemoveWeightEntry = async (entryId) => {
    try {
      if (!session || !session.user) {
        console.error('No user session found.');
        return;
      }
  
      const { data, error } = await supabase
        .from('BodyWeightTracker')
        .delete()
        .match({ id: entryId, userid: session.user.id });
  
      if (error) {
        console.error('Error removing weight entry:', error.message);
      } else {
        console.log('Weight entry removed successfully:', data);
        fetchData();
      }
    } catch (error) {
      console.error('Error removing weight entry:', error.message);
    }
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
        // setDateTime('');
        fetchData();
        setNewEntryModalVisible(false);
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
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginRight: 97 }}>{monthData.month}</Text>
                <Text style={{ fontSize: 20, color: parseFloat(monthData.weightDifference) < 0 ? '#5BE432' : '#E43D32', fontWeight: 'bold', width: 60}}>
                  {`${monthData.weightDifference.toFixed(1)}kg`}
                </Text>

                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{`${monthData.lastWeight.toFixed(1)}kg`}</Text>
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
                        paddingVertical: 14,
                      }}>
                      <Text style={{ fontSize: 16, color: 'white', width: 100 }}>{moment(entry.recorded_at).format('DD/MM (ddd)')}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {entry.notes ? <FileTextIcon /> : <View style={{ width: 24 }} />}
                      </View>
                      {index < monthData.entries.length - 1 && monthData.entries[index + 1] ? (
                        <Text style={{ 
                          fontSize: 16, 
                          color: ((parseFloat(entry.weight) - parseFloat(monthData.entries[index + 1].weight)) < 0) ? '#5BE432' : '#E43D32', 
                        }}>
                          {`${(parseFloat(entry.weight) - parseFloat(monthData.entries[index + 1].weight)).toFixed(1)}kg`}
                        </Text>
                      ) : (
                        <Text style={{ 
                          fontSize: 16, 
                          color: '#E43D32',
                        }}>
                          0.0kg
                        </Text>
                      )}
                      <Text style={{ fontSize: 16, color: 'white' }}>{`${parseFloat(entry.weight).toFixed(1)}kg`}</Text>
                      <TouchableOpacity 
                        onPress={() => {
                          setSelectedEntry(entry);
                        }}
                      >
                        <PencilIcon/>
                      </TouchableOpacity>
                      {selectedEntry && 
                      <EditEntryModal
                        entry={selectedEntry}
                        visible={EditEntryModalVisible}
                        onClose={() => {
                          setEditEntryModalVisible(false);
                          setSelectedEntry(null);
                        }}
                        onEdit={handleEditWeight}
                        onRemove={handleRemoveWeightEntry}
                      />
                    }
                    </View>
                    {index !== monthData.entries.length - 1 && <ThinLine />}
                  </View>
                ))
              )}
            </View>
          ))}
         
        </View>
      </ScrollView>
        <View style={{backgroundColor: '#1C1C1E', padding: 10}}>
          <WhiteTextButtonNew text={'Add entry'} onPress={() => setNewEntryModalVisible(true)} />
          <NewEntryModal 
            visible={newEntryModalVisible} 
            onClose={() => setNewEntryModalVisible(false)} 
            onSave={handleSaveWeight} 
            weight={weight} 
            setWeight={setWeight} 
            notes={notes} 
            setNotes={setNotes} 
            dateTime={dateTime} 
          />
      </View>
    </View>
  );
};

export default BodyWeightScreen;
