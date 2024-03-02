import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PushIcon } from '../assets/SvgIcons';
import PlusButton from './PlusButton';
import ItemBox from './ItemBox';


const ExerciseComponent = () => {
  return (
  <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#1C1C1E', paddingTop: 20}}>
    <TouchableOpacity style={{backgroundColor: '#252429', paddingVertical: 15,margin: 20,borderRadius: 10,width: '80%',alignItems: 'center', /*horizontally*/}} onPress={() => navigation.navigate('NonGenericWorkout')}>
      <View style={{ flexDirection: 'row', marginLeft: 20,}}>
      <ItemBox>
      <PushIcon color='white'/>
      </ItemBox>
        <Text style={[{alignSelf: 'center', marginHorizontal: 40, fontSize: 18, color: 'white', fontWeight:'bold'}]}>GenericExercise</Text>
        <PlusButton/>
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default ExerciseComponent;
