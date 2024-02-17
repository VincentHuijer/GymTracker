import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CreateSplitsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('PPLSplit')}>
        <Text style={styles.text}>Push Pull Legs Split</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('TotalBodySplit')}>
        <Text style={styles.text}>Total Body split</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('UpperLowerSplit')}>
        <Text style={styles.text}>Upper Lower split</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('BroSplit')}>
        <Text style={styles.text}>Bro split</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('ArnoldSplit')}>
        <Text style={styles.text}>Arnold split</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('CreateOwnSplit')}>
        <Text style={styles.text}>Create Own Split</Text>
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
    backgroundColor: 'white',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 10, //edges on borders
    width: '80%',
    alignItems: 'center', //horizontally
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateSplitsScreen;
