import React from 'react';
import { View, Text } from "react-native-web";
import { DietGraneIcon, MuscleIcon, PullIcon, PushIcon, SixDotsBrailleIcon, WorkoutsTabIconDumbell } from "./../assets/SvgIcons.js";
import EditExerciseComponent from "./EditExerciseComponent";

const WorkoutCard = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1E', alignItems: 'center',  }}>
      <View style={{  backgroundColor: '#4F4F4F', width: '95%' }}>
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor:'#46454C', marginBottom: 2, paddingVertical: 5}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 15}}>
            WorkoutName, Day X, split: Push
          </Text>
        </View>
        <EditExerciseComponent icon={<PullIcon/>} exerciseName={'dumbell press'}/>
        <EditExerciseComponent icon={<PushIcon/>}/>
        <EditExerciseComponent icon={<MuscleIcon/>}/>
        <EditExerciseComponent icon={<WorkoutsTabIconDumbell/>}/>
        <EditExerciseComponent icon={<DietGraneIcon/>}/>
      </View>
    </View>
  )
}

export default WorkoutCard;