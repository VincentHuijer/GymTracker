import React from 'react';
import { View, Text } from 'react-native';

const ThinLine = ({text, style}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 6,
        width: '100%',
        height: 1,
        justifyContent: 'center',
        ...style
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

export default ThinLine;
