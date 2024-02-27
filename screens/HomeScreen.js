import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { BalanceScaleIcon, DietGraneIcon, HistoryRepeatIcon, WorkoutsTabIconDumbell } from '../assets/SvgIcons';
import dumbellIcon from '../assets/dumbbellIcon.png';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const getAdjustedDayIndex = (originalIndex) => (originalIndex + 6) % 7; //current index + 6 and then divide by 7. Otherwise weeks start with Sunday. Basically move it by a day

  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const currentDayIndex = getAdjustedDayIndex(new Date().getUTCDay());


  const InnerShadowBox = ({ children }) => {
    return (
      <View style={{
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 60,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
      }}>
        {children}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1E' }}>{/* In React Native, the flex property is used to define how a component should grow in relation to its siblings within a flex container. Setting flex: 1 on a component makes it take up all the available space along the main axis of its container. */}
      <View style={{ backgroundColor: '#343438', padding: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 100}}>
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

      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 70, marginBottom: 20, alignContent: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Weight')}>
            <View style={{backgroundColor: 'white',  paddingVertical: 40, paddingHorizontal: 31, borderRadius: 9}}>
              <View style={{alignItems: 'center'}}> {/*icon didnt wanna go to the center for some reason*/}
                <BalanceScaleIcon style={{ width: 40, height: 40, marginBottom: 2 }} />
              </View>
              <Text style={{  color: 'black', textAlign: 'center'}}>Body Weight</Text>
            </View>
          </TouchableOpacity>

          <View style={{ backgroundColor: 'white', paddingVertical: 40, paddingHorizontal: 50, borderRadius: 9, alignItems: 'center' }}>
            <DietGraneIcon style={{ width: 40, height: 40, marginBottom: 2 }} />
            <Text style={{ color: 'black', textAlign: 'center' }}>Diet</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 70, marginBottom: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('MyWorkouts')}>
            <View style={{backgroundColor: 'white',  paddingVertical: 40, paddingHorizontal: 30, borderRadius: 9}}>
              <Image source={dumbellIcon} style={{ width: 40, height: 40 , alignSelf: 'center', marginBottom: 2}} />
              <Text style={{  color: 'black', textAlign: 'center'}}>My workouts</Text>
            </View>
          </TouchableOpacity>
          <View style={{ backgroundColor: 'white', paddingVertical: 40, paddingHorizontal: 20, borderRadius: 9, alignItems: 'center' }}>
            <HistoryRepeatIcon style={{ width: 40, height: 40, marginBottom: 2 }} />
            <Text style={{ color: 'black', textAlign: 'center' }}>Workout history</Text>
          </View>
        </View>
      </View>


      


      
    </View>
    
  );
};

export default HomeScreen;
