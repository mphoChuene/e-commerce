
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import fav from "../assets/payment.png";
import { Card } from "react-native-paper";
import { useContext } from "react";
import { ProfileContext } from "../Manager/ProfileManager";

export default function Completed({ navigation }) {
    const {
        cartItems
      } = useContext(ProfileContext);
  return (
    <View style={styles.container}>

        <Image source={fav} style={styles.icon} />

        <View style={{alignSelf:"center"}}>
        <Text style={{fontSize:25,fontWeight:"700"}}>Thank you for your puchase.</Text>
        <Text>Below is a highlight of the things you purchased.</Text>
        <Text style={{color:'#FFB124',fontWeight:"700"}}>Thanks once again.</Text>
        </View>

        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={cartItems}
        renderItem={({item})=>(
            <View style={{flexDirection:"row"}}>
        <Card style={{ backgroundColor: "#fff", margin: 10,padding:5,height:110 }}>
        <Image source={{ uri: item.img }} style={{width:100,height:100, objectFit:"contain"}} />
        </Card>
        </View>
        )}
        />
        
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "95%",

          alignItems: "center",
          margin: 10,
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 15,
            padding: 15,
            margin: 10,

            borderRadius: 5,
            width: "95%",
            backgroundColor: "#FFB124",
          }}
          onPress={()=>navigation.navigate('HomePage')}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#fff",
              fontWeight: "900",
              fontSize: 15,
            }}
          >
            Back Store
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  icon: {
    marginBottom: 20,
    height: 170,
    width: 170,
    marginTop: 100,
    alignSelf: "center",
  },
});
