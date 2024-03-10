import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MuscleIcon, PushIcon, SixDotsBrailleIcon } from '../assets/SvgIcons';
import ItemBox from './ItemBox';
import PlusButton from './PlusButton';


const AddExerciseComponent = ({icon = <MuscleIcon/>, exerciseName = 'Dumbell Chest Press'}) => {
  return (
  <View style={{ backgroundColor: '#252429', borderRadius: 8, marginVertical: 8}}>
    <TouchableOpacity
      style={{
        paddingVertical: 5,
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 8,
        flexDirection: 'row', 
        alignItems: 'center'
      }}
      onPress={() => navigation.navigate('NonGenericWorkout')}
    >

    <View style={{marginRight: 50, marginLeft: 10}}>

        <ItemBox>
          {icon}
        </ItemBox>
    </View>
      <View>
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold',  marginRight: 50 }}>{exerciseName}</Text>
      </View>
      <PlusButton width={50} height={50}/>
    </TouchableOpacity>
  </View>
  
  )
}

export default AddExerciseComponent;
