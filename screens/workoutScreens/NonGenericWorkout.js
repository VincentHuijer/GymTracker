import { View, Text } from "react-native-web";
import EditExerciseComponent from "../../components/EditExerciseComponent";
import { DietGraneIcon, MuscleIcon, PullIcon, PushIcon, WorkoutsTabIconDumbell } from "../../assets/SvgIcons";
import WhiteTextButton from "../../components/WhiteTextButton";

const NonGenericWorkout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#343438', alignItems: 'center'}}>
      <EditExerciseComponent icon={<PullIcon/>}/>
      <EditExerciseComponent icon={<PushIcon/>}/>
      <EditExerciseComponent icon={<MuscleIcon/>}/>
      <EditExerciseComponent icon={<WorkoutsTabIconDumbell/>}/>
      <EditExerciseComponent icon={<DietGraneIcon/>}/>

      <View style={{width: '87%'}}>

      <WhiteTextButton text={'+ add exercise'} refLink='AddExerciseListScreen'/>
      </View>
    </View>
  );
}

export default NonGenericWorkout;