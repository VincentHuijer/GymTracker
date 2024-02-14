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
  Colors
} from './../components/styles';
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from 'formik';
import { View } from "react-native";
import {Octicons, Ionicons} from '@expo/vector-icons';

const {brand, darkLight} = Colors;

const Login = () => {

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
    <StatusBar style="dark"/>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/flexer.png')}/>
        <PageTitle> Vincent Gym </PageTitle>
        <SubTitle> Account Login </SubTitle>
        
       

        <Formik
          initialValues = {{ email: '', password: '' }}
          onSubmit = {(values) => { 
            console.log(values);
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