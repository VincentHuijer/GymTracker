import React, { useEffect, useState } from 'react';
import { Modal, View } from 'react-native';
import WhiteTextButtonNew from './WhiteTextButtonNew';
import { 
  StyledContainer, 
  InnerContainer, 
  PageLogo, 
  PageTitle,
  SubTitle,
  Colors,
} from './../components/styles';
import { StatusBar } from "expo-status-bar";
import { Input } from 'react-native-elements'
const {darkLight} = Colors;



const NewEntryModal = ({ visible, onClose, onSave, weight, setWeight, notes, setNotes, dateTime, setDateTime }) => {
  const [newEntry, setNewEntry] = useState(false);

  const handleSave = () => {
    if (weight !== ''){
      onSave({
        weight: parseFloat(weight),
        notes: this.notes
      });
      onClose();
    }
    else { console.log('missing weight input', weight)}
  }

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide">
      <StyledContainer>
        <StatusBar style="dark"/>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/FitnessLogo.png')} style={{marginTop: 50, borderRadius: 200, borderWidth: 5, borderColor: 'white',}} />
          <PageTitle> MoggingFitness </PageTitle>
          <SubTitle> New Entry </SubTitle>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20 }}>
            <Input
              value={weight}
              label="Enter Weight"
              inputStyle={{ color: 'white' }}
              onChangeText={(text) => {
                const numericValue = text.replace(/[^0-9.]/g, "")
                setWeight(numericValue);
              }} 
              placeholder="Enter weight"  
              placeholderTextColor={darkLight}
              keyboardType="numeric" 
            />
          </View>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20 }}>
            <Input
              value={notes}
              label="Enter notes"
              inputStyle={{ color: 'white' }}
              onChangeText={setNotes} 
              keyboardType="number-pad" 
              placeholder="Enter notes" 
              placeholderTextColor={darkLight}
            />
          </View>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20 }}>
            <Input
              value={dateTime}
              label="dateTime"
              inputStyle={{ color: 'grey' }}
              onChangeText={setDateTime} 
              keyboardType="number-pad" 
              placeholder="Enter date & time" 
              placeholderTextColor={darkLight}
              editable={false}
            />
          </View>
          <WhiteTextButtonNew 
            text={'save weight'} 
            onPress={handleSave} 
            style={{ backgroundColor: weight === '' ? '#CCCCCC' : '#5BE432', width: '100%', marginTop: 10, borderRadius: 3 }}
            disabled={!weight}
          />
          <WhiteTextButtonNew 
            text={'Cancel'} 
            onPress={onClose} 
            style={{ backgroundColor: '#2CB3FC', width: '100%', marginTop: 10, borderRadius: 3 }}
          />
        </InnerContainer>
      </StyledContainer>
    </Modal>
  );
};

export default NewEntryModal;
