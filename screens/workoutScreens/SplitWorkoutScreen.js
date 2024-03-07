import { View, Text } from "react-native-web"
import { ScrollView } from "react-native-web";
import WorkoutSplitCard from "../../components/WorkoutSplitCard";
import { LegPressIcon, PullIcon, PushIcon, MuscleIcon, TriangleIcon } from "../../assets/SvgIcons";
import WhiteTextButton from "../../components/WhiteTextButton";
import ThinLine from "../../components/ThinLine";
import { NavigationContainer } from '@react-navigation/native';


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
    <View style={{ flex: 1, backgroundColor: '#1C1C1E' }}>
      <View style={{ flexDirection: 'row', flex: 1, paddingVertical: 21, backgroundColor: '#46454C', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            PPLSPLIT
          </Text>
        </View>
        <View style={{justifyContent: 'center',  backgroundColor: '#343438',  paddingVertical: 7, paddingHorizontal: 20, borderRadius: 6}}>
          <Text style={{ color: 'white', fontWeight: 'bold',  }}>
            Split
          </Text>
        </View>
        <View style={{justifyContent: 'center',  backgroundColor: '#343438',  paddingVertical: 7, paddingHorizontal: 20, borderRadius: 6}}>
          <Text style={{ color: 'white', fontWeight: 'bold',  }}>
            Exercises
          </Text>
        </View>
      </View>

      <ScrollView>
        <WorkoutSplitCard workoutName="Workout A" day={1} split="PPL" workouts={workout1Seeder} />
        <WorkoutSplitCard workoutName="Workout B" day={4} split="PPL" workouts={workout2Seeder} />
        <WorkoutSplitCard workoutName="Workout C" day={6} split="PPL" workouts={workout3Seeder} />
        <ThinLine style={{alignSelf: 'center', width: '95%', marginVertical: 10}}/>
        <WhiteTextButton text={'+ add day'} style={{alignSelf: 'center', width: '95%', marginBottom: 10}}/>
      </ScrollView>
    </View>
  )
}

export default SplitWorkoutScreen;