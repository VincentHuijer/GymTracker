import React from 'react';
import { Modal, View, TextInput, Button } from 'react-native';

const NewEntryModal = ({ visible, onClose, onSave, weight, setWeight, notes, setNotes, dateTime, setDateTime }) => {
  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput value={weight} onChangeText={setWeight} keyboardType="numeric" placeholder="Enter weight" />
        <TextInput value={notes} onChangeText={setNotes} placeholder="Enter notes" />
        <TextInput value={dateTime} onChangeText={setDateTime} placeholder="Enter date & time" />
        <Button title="Save Weight" onPress={onSave} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default NewEntryModal;
