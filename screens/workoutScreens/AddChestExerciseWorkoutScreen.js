import React from 'react';
import { View, Text } from 'react-native';
import EditExerciseComponent from '../../components/EditExerciseComponent';
import AddExerciseCard from '../../components/AddExerciseCard';
import AddExerciseComponent from '../../components/AddExerciseComponent';
import { ScrollView } from 'react-native-web';

const AddChestExerciseWorkoutScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1E' }}>
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center'}}>
        <View style={{ flex: 1, backgroundColor: '#343438', width: '95%', alignItems: 'center'}}>
          <View style={{ marginBottom: 10}}>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>

          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default AddChestExerciseWorkoutScreen;
