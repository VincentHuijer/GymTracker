import { Text, View } from "react-native-web";
import ListExerciseComponent from "../../components/ListExerciseComponent";

const AddExerciseListScreen = () => {
  return ( 
    <View>
      <Text>Chest</Text>
      <Text>Recent Exercises</Text>
      <ListExerciseComponent/>
      <ListExerciseComponent/>
      <ListExerciseComponent/>
      <ListExerciseComponent/>
    </View>
  )
}

export default AddExerciseListScreen;