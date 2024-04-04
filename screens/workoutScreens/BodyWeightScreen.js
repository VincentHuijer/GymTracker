import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { supabase } from '../../lib/supabase';

const BodyWeightScreen = () => {
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSaveWeight = async () => {
    try {
      const { data, error } = await supabase
        .from('weights')
        .insert([{ weight: parseFloat(weight), notes, recorded_at: new Date(dateTime) }]);

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
