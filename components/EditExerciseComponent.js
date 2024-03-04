import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PushIcon, SixDotsBrailleIcon } from '../assets/SvgIcons';
import PlusButton from './PlusButton';
import ItemBox from './ItemBox';


const EditExerciseComponent = () => {
  return (
  <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#1C1C1E', paddingTop: 20}}>
    <TouchableOpacity style={{backgroundColor: '#252429', paddingVertical: 15,margin: 20,borderRadius: 12,width: '80%',alignItems: 'center', /*horizontally*/}} onPress={() => navigation.navigate('NonGenericWorkout')}>
      <View style={{ flexDirection: 'row', marginLeft: 20,}}>
        <SixDotsBrailleIcon/>
        <ItemBox>
            <PushIcon color='white'/>
        </ItemBox>
        <View>
          <Text style={[{alignSelf: 'center', marginHorizontal: 40, fontSize: 18, color: 'white', fontWeight:'bold'}]}>GenericEditExercise</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{ padding: 8, backgroundColor: '#343438', marginHorizontal: 8, color: 'white', fontWeight:'bold', borderRadius: 6,  alignSelf: 'center', flex: 1}}> 3 sets </Text>
            <Text style={{padding: 8, backgroundColor: '#343438', marginHorizontal: 8, color: 'white', fontWeight:'bold', borderRadius: 6, }}> 10 reps </Text>
          </View>
        </View>
        <PlusButton/>
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default EditExerciseComponent;
