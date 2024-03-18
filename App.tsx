import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeTabIcon, CalendarTabIcon, WorkoutsTabIconDumbell, ProgressTabIcon, ProfileTabIcon } from './assets/SvgIcons';

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
import CreateSplitsScreen from './screens/workoutScreens/CreateSplitsScreen';
import MyWorkoutsScreen from './screens/workoutScreens/MyWorkouts';
import NonGenericWorkout from './screens/workoutScreens/NonGenericWorkout';
import SplitWorkoutScreen from './screens/workoutScreens/SplitWorkoutScreen';
import MySplits from './screens/MySplits';
import AddExerciseListScreen from './screens/workoutScreens/AddExerciseListScreen';
import AddChestExerciseWorkoutScreen from './screens/workoutScreens/AddChestExerciseWorkoutScreen';

//scripts

import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './screens/Auth'
import Account from './screens/Account'
import { Session } from '@supabase/supabase-js'
import { View } from 'react-native'

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}