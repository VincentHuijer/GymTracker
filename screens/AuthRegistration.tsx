import React, { useState } from 'react'
import { Alert, StyleSheet, View, AppState, TouchableOpacity} from 'react-native'
import { supabase } from '../lib/supabase'
import { Button, Input } from 'react-native-elements'
import { 
  StyledContainer, 
  InnerContainer, 
  PageLogo, 
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLinkContent,
  TextLink
} from './../components/styles';
import { StatusBar } from "expo-status-bar";
import { Formik } from 'formik';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import DateTimePicker from '@react-native-community/datetimepicker';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

const {brand, darkLight, primary, white} = Colors;

export default function AuthRegistration() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(moment().format('DD/MM/YYYY'));
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  

  return (
    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/FitnessLogo.png')} style={{marginTop: 50, borderRadius: 200, borderWidth: 5, borderColor: 'white',}} />
        <PageTitle> MoggingFitness </PageTitle>
        <SubTitle> Account Signup </SubTitle>
        <View style={{marginTop: 40, padding: 12}}>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20 }}>
            <Input
              label="username"
              leftIcon = {
                  <Octicons name='person' color={brand} size={25}/>
              }
              inputStyle={{ color: 'white' }}
              onChangeText={(text) => setUsername(text)}
              value={email}
              placeholder="email@address.com"
              placeholderTextColor={darkLight}
              autoCapitalize={'none'}
            />
          </View>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20 }}>
            <Input
              label="Email"
              leftIcon = {
                  <Octicons name='mail' color={brand} size={25}/>
              }
              inputStyle={{ color: 'white' }}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              placeholderTextColor={darkLight}
              autoCapitalize={'none'}
            />
          </View>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20 }}>
            <Input
              label="Date Of Birth"
              leftIcon = {
                  <Octicons name='calendar' color={brand} size={25}/>
              }
              inputStyle={{ color: 'white' }}
              onChangeText={(text) => setDateOfBirth(text)}
              value={email}
              placeholder="1/1/2024"
              placeholderTextColor={darkLight}
              autoCapitalize={'none'}
            />
          </View>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch' }}>
            <Input
              label="Password"
              leftIcon = { <Octicons name='lock' color={brand} size={25}/> }
              inputStyle={{ color: 'white' }}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={darkLight}
              autoCapitalize={'none'}
            />
          </View>
          <View style={{paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20}}>
            <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
          </View>
          <View style={{paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20}}>
            <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
          </View>
        </View>
      </InnerContainer>
    </StyledContainer>
  )
}

