import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CalendarScreen = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
    onDayPress={day => {
      setSelected(day.dateString);
    }}
    markedDates={{
      [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'},
      '2024-02-15': {marked: true, dotColor: '#50cebb'},
      '2024-02-12': {marked: true, selectedColor: 'blue'},
      '2024-02-16': {marked: true, selectedColor: 'green'},
      '2024-02-21': {marked: true, selectedColor: 'blue'},
      '2024-02-21': {marked: true, selectedColor: 'red'}
    }}
  />
);
};

export default CalendarScreen;
