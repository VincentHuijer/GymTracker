import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WorkoutsScreen = () => {
  const navigation = useNavigation();

  const navigateToCreateWorkouts = () => {
    navigation.navigate('CreateWorkouts');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={navigateToCreateWorkouts}>
        <Text style={styles.text}>Create Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>Create Split</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>Edit Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C1C1E'
  },
  box: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WorkoutsScreen;
