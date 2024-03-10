import { Text, View } from "react-native-web"
import AddExerciseComponent from "./AddExerciseComponent";
import ThinLine from "./ThinLine";

const AddExerciseCard = ({muscleGroupText}) => {
  return (
    <View style={{}}>
      <View style={{width: '95%', alignSelf: 'center'}}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, backgroundColor: '#343438', paddingLeft: 20}}>{muscleGroupText}</Text>
        <Text style={{ color: 'white',  backgroundColor: '#343438', paddingLeft: 20 }}>Recent Exercises</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center'}}>
        <View style={{ flex: 1, backgroundColor: '#343438', width: '95%', alignItems: 'center'}}>
          <View style={{ marginBottom: 10}}>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <ThinLine/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>
            <AddExerciseComponent/>

          </View>
        </View>
      </View>
    </View>
  )
}
export default AddExerciseCard;