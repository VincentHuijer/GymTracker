import React, { useState } from 'react';
import { Modal, View, TextInput, Button, Text } from 'react-native';
import WhiteTextButtonNew from './WhiteTextButtonNew';
import moment from 'moment';

const EditEntryModal = ({ visible, onClose, entry, onEdit, onRemove }) => {
  const [editedWeight, setEditedWeight] = useState(entry.weight.toString());
  const [editedNotes, setEditedNotes] = useState(entry.notes);
  const [recorded_At, setRecorded_At] = useState(moment(entry.recorded_at).format('YYYY-MM-DD HH:mm:ss'));

  const handleEdit = () => {
    onEdit({
      ...entry,
      weight: parseFloat(editedWeight),
      notes: editedNotes,
      dateTime: recorded_At
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
        <TextInput 
          placeholder="EDIT ENTRY" 
          style={{ padding: 10, fontSize: 30, backgroundColor: 'cyan', marginTop: 10, marginBottom: 100 }}
          editable={false}
        />
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
          value={recorded_At} 
          onChangeText={setRecorded_At} 
          placeholder="Enter date & time" 
          style={{ padding: 10, fontSize: 30, backgroundColor: 'grey', marginTop: 10 }}
          editable={false} //no longer editable after feedback
        />
        <WhiteTextButtonNew 
          text={'Edit'} 
          onPress={handleEdit} 
          style={{ backgroundColor: '#5BE432', width: '85%', marginTop: 10 }}
        />
        <WhiteTextButtonNew 
          text={'Remove'} 
          onPress={handleRemove} 
          style={{ backgroundColor: '#E43D32', width: '85%', marginTop: 10 }}
        />
        <WhiteTextButtonNew 
          text={'Cancel'} 
          onPress={onClose} 
          style={{ backgroundColor: '#CCCCCC', width: '85%', marginTop: 10 }}
        />
      </View>
    </Modal>
  );
};

export default EditEntryModal;
