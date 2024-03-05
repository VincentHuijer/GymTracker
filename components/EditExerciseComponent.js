import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PushIcon, SixDotsBrailleIcon } from '../assets/SvgIcons';
import ItemBox from './ItemBox';


const EditExerciseComponent = ({icon}) => {
  return (
  <View style={{ alignItems: 'center', backgroundColor: '#1C1C1E', borderRadius: 100, width: '80%', alignSelf:'center', marginBottom: 15}}>
    <TouchableOpacity
      style={{
        paddingVertical: 15,
        margin: -7,
        borderRadius: 12,
        width: '80%',
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
      }}
      onPress={() => navigation.navigate('NonGenericWorkout')}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <SixDotsBrailleIcon />
        <ItemBox>
          {icon}
        </ItemBox>
      </View>
      <View style={{   }}>
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>GenericEditExercise</Text>
        <View style={{ flexDirection: 'row',  justifyContent: 'space-evenly'}}>
          <Text style={{ padding: 8, backgroundColor: '#343438', color: 'white', fontWeight: 'bold', borderRadius: 6 }}>3 sets</Text>
          <Text style={{ padding: 8, backgroundColor: '#343438', color: 'white', fontWeight: 'bold', borderRadius: 6 }}>10 reps</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
  
  )
}

export default EditExerciseComponent;
