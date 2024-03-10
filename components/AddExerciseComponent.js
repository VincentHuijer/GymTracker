import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MuscleIcon } from '../assets/SvgIcons';
import PlusButton from './PlusButton';
import ItemBox from './ItemBox';


const AddExerciseComponent = ({icon = <MuscleIcon/>, exerciseName = 'Exercise'}) => {
  return (
  <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#1C1C1E'}}>
    <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#252429', paddingVertical: 8, paddingHorizontal: 60, marginVertical: 8, marginHorizontal: 20,borderRadius: 10, alignItems: 'center', }} onPress={() => navigation.navigate('NonGenericWorkout')}>
        <ItemBox>
          {icon}
        </ItemBox>
        <Text style={[{alignSelf: 'center', marginHorizontal: 40, fontSize: 18, color: 'white', fontWeight:'bold'}]}>{exerciseName}</Text>
        <PlusButton/>
    </TouchableOpacity>
  </View>
  )
}

export default AddExerciseComponent;
