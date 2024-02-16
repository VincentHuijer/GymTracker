import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Calendar from 'expo-calendar';

const CalendarScreen = () => {
  const [calendarPermission, setCalendarPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      setCalendarPermission(status === 'granted');
    })();
  }, []);

  const handleAddEventToCalendar = async () => {
    if (!calendarPermission) {
      // Handle permission not granted
      return;
    }

    const defaultCalendar = await Calendar.getDefaultCalendarAsync();

    const eventDetails = {
      title: 'My Event',
      startDate: new Date(), // Set your start date
      endDate: new Date(),   // Set your end date
      timeZone: 'GMT+00:00', // Set your time zone
      location: 'Event Location',
      notes: 'Event Notes',
    };

    await Calendar.createEventAsync(defaultCalendar.id, eventDetails);
  };

  return (
    <View>
      <Text>Calendar</Text>
      <Button title="Add Event to Calendar" onPress={handleAddEventToCalendar} />
    </View>
  );
};

export default CalendarScreen;
