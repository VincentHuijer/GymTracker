import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MuscleIcon, PushIcon, SixDotsBrailleIcon } from '../assets/SvgIcons';
import ItemBox from './ItemBox';
import PlusButton from './PlusButton';


//FYI there exists 'AddExerciseComponent' which seems to do the job better.

const ListExerciseComponent = ({icon = <MuscleIcon/>, exerciseName = 'Exercise'}) => {
  return (
  <View style={{ backgroundColor: '#252429', borderRadius: 8, alignSelf:'center', marginBottom: 15}}>
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
        <ItemBox>
          {icon}
        </ItemBox>
      </View>
      <View>
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{exerciseName}</Text>
      </View>
      <PlusButton/>
    </TouchableOpacity>
  </View>
  
  )
}

export default ListExerciseComponent;
