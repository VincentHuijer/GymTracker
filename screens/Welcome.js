import { 
  InnerContainer, 
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar
} from './../components/styles';
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";


const Welcome = () => {

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <>
      <StatusBar style="light"/>
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/dumbells.png')}/>
        <WelcomeContainer>
          <PageTitle welcome={true}> Welcome buddy </PageTitle>
          <SubTitle welcome={true}> Arnold S </SubTitle>
          <SubTitle welcome={true}> Arnold@gmail.com </SubTitle>
          
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/flexer.png')}/>
            <Line/>
            <StyledButton onPress={() => {}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
}



export default Welcome;