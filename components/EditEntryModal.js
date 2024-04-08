import React, { useState } from 'react';
import { Modal, View, TextInput, Button, Text } from 'react-native';

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{`Recorded At: ${entry.recorded_at}`}</Text>
        <TextInput
          value={editedWeight}
          onChangeText={setEditedWeight}
          keyboardType="numeric"
          placeholder="Enter weight"
        />
        <TextInput
          value={editedNotes}
          onChangeText={setEditedNotes}
          placeholder="Enter notes"
        />
        <Button title="Edit" onPress={handleEdit} />
        <Button title="Remove" onPress={handleRemove} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default EditEntryModal;
