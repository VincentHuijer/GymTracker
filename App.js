import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeTabIcon, CalendarTabIcon, WorkoutsTabIcon, ProgressTabIcon, ProfileTabIcon } from './assets/SvgIcons';

//login screens
import Signup from './screens/Signup';
import Login from './screens/Login';
import Welcome from './screens/Welcome';


//more screens
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import WorkoutsScreen from './screens/WorkoutsScreen';
import ProgressScreen from './screens/ProgressScreen';
import ProfileScreen from './screens/ProfileScreen';

import CreateWorkoutsScreen from './screens/workoutScreens/CreateWorkoutsScreen';

const WorkoutsStack = createStackNavigator();
const Tab = createBottomTabNavigator(); //bottm navbar

const WorkoutsNavigator = () => (
  <WorkoutsStack.Navigator>
    <WorkoutsStack.Screen name="Workouts" component={WorkoutsScreen}  options={{ headerShown: false }}/>
    <WorkoutsStack.Screen name="CreateWorkouts" component={CreateWorkoutsScreen} options={{ headerShown: false }} />
  </WorkoutsStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <HomeTabIcon color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <CalendarTabIcon color={color} size={size} />
              ),
            }}
        />
         <Tab.Screen
        name="Workout"
        component={WorkoutsNavigator} // Use the nested navigator for "Workout"
        options={{
          tabBarIcon: ({ color, size }) => (
            <WorkoutsTabIcon color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <ProgressTabIcon color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <ProfileTabIcon color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    );
}
