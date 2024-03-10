import { View, Text } from "react-native-web";
import EditExerciseComponent from "../../components/EditExerciseComponent";
import { DietGraneIcon, MuscleIcon, PullIcon, PushIcon, WorkoutsTabIconDumbell } from "../../assets/SvgIcons";
import WhiteTextButton from "../../components/WhiteTextButton";

const NonGenericWorkout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1E', alignItems: 'center'}}>
      <View style={{ flex: 1, backgroundColor: '#46454C', width: '95%', alignItems: 'center'}}>
        <EditExerciseComponent icon={<PullIcon/>}/>
        <EditExerciseComponent icon={<PushIcon/>}/>
        <EditExerciseComponent icon={<MuscleIcon/>}/>
        <EditExerciseComponent icon={<WorkoutsTabIconDumbell/>}/>
        <EditExerciseComponent icon={<DietGraneIcon/>}/>
        <View style={{width: '91%'}}>
          <WhiteTextButton text={'+ add exercise'} refLink='AddExerciseListScreen'/>
        </View>
      </View>
    </View>
  );
}

export default NonGenericWorkout;