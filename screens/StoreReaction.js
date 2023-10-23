import { Image, View ,StyleSheet,Text} from "react-native";
import heart from "../assets/heartbreak.png";

const StoreReaction = () => {
    return ( 
    <View style={styles.container}>
        <Image source={heart} style={styles.icon} />
        <Text>No reactions yet...</Text>
    </View>
     );
}
 
export default StoreReaction;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
        marginBottom: 20,
        height: 80,
        width: 80,
        marginTop: 130,
      },
});