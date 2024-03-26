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
} from '../components/styles';
import { StatusBar } from "expo-status-bar";
import { Formik } from 'formik';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import DateTimePicker from '@react-native-community/datetimepicker';
import AuthRegistration from './AuthRegistration';
import * as Google from 'expo-auth-session/providers/google';

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

export default function Auth() {
  const navigation = useNavigation();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '44274847869-7a3tejkte9b6gs4cckab3uvrea175nss.apps.googleusercontent.com',
  });
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      signInWithGoogle(id_token);
    }
  }, [response]);

  async function signInWithGoogle(idToken) {
    try {
      const { user, error } = await supabase.auth.signIn({ provider: 'google', token: idToken });
      if (error) {
        Alert.alert('Error signing in with Google');
      } else {
        // Handle successful sign-in
        console.log('Signed in with Google:', user);
      }
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  }


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
        <SubTitle> Account Login </SubTitle>
        <View>
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
            <Button title="Sign up" disabled={loading} onPress={() => navigation.navigate('AuthRegistration')}/> {/*Works despite being red. Idk why it does the funny */}
          </View>
          <View style={{paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20}}>
            <Button
              buttonStyle={{ backgroundColor: '#10B981' }}
              title="Sign in with Google"
              disabled={loading || response?.type === 'loading'}
              onPress={() => promptAsync()}
            /> 
          </View>
        </View>
      </InnerContainer>
    </StyledContainer>
  )
}

