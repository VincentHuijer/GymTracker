import { 
  StyledContainer, 
  InnerContainer, 
  PageLogo, 
  PageTitle,
  SubTitle,
  StyledFormArea
} from './../components/styles';
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const Login = () => {
  return (
    <StyledContainer>
    <StatusBar style="dark"/>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/favicon.png')}/>
        <PageTitle> Flower Crib </PageTitle>
        <SubTitle> Account Login </SubTitle>
        
       
      </InnerContainer>
    </StyledContainer>
  );
}

const MyTextInput = ({label, icon, ...props}) => {
  return (
    <view>

    </view>
  )
}

export default Login;