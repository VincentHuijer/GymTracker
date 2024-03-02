import React from 'react';
import { View, Text } from 'react-native';

const PlusButton = () => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
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
        }}
      >
        +
      </Text>
    </View>
  );
};

export default PlusButton;
