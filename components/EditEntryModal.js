import React, { useEffect, useState } from 'react';
import { Modal, View} from 'react-native';
import WhiteTextButtonNew from './WhiteTextButtonNew';
import moment from 'moment';
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

const EditEntryModal = ({ visible, onClose, entry, onEdit, onRemove }) => {
  const [editedWeight, setEditedWeight] = useState(entry.weight.toString());
  const [editedNotes, setEditedNotes] = useState(entry.notes);
  const [recorded_At] = useState(moment(entry.recorded_at).local().format('YYYY-MM-DD HH:mm'));
  const [editedEntry, setEditedEntry] = useState(false);

  useEffect(() => {
    setEditedEntry(editedWeight !== entry.weight.toString() || editedNotes !== entry.notes);
  }, [editedWeight, editedNotes, entry]);


  const handleEdit = () => {
    if(editedEntry){
      onEdit({
        ...entry,
        weight: parseFloat(editedWeight),
        notes: editedNotes,
      });
      onClose();
    }
    else { console.log('no edits detected')}
  };

  const handleRemove = () => {
    onRemove(entry.id);
    onClose();
  };
  

  return (
    <Modal visible={visible} onRequestClose={onClose} animationType="slide">
      <StyledContainer>
        <StatusBar style="dark"/>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/FitnessLogo.png')} style={{marginTop: 50, borderRadius: 200, borderWidth: 5, borderColor: 'white',}} />
          <PageTitle> MoggingFitness </PageTitle>
          <SubTitle> Edit Entry </SubTitle>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20 }}>
            <Input
              value={editedWeight}
              label="Enter Weight"
              inputStyle={{ color: 'white' }}
              onChangeText={(text) => {
                const numericValue = text.replace(/[^0-9.]/g, "")
                setEditedWeight(numericValue);
                setEditedEntry(text !== entry.weight.toString() || editedNotes !== entry.notes);
              }}     
              placeholderTextColor={darkLight}
            />
          </View>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20 }}>
            <Input
              value={editedNotes}
              label="Enter Notes"
              inputStyle={{ color: 'white' }}
              onChangeText={(text) => {
                setEditedNotes(text);
                setEditedEntry(editedWeight !== entry.weight.toString() || text !== entry.notes);
              }}          
              placeholder="Enter notes"
              placeholderTextColor={darkLight}
            />
          </View>
          <View style={{ paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch', marginTop: 20 }}>
            <Input
              value={recorded_At}
              label="recorded at"
              inputStyle={{ color: 'white' }}
              placeholder="Enter date & time"
              editable={false}
              style={{ color: 'grey' }}
            />
          </View>
          <WhiteTextButtonNew 
            text={'Edit'} 
            onPress={handleEdit} 
            style={{ backgroundColor: editedEntry ? '#5BE432' : '#CCCCCC', width: '100%', marginTop: 10, borderRadius: 3 }}
            disabled={!editedEntry}
          />
          <WhiteTextButtonNew 
            text={'Remove'} 
            onPress={handleRemove} 
            style={{ backgroundColor: '#E43D32', width: '100%', marginTop: 10, borderRadius: 3 }}
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

export default EditEntryModal;
