import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { supabase } from '../../lib/supabase';
import moment from 'moment';
import { SessionContext } from '../../SessionContext';
import { useContext } from 'react';
import ThinLine from '../../components/ThinLine';
import { ChevronDown, FileTextIcon, PencilIcon } from '../../assets/SvgIcons';

const BodyWeightScreen = () => {
  const { session } = useContext(SessionContext);
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [weightData, setWeightData] = useState([]);


  useEffect(() => {
    async function fetchWeightData() {
      try {
        const { data, error } = await supabase
          .from('BodyWeightTracker')
          .select('*')
          .order('recorded_at', { ascending: false }); // Order by recorded_at descending

        if (error) {
          console.error('Error fetching weight data:', error.message);
        } else {
          setWeightData(data);
        }
      } catch (error) {
        console.error('Error fetching weight data:', error.message);
      }
    }

    fetchWeightData();
  }, []); 


  const handleSaveWeight = async () => {
    try {
      if (!session || !session.user) {
        console.error('No user session found.');
        return;
      }
      
      const formattedDateTime = moment(dateTime).format('DD/MM/YYYY HH:mm:ss');
      const { data, error } = await supabase
        .from('BodyWeightTracker')
        .insert([{ 
          weight: parseFloat(weight), 
          notes, 
          recorded_at: formattedDateTime,
          userid: session.user.id
        }]);

      if (error) {
        console.error('Error saving weight:', error.message);
      } else {
        console.log('Weight saved successfully:', data);
        // Optionally, you can reset the form fields after successful submission
        setWeight('');
        setNotes('');
        setDateTime('');
      }
    } catch (error) {
      console.error('Error saving weight:', error.message);
    }
  };

  return (
    <View style={{backgroundColor: '#1C1C1E'}}>
      <View>
        <View style={{backgroundColor: '#252429', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Text style={{fontSize: 24, color: 'white'}}>Januari 2024</Text>
          <Text style={{fontSize: 24, color: '#5BE432', marginLeft: 10}}>-4,3kg</Text>
          <Text style={{fontSize: 24, color: 'white'}}>94,6kg</Text>
          <ChevronDown/>
        </View>
        <>
      {weightData.map((entry, index) => (
        <View key={index} style={{backgroundColor: '#46454C', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingVertical: 10}}>
          <Text style={{fontSize: 20, color: 'white'}}>{moment(entry.recorded_at).format('D/M (ddd)')}</Text> 
          {entry.notes && <FileTextIcon />} 
          {index > 0 && <Text style={{fontSize: 20, color: '#E43D32', marginLeft: 10}}>{(entry.weight - weightData[index - 1].weight).toFixed(1)}kg</Text>} {/* Show difference in weight if not the first entry */}
          <Text style={{fontSize: 20, color: 'white'}}>{entry.weight}kg</Text>
          <PencilIcon />
        </View>
      ))}
      <ThinLine />
    </>
        </View>

      <TextInput
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        placeholder="Enter weight"
      />
      <TextInput
        value={notes}
        onChangeText={setNotes}
        placeholder="Enter notes"
      />
      <TextInput
        value={dateTime}
        onChangeText={setDateTime}
        placeholder="Enter date & time"
      />
      <Button title="Save Weight" onPress={handleSaveWeight} />
    </View>
  );
};

export default BodyWeightScreen;