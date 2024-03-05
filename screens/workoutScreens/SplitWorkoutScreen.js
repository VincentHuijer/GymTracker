import { View } from "react-native-web"
import { ScrollView } from "react-native-web";
import WorkoutSplitCard from "../../components/WorkoutSplitCard";
import { LegPressIcon, PullIcon, PushIcon, MuscleIcon } from "../../assets/SvgIcons";

const SplitWorkoutScreen = () => {
  const workout1Seeder = [
    { icon: <PullIcon />, name: 'Dumbell Press' },
    { icon: <PushIcon />, name: 'Push-up' },
  ];

  const workout2Seeder = [
    { icon: <LegPressIcon />, name: 'leg press' },
    { icon: <LegPressIcon />, name: 'Squat' },
    { icon: <PullIcon />, name: 'pullup' },
    { icon: <MuscleIcon />, name: 'Bicep Curl' },
  ];

  const workout3Seeder = [
    { icon: <LegPressIcon />, name: 'leg press' },
    { icon: <PushIcon />, name: 'Push-up' },
    { icon: <PullIcon />, name: 'pullup' },
    { icon: <MuscleIcon />, name: 'Bicep Curl' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1E' }}>{/* In React Native, the flex property is used to define how a component should grow in relation to its siblings within a flex container. Setting flex: 1 on a component makes it take up all the available space along the main axis of its container. */}
      <ScrollView>
        <WorkoutSplitCard workoutName="Workout A" day={1} split="push" workouts={workout1Seeder} />
        <WorkoutSplitCard workoutName="Workout A" day={4} split="push" workouts={workout2Seeder} />
        <WorkoutSplitCard workoutName="Workout A" day={6} split="push" workouts={workout3Seeder} />

        {/* <WorkoutSplitCard workoutName='ArmsDay' day={1} split='arnold'/>      
        <WorkoutSplitCard workoutName='ChestDay' day={2} split='arnold'/>      
        <WorkoutSplitCard workoutName='Legsday' day={4} split='arnold'/>       */}
      </ScrollView>
  </View>

  )
}

export default SplitWorkoutScreen;