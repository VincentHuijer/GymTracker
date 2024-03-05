import React from 'react';
import { View, Text } from "react-native-web";
import { DietGraneIcon, MuscleIcon, PullIcon, PushIcon, SixDotsBrailleIcon, WorkoutsTabIconDumbell } from "../assets/SvgIcons.js";
import EditExerciseComponent from "./EditExerciseComponent.js";
import WhiteTextButton from './WhiteTextButton.js';

const WorkoutSplitCard = ({workoutName = 'WorkoutName', day = 1, split = 'push', workouts = []}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1E', alignItems: 'center', marginBottom: 5 }}>
      <View style={{  backgroundColor: '#4F4F4F', width: '95%', alignItems: 'center', paddingBottom: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor:'#343438', marginBottom: 5, paddingVertical: 5, width: '100%'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 24}}>
            {workoutName}, {day}, {split}
          </Text>
        </View>
        <View style={{ alignItems: 'center'}}>
          <EditExerciseComponent icon={<PullIcon/>} exerciseName={'dumbell press'}/>
          <EditExerciseComponent icon={<PushIcon/>}/>
          <EditExerciseComponent icon={<MuscleIcon/>}/>
          <EditExerciseComponent icon={<WorkoutsTabIconDumbell/>}/>
          <EditExerciseComponent icon={<DietGraneIcon/>}/>
          <WhiteTextButton text={'+ add exercise'}/>

        </View>
      </View>
    </View>
  )
}

export default WorkoutSplitCard;