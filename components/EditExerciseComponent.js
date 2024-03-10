import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MuscleIcon, PushIcon, SixDotsBrailleIcon } from '../assets/SvgIcons';
import ItemBox from './ItemBox';


const EditExerciseComponent = ({icon = <MuscleIcon/>, exerciseName = 'Exercise'}) => {
  return (
  <View style={{ backgroundColor: '#252429', borderRadius: 8, alignSelf:'center', marginVertical: 8}}>
    <TouchableOpacity
      style={{
        paddingVertical: 5,
        marginLeft: 10,
        marginRight: 100,
        borderRadius: 8,
        flexDirection: 'row', 
      }}
      onPress={() => navigation.navigate('NonGenericWorkout')}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
        <SixDotsBrailleIcon />
        <ItemBox>
          {icon}
        </ItemBox>
      </View>
      <View>
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{exerciseName}</Text>
        <View style={{ flexDirection: 'row',  justifyContent: 'space-evenly'}}>
          <Text style={{  backgroundColor: '#343438', color: 'white', fontWeight: 'bold', borderRadius: 6, paddingVertical: 8, paddingHorizontal: 16, marginRight: 10 }}>3 sets</Text>
          <Text style={{  backgroundColor: '#343438', color: 'white', fontWeight: 'bold', borderRadius: 6, paddingVertical: 8, paddingHorizontal: 16 }}>10 reps</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
  
  )
}

export default EditExerciseComponent;
