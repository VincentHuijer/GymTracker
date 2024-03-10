import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native-web';
import WorkoutSplitCard from '../../components/WorkoutSplitCard';
import { LegPressIcon, PullIcon, PushIcon, MuscleIcon } from '../../assets/SvgIcons';
import WhiteTextButton from '../../components/WhiteTextButton';
import ThinLine from '../../components/ThinLine';
import WhiteTextButtonNew from '../../components/WhiteTextButtonNew';

const SplitWorkoutScreen = () => {
  const [workouts, setWorkouts] = useState({
    workout1: [
      { icon: <PullIcon />, name: 'Dumbell Press' },
      { icon: <PushIcon />, name: 'Push-up' },
    ],
    workout2: [
      { icon: <LegPressIcon />, name: 'leg press' },
      { icon: <LegPressIcon />, name: 'Squat' },
      { icon: <PullIcon />, name: 'pullup' },
      { icon: <MuscleIcon />, name: 'Bicep Curl' },
    ],
    workout3: [
      { icon: <LegPressIcon />, name: 'leg press' },
      { icon: <PushIcon />, name: 'Push-up' },
      { icon: <PullIcon />, name: 'pullup' },
      { icon: <MuscleIcon />, name: 'Bicep Curl' },
    ],
  });

  const addNewDay = () => {
    const newWorkoutName = `Workout ${Object.keys(workouts).length + 1}`;
    const newWorkout = Array.from({ length: 1 }).map((_, index) => ({ 
      icon: <MuscleIcon />,
      name: `Exercise ${index + 1}`,
    }));

    setWorkouts((prevWorkouts) => ({
      ...prevWorkouts,
      [newWorkoutName]: newWorkout,
    }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1E' }}>
      <View style={{ flexDirection: 'row', flex: 1, paddingVertical: 21, backgroundColor: '#46454C', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            PPLSPLIT
          </Text>
        </View>
        <View style={{ justifyContent: 'center', backgroundColor: '#343438', paddingVertical: 7, paddingHorizontal: 20, borderRadius: 6 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', }}>
            Split
          </Text>
        </View>
        <View style={{ justifyContent: 'center', backgroundColor: '#343438', paddingVertical: 7, paddingHorizontal: 20, borderRadius: 6 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', }}>
            Exercises
          </Text>
        </View>
      </View>

      <ScrollView>
        {Object.entries(workouts).map(([workoutName, workoutExercises], index) => (
          <WorkoutSplitCard key={index} workoutName={workoutName} workouts={workoutExercises} />
        ))}
        <ThinLine style={{ alignSelf: 'center', width: '95%', marginVertical: 10 }} />
        <WhiteTextButtonNew onPress={addNewDay} text={'+ add day'} style={{alignSelf: 'center', width: '95%', marginBottom: 10}}/>
      </ScrollView>
    </View>
  );
};

export default SplitWorkoutScreen;
