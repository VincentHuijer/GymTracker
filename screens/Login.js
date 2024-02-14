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
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from 'formik';
import { View } from "react-native";
import {Octicons} from '@expo/vector-icons';

const {brand, darkLight} = Colors;

const Login = () => {
  return (
    <StyledContainer>
    <StatusBar style="dark"/>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/favicon.png')}/>
        <PageTitle> Flower Crib </PageTitle>
        <SubTitle> Account Login </SubTitle>
        
        <Formik
          initialValues = {{ email: '', password: '' }}
          onSubmit = {(values) => { 
            console.log(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => {
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
            </StyledFormArea>
          }}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
}

const MyTextInput = ({label, icon, ...props}) => {
  return (
    <view>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand}/>
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </view>
  )
}

export default Login;