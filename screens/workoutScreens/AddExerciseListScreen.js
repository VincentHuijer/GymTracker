import { ScrollView, Text, View } from "react-native-web";
import ListExerciseComponent from "../../components/ListExerciseComponent";
import AddExerciseComponent from "../../components/AddExerciseComponent";
import ThinLine from "../../components/ThinLine";
import AddExerciseCard from "../../components/AddExerciseCard";
import { ConfigurationCustomElementIcon } from "../../assets/SvgIcons";

const AddExerciseListScreen = () => {
  return ( 
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <ScrollView>
        <AddExerciseCard muscleGroupText={'Chest'}/>
        <AddExerciseCard muscleGroupText={'Shoulders'}/>
        <AddExerciseCard muscleGroupText={'triceps'}/>
        <AddExerciseCard muscleGroupText={'Quads'}/>
        <AddExerciseCard muscleGroupText={'Biceps'}/>
      </ScrollView>
    </View>
  )
}

export default AddExerciseListScreen;