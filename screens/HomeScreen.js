import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  const getAdjustedDayIndex = (originalIndex) => (originalIndex + 6) % 7; //current index + 6 and then divide by 7. Otherwise weeks start with Sunday. Basically move it by a day

  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const currentDayIndex = getAdjustedDayIndex(new Date().getUTCDay());


  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1E' }}>{/* In React Native, the flex property is used to define how a component should grow in relation to its siblings within a flex container. Setting flex: 1 on a component makes it take up all the available space along the main axis of its container. */}
      <View style={{ backgroundColor: '#343438', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1,  padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {daysOfWeek.map((day, index) => (
              <View
                key={index}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: index === currentDayIndex ? '#3E1FFD' : '#51566A',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  // borderWidth: index === currentDayIndex ? 2 : 0,
                  // borderColor: 'white',

                }}
              >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{day}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
