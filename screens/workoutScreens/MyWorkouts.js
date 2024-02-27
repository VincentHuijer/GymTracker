import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PushIcon, PullIcon, MuscleIcon, LegPressIcon } from '../../assets/SvgIcons';

const MyWorkoutsScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <View style={{ flexDirection: 'row',  marginLeft: 20,}}>
          <LegPressIcon style={{ width: 40, height: 40, marginBottom: 2}} />
          <Text style={[styles.text, {alignSelf: 'center', marginLeft: 10}]}>Beentjes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <View style={{ flexDirection: 'row',  marginLeft: 20,}}>
          <MuscleIcon style={{ width: 40, height: 40, marginBottom: 2}} />
          <Text style={[styles.text, {alignSelf: 'center', marginLeft: 10}]}>Armknijper</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <View style={{ flexDirection: 'row',  marginLeft: 20,}}>
          <PullIcon style={{ width: 40, height: 40, marginBottom: 2}} />
          <Text style={[styles.text, {alignSelf: 'center', marginLeft: 10}]}>Hard trekken</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <View style={{ flexDirection: 'row',  marginLeft: 20,}}>
          <PushIcon style={{ width: 40, height: 40, marginBottom: 2}} />
          <Text style={[styles.text, {alignSelf: 'center', marginLeft: 10}]}>Hard duwen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingTop: 20// only great until custom splits get added
  },
  box: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 10, //edges on borders
    width: '80%',
    alignItems: 'center', 
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyWorkoutsScreen;
