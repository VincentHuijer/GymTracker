import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { supabase } from '../../lib/supabase';
import moment from 'moment';
import { SessionContext } from '../../SessionContext';
import { useContext } from 'react';

const BodyWeightScreen = () => {
  const { session } = useContext(SessionContext);
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');
  const [dateTime, setDateTime] = useState('');

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
    <View>
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