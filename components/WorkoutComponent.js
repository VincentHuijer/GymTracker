import { TouchableOpacity } from "react-native-web";
import { View, Text } from "react-native-web";
import { LegPressIcon } from "../assets/SvgIcons";
import ItemBox from "./ItemBox";
import { useNavigation } from "@react-navigation/native";

const WorkoutComponent = ({workoutName = 'workoutName', workoutLink = 'NonGenericWorkout', workoutIcon = <LegPressIcon/>}) => {
  const navigation = useNavigation();

 return (
  <View style={{marginTop: 12}}>
    <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'white', paddingVertical: 6, marginHorizontal: 100, borderRadius: 10, width: '80%', alignSelf: 'center', }} onPress={() => navigation.navigate(workoutLink)}>
      <View style={{ flexDirection: 'row', marginLeft: 20,}}>
      <ItemBox>
        {workoutIcon}
      </ItemBox>
        <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginLeft: 10}}>{workoutName}</Text>
      </View>
    </TouchableOpacity>
  </View>
 );
};

export default WorkoutComponent;