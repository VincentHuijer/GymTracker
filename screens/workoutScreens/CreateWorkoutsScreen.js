import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreateWorkoutsScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddChestExerciseWorkoutScreen')}>
        <Text style={styles.text}>Chest</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddChestExerciseWorkoutScreen')}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddChestExerciseWorkoutScreen')}>
        <Text style={styles.text}>Tricep</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddChestExerciseWorkoutScreen')}>
        <Text style={styles.text}>Biceps</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddChestExerciseWorkoutScreen')}>
        <Text style={styles.text}>Quads</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddChestExerciseWorkoutScreen')}>
        <Text style={styles.text}>Hamstrings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddChestExerciseWorkoutScreen')}>
        <Text style={styles.text}>Calves</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AddChestExerciseWorkoutScreen')}>
        <Text style={styles.text}>Traps</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingTop: 20// only great until custom splits get added
  },
  box: {
    backgroundColor: 'white',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 10, //edges on borders
    width: '80%',
    alignItems: 'center', //horizontally
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateWorkoutsScreen;
