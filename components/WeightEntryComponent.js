import { View } from "react-native";

const WeightEntryComponent = ({date, notes, kg}) => (
  <View>
    <View style={{backgroundColor: '#46454C', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingVertical: 10}}>
      <Text style={{fontSize: 20, color: 'white'}}> {date} </Text>
      <FileTextIcon/>
      <Text style={{fontSize: 20, color: '#E43D32', marginLeft: 10}}>-4,3kg</Text>
      <Text style={{fontSize: 20, color: 'white'}}> {kg} </Text>
      <PencilIcon/>
    </View>
    <ThinLine/>
  </View>
)

export default WeightEntryComponent;