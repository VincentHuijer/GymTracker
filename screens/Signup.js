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
import { View, TouchableOpacity } from "react-native";
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


import DateTimePicker from '@react-native-community/datetimepicker';

const {brand, darkLight, primary} = Colors;

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  }

  const showDatePicker = () => {
    setShow(true);
  }

  return (
    <StyledContainer>
    <StatusBar style="dark"/>
      <InnerContainer>
        {/* <PageLogo resizeMode="cover" source={require('./../assets/flexer.png')}/> */}
        <PageTitle> Vincent Gym </PageTitle>
        <SubTitle> Account Signup </SubTitle>

        {show && (
          <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode='date'
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
        )}
        <Formik
          initialValues = {{ fullName: '', email: '', dateOfBirth: '', password: '',  ConfirmPassword: '' }}
          onSubmit = {(values) => { 
            console.log(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="ArnoldS@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
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
                label="Date of Birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
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
              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="*******"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('ConfirmPassword')}
                onBlur={handleBlur('ConfirmPassword')}
                value={values.ConfirmPassword}
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
              

              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink>
                  <TextLinkContent> Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand}/>
      </LeftIcon>

      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props}/>
        </TouchableOpacity>
      )}


      {isPassword && ( 
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={ hidePassword ? 'eye-off' : 'eye' } size={30} color={darkLight}/>
        </RightIcon>
      )}
    </View>
  )
}

export default Signup;