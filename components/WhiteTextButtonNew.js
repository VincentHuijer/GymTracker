import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

const WhiteTextButtonNew = ({text, style, onPress}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 6,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        ...style
      }}
    >
    <TouchableOpacity onPress={onPress}>

      <Text
        style={{
          fontSize: 20,
          color: 'black',
          textAlign: 'center'
        }}
      >
        {text}
      </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WhiteTextButtonNew;
