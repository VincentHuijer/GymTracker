import React from 'react';
import { View, Text } from 'react-native';

const PlusButton = ({width = 40, height = 40}) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          flex: 1,
          fontSize: 24,
          color: 'black',
          textAlign: 'center',
          marginTop: 7
        }}
      >
        +
      </Text>
    </View>
  );
};

export default PlusButton;
