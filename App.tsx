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
import { ThemeContext } from 'styled-components/native';
import AuthRegistration from './screens/AuthRegistration';
import { useContext } from 'react';
import { SessionContext } from './SessionContext';
import BodyWeightScreen from './screens/workoutScreens/BodyWeightScreen';



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

  
const WorkoutsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator(); //bottom navbar

const WorkoutsNavigator = () => (
  <WorkoutsStack.Navigator screenOptions={{}}>
    <WorkoutsStack.Screen name="Workouts" component={WorkoutsScreen}  options={{ headerShown: false }}/>
    <WorkoutsStack.Screen name="CreateWorkouts" component={CreateWorkoutsScreen} options={{ headerShown: false }} />
    <WorkoutsStack.Screen name="CreateSplits" component={CreateSplitsScreen} options={{ headerShown: false }} />
    <WorkoutsStack.Screen name="MyWorkouts" component={MyWorkoutsScreen} options={{ headerShown: false }} />
    <WorkoutsStack.Screen name="NonGenericWorkout" component={NonGenericWorkout} options={{ headerShown: false }} />
    <WorkoutsStack.Screen name="MySplits" component={MySplits} options={{ headerShown: false }} />
    <WorkoutsStack.Screen name="SplitWorkoutScreen" component={SplitWorkoutScreen} options={{ headerShown: false }} />
    <WorkoutsStack.Screen name="AddExerciseListScreen" component={AddExerciseListScreen} options={{ headerShown: false }} />
    <WorkoutsStack.Screen name="AddChestExerciseWorkoutScreen" component={AddChestExerciseWorkoutScreen} options={{ headerShown: false }} />
  </WorkoutsStack.Navigator>
);



const ProfileNavigator = ()  => (
  <ProfileStack.Navigator screenOptions={{}}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
    <ProfileStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <ProfileStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    <ProfileStack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    <ProfileStack.Screen name="Account" component={Account} options={{ headerShown: false }} />
  </ProfileStack.Navigator>
);


const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={{}}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    <HomeStack.Screen name="MyWorkouts" component={MyWorkoutsScreen} options={{ headerShown: false }}/>
    <HomeStack.Screen name="NonGenericWorkout" component={NonGenericWorkout} options={{ headerShown: false }}/>
    <HomeStack.Screen name="AddExerciseListScreen" component={AddExerciseListScreen} options={{ headerShown: false }}/>
    <HomeStack.Screen name="BodyWeightScreen" component={BodyWeightScreen} options={{ headerShown: false }}/>
  </HomeStack.Navigator>
);


const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{}}>
    <AuthStack.Screen name="Auth" component={Auth} options={{ headerShown: false }}/>
    <AuthStack.Screen name="AuthRegistration" component={AuthRegistration} options={{ headerShown: false }}/>
  </AuthStack.Navigator>
);




const MainNavigator = ({ session }: { session: Session }) => {
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen
            name="Home"
            component={HomeNavigator}
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
          component={WorkoutsNavigator} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <WorkoutsTabIconDumbell color={color} size={size} />
            ),
          }}
        />
          <Tab.Screen
            name="Progress"
            component={ProgressScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <ProgressTabIcon color={color} size={size}/>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileNavigator}
            options={{
              tabBarIcon: ({ color, size }) => (
                <ProfileTabIcon color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SessionContext.Provider>
  );
};

const AuthMainNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="SomeScreen"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}



  return (
    <>
      {session && session.user ? <MainNavigator key={session.user.id} session={session} /> : <AuthMainNavigator />}
    </>
  )
}