import React, { useState } from 'react';
import { Modal, View, TextInput, Button, Text } from 'react-native';
import WhiteTextButtonNew from './WhiteTextButtonNew';

const EditEntryModal = ({ visible, onClose, entry, onEdit, onRemove }) => {
  const [editedWeight, setEditedWeight] = useState(entry.weight.toString());
  const [editedNotes, setEditedNotes] = useState(entry.notes);

  const handleEdit = () => {
    onEdit({
      ...entry,
      weight: parseFloat(editedWeight),
      notes: editedNotes,
    });
    onClose();
  };

  const handleRemove = () => {
    onRemove(entry.id);
    onClose();
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1C1C1E" }}>
        <Text>{`Recorded At: ${entry.recorded_at}`}</Text>
        <TextInput
          value={editedWeight}
          onChangeText={setEditedWeight}
          keyboardType="numeric"
          placeholder="Enter weight"
          style={{ padding: 10, fontSize: 30, backgroundColor: 'white', width: '85%', marginTop: 10 }}
        />
        <TextInput
          value={editedNotes}
          onChangeText={setEditedNotes}
          placeholder="Enter notes"
          style={{ padding: 10, fontSize: 30, backgroundColor: 'white', width: '85%', marginTop: 10 }}
        />
        <TextInput 
          value={dateTime} 
          onChangeText={setDateTime} 
          placeholder="Enter date & time" 
          style={{padding: 10, fontSize: 30, 
          backgroundColor: 'grey', 
          marginTop: 10}} 
          editable={false}
        />
        <WhiteTextButtonNew text={'Edit'} onPress={handleEdit} style={{ backgroundColor: '#5BE432', width: '85%', marginTop: 10 }} />
        <WhiteTextButtonNew text={'Remove'} onPress={handleRemove} style={{ backgroundColor: '#E43D32', width: '85%', marginTop: 10 }} />
        <WhiteTextButtonNew text={'Cancel'} onPress={onClose} style={{ backgroundColor: '#CCCCCC', width: '85%', marginTop: 10 }} />
        <Text> I AM AN EDIT MODAL, I AM AN EDIT MODAL III AAAAM AN EDIT MODAL</Text>
      </View>
    </Modal>
  );
};

export default EditEntryModal;
