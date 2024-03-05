import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { BalanceScaleIcon, CopyIcon, DietGraneIcon, HistoryRepeatIcon, PlusIcon, PullIcon, PushIcon, WorkoutsTabIconDumbell } from '../assets/SvgIcons';
import dumbellIcon from '../assets/dumbbellIcon.png';
import { useNavigation } from '@react-navigation/native';
import WorkoutSplitCard from '../components/WorkoutSplitCard';
import { ScrollView } from 'react-native-web';

const HomeScreen = () => {
  const navigation = useNavigation();
  const getAdjustedDayIndex = (originalIndex) => (originalIndex + 6) % 7; //current index + 6 and then divide by 7. Otherwise weeks start with Sunday. Basically move it by a day

  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const currentDayIndex = getAdjustedDayIndex(new Date().getUTCDay());


  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>{/* In React Native, the flex property is used to define how a component should grow in relation to its siblings within a flex container. Setting flex: 1 on a component makes it take up all the available space along the main axis of its container. */}
  <ScrollView>
  <WorkoutSplitCard workoutName='ArmsDay' day={1} split='arnold'/>      
  <WorkoutSplitCard workoutName='ChestDay' day={2} split='arnold'/>      
  <WorkoutSplitCard workoutName='Legsday' day={4} split='arnold'/>      

  </ScrollView>
    </View>
    
  );
};

export default HomeScreen;
