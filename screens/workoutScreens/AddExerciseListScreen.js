import { Text, View } from "react-native-web";
import ListExerciseComponent from "../../components/ListExerciseComponent";

const AddExerciseListScreen = () => {
  return ( 
    <View style={{ flex: 1, backgroundColor: '#1C1C1E',}}>
      <View style={{ width: '95%', alignItems: 'center'}}>
        <Text style={{ color: 'white', fontWeight: 'bold',  }}>
          Chest
        </Text>
        <Text style={{ color: 'white',  }}>
          Recent Exercises
        </Text>
        <View style={{ alignItems: 'center' }}>
          <ListExerciseComponent/>
          <ListExerciseComponent/>
          <ListExerciseComponent/>
          <ListExerciseComponent/>
        </View>
      </View>
    </View>
  )
}

export default AddExerciseListScreen;