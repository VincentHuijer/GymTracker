import { View } from "react-native-web";

const ItemBox = ({ children }) => {
  return(
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 4,
      }}
    >
      <View style={{flex: 1}}>
        {children}
      </View>
    </View>
  );
}

export default ItemBox 