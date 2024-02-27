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
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from 'formik';
import { View, StyleSheet } from "react-native";
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const {brand, darkLight, primary, white} = Colors;

const Login = ({ setUserAuthenticated }) => {

  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  // const navigation = useNavigation();

  return (
  <StyledContainer>
    <StatusBar style="dark"/>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/flexer.png')} style={{marginTop: 50}} />
        <PageTitle> Vincent Gym </PageTitle>
        <SubTitle> Account Login </SubTitle>
        <Formik
          initialValues = {{ email: '', password: '' }}
          onSubmit = {(values) => { 

            console.log(values);

            console.log('b4 authenticate:', setUserAuthenticated)
            setUserAuthenticated(true); //In React, state is not mutated directly. Instead you use state update functions. (setUserAuthenticated = true;) is not correct because its a function and not a variable
            console.log('user is authenticated:', setUserAuthenticated)
            // navigation.navigate('Home')
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="ArnoldS@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="*******"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line/>
              <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" color={primary} size={25}/>
                <ButtonText google={true}>Sign in with Google</ButtonText>
              </StyledButton>

              <ExtraView>
                <ExtraText>Don't have an account already?</ExtraText>
                <TextLink onPress={() => navigation.navigate('Signup')}>
                  <TextLinkContent> Signup</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand}/>
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && ( 
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={ hidePassword ? 'eye-off' : 'eye' } size={30} color={darkLight}/>
        </RightIcon>
      )}
    </View>
  )
}




export default Login;