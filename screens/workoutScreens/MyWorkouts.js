import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PushIcon, PullIcon, MuscleIcon, LegPressIcon, PlusIcon } from '../../assets/SvgIcons';
import WorkoutComponent from '../../components/WorkoutComponent';
import PlusButton from '../../components/PlusButton';
import WhiteTextButton from '../../components/WhiteTextButton';

const MyWorkoutsScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <WorkoutComponent workoutName='MySpicyWorkout' workoutLink='NonGenericWorkout' workoutIcon={<PushIcon/>}/>
      <WorkoutComponent workoutName='MySpicyWorkout' workoutLink='NonGenericWorkout' workoutIcon={<PushIcon/>}/>
      <WorkoutComponent workoutName='MySpicyWorkout' workoutLink='NonGenericWorkout' workoutIcon={<MuscleIcon/>}/>
      <WorkoutComponent workoutName='MySpicyWorkout' workoutLink='NonGenericWorkout' workoutIcon={<LegPressIcon/>}/>
      <WorkoutComponent workoutName='MySpicyWorkout' workoutLink='NonGenericWorkout' workoutIcon={<MuscleIcon/>}/>
      <WorkoutComponent workoutName='Add New Workout' workoutLink='NonGenericWorkout' workoutIcon={<PlusIcon/>}/>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingTop: 20
  },
  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 10, 
    width: '80%',
    alignItems: 'center', 
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyWorkoutsScreen;
