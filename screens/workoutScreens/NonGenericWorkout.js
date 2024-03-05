import { View, Text } from "react-native-web";
import EditExerciseComponent from "../../components/EditExerciseComponent";
import { DietGraneIcon, MuscleIcon, PullIcon, PushIcon, WorkoutsTabIconDumbell } from "../../assets/SvgIcons";

const NonGenericWorkout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#343438' }}>
      <EditExerciseComponent icon={<PullIcon/>}/>
      <EditExerciseComponent icon={<PushIcon/>}/>
      <EditExerciseComponent icon={<MuscleIcon/>}/>
      <EditExerciseComponent icon={<WorkoutsTabIconDumbell/>}/>
      <EditExerciseComponent icon={<DietGraneIcon/>}/>
    </View>
  );
}

export default NonGenericWorkout;