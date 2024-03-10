import { Text, View } from "react-native-web";
import ListExerciseComponent from "../../components/ListExerciseComponent";
import AddExerciseComponent from "../../components/AddExerciseComponent";

const AddExerciseListScreen = () => {
  return ( 
    <View style={{ flex: 1, backgroundColor: '#1C1C1E',}}>
      <View style={{ width: '95%', alignSelf: 'center'}}>
        <Text style={{ color: 'white', fontWeight: 'bold',  }}>
          Chest
        </Text>
        <Text style={{ color: 'white',  }}>
          Recent Exercises
        </Text>
        <View style={{ }}>
          <AddExerciseComponent/>
          <AddExerciseComponent/>
          <AddExerciseComponent/>
          <AddExerciseComponent/>
        </View>
      </View>
    </View>
  )
}

export default AddExerciseListScreen;