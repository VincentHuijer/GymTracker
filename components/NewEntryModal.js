import React from 'react';
import { Modal, View, TextInput, Button } from 'react-native';
import WhiteTextButtonNew from './WhiteTextButtonNew';

const NewEntryModal = ({ visible, onClose, onSave, weight, setWeight, notes, setNotes, dateTime, setDateTime }) => {
  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1C1C1E" }}>
        <TextInput 
          value={weight} 
          onChangeText={setWeight} 
          keyboardType="number-pad" 
          placeholder="Enter weight" 
          style={{ padding: 10, fontSize: 30, backgroundColor: 'white' }}
        />
        <TextInput 
          value={notes}
          onChangeText={setNotes} 
          placeholder="Enter notes" 
          style={{ padding: 10, fontSize: 30, backgroundColor: 'white', marginTop: 10 }}
        />
        <TextInput 
          value={dateTime} 
          onChangeText={setDateTime} 
          placeholder="Enter date & time" 
          style={{ padding: 10, fontSize: 30, backgroundColor: 'grey', marginTop: 10 }}
          editable={false}
        />
        <WhiteTextButtonNew 
          text={'save weight'} 
          onPress={onSave} 
          style={{ backgroundColor: '#5BE432', width: '85%', marginTop: 10 }}
        />
        <WhiteTextButtonNew 
          text={'Cancel'} 
          onPress={onClose} 
          style={{ backgroundColor: '#E43D32', width: '85%', marginTop: 10 }}
        />
      </View>
    </Modal>
  );
};

export default NewEntryModal;
