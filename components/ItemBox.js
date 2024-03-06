import { View } from "react-native-web";

const ItemBox = ({ children = '🤯', width = 50, height = 50 }) => {
  return(
    <View
      style={{
        width: width,
        height: height,
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