import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WorkoutsScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('CreateWorkouts')}>
        <Text style={styles.text}>Create Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('CreateSplits')}>
        <Text style={styles.text}>Create Split</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('SplitWorkoutScreen')}>
        <Text style={styles.text}>View my splits</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>Edit Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>Add Workout to split</Text>
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

export default WorkoutsScreen;
