import React from 'react';
import { View, Text } from 'react-native';

const WhiteTextButton = ({text}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 6,
        width: '100%',
        height: 40,
        justifyContent: 'center'
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          textAlign: 'center'
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default WhiteTextButton;
