import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { useEffect, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, AntDesign,Ionicons } from "@expo/vector-icons";
import { Card, Chip } from "react-native-paper";
import { ProfileContext } from "../Manager/ProfileManager";
import { collection, query, where, deleteDoc } from "firebase/firestore";
import { Order } from "../Order/Order";


const Cart = ({ navigation }) => {

  const [add_ress, set_Address] = useState([]);
  const [cart_items, setCart_items] = useState([]);
  const [maxCost, SetMaxCost] = useState(0.00);
  const {
    key, SetCartitems
  } = useContext(ProfileContext);
  const [address, setAddress] = useState('Address not set');
  const [display, setdisplay] = useState('none');
  const [visa, setvisa] = useState('block');
  const [cash, setcash] = useState('none');
  const tooglepayment = () => {
    if (visa == 'block') {
      setvisa('none');
      setcash('block');
    } else {
      setvisa('block');
      setcash('none');
    }
  }
  useEffect(() => {
    if (cart_items.length === 0) {
      SetMaxCost(0.00);
    } else {
      SetMaxCost((cart_items.reduce(function (acc, obj) { return parseFloat(acc) + parseFloat(obj.itemcost) }, 0)).toFixed(2))
    }

  }, [cart_items])
  const Gotocompleted = () => {
    
    if (cart_items.length > 0 && address!=='Address not set' && address!=='') {
      SetCartitems(cart_items);
      Order(cart_items,key,address,visa=='block' ? 'Credit card':'Cash on delivery',maxCost,'3 to 5 days');
      navigation.navigate('Completed');
    } else {
      Alert.alert('Notification', 'Please add items to your cart and indicate your delivery address also.');
    }
  }
  const q = query(collection(db, "Cart"), where("ukey", "==", key));
  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const x = [];
      querySnapshot.forEach((doc) => {
        x.push({ id: doc.id, ...doc.data() });
      });
      setCart_items(x);
    });
    return () => unsubscribe();
  }, []);
  const OndeleteItem = (item) => {
    deleteDoc(doc(db, "Cart", item.id)).then(() => {
      setCart_items((cart_items) => cart_items.filter((cart) => cart.id !== item.id));
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    var document = doc(db, "E_Users", key)
    onSnapshot(document, (snapshot) => {
      set_Address(snapshot.data().address)
    })
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 4 }}>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={cart_items.length > 0 ? cart_items : null}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={{ backgroundColor: "#fff", margin: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{ uri: item.img }}
                    style={{
                      margin: 10,
                      width: 80,
                      height: 80,
                      borderRadius: 8,
                      backgroundColor: "whitesmoke",
                    }}
                  />
                  <View style={{ justifyContent: "center", marginLeft: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.brand}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 6,
                        marginBottom: 6,
                      }}
                    >
                      <Text
                        style={{
                          color: "gray",
                          fontWeight: "500",
                          fontSize: 13,
                        }}
                      >
                        Price :
                      </Text>
                      <Text> R{item.itemcost}</Text>
                    </View>
                    <Text style={{ color: "#FFB124" }}>{item.itemtype}</Text>
                    <Text style={{ color: "#FFB124",fontWeight:"700" }}>{item.size}</Text>
                  </View>
                </View>

                <TouchableOpacity onPress={() => OndeleteItem(item)}>
                  <Feather
                    name="trash"
                    size={24}
                    color="black"
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </Card>
          )}
        />
      </View>

      <View
        style={{
          justifyContent: "flex-end",
          padding: 10,
          backgroundColor: "white",
          borderBlockStartColor: "gray",
          borderWidth: 0.2,
          elevation: 10,
          shadowRadius: "gray",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Combined Price</Text>
            <Text>{cart_items.length} pairs</Text>
          </View>

          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
            R{maxCost}
          </Text>
        </View>

        <View
          style={{ height: 0.5, backgroundColor: "gray", margin: 5 }}
        ></View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: '100%' }}>
            <View style={{ flexDirection: "row", gap: 7, justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", gap: 7 }}>
                <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>
                  Shipping Address
                </Text>
                <Feather name="truck" size={20} color="black" />
              </View>
              <TouchableOpacity onPress={() => setdisplay(display == 'block' ? 'none' : 'block')}
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#FFB124",
                  borderRadius: 25,
                  padding: 5,
                  borderColor: "gray",
                  borderWidth: 0.5,
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Change</Text>
              </TouchableOpacity>
            </View>
            <Text>{address}</Text>
            <Text style={{ color: "gray" }}>3 to 5 days to deliver</Text>
            <ScrollView contentContainerStyle={{ gap: 3, display: display }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {add_ress.map((item) => (
                <Chip onPress={() => setAddress(item.address)} key={item.id} mode="outlined" icon={() => (
                  <Ionicons name="location-outline" size={16} color="#FFB124" />
              )}>{item.address}</Chip>
              ))}
            </ScrollView>

          </View>

        </View>

        <View
          style={{ height: 0.5, backgroundColor: "gray", margin: 5 }}
        ></View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View style={{ flexDirection: "row", gap: 7 }}>
              <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>
                Payment method
              </Text>
              <AntDesign name="creditcard" size={20} color="black" />
            </View>
            <View style={{ flexDirection: "row", display: visa }}>
              <Image
                source={require("../assets/visa.png")}
                style={{ width: 40, height: 40 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text>__</Text>
                <Text>__</Text>
                <Text>__</Text>
                <Text>3245</Text>
              </View>
            </View>

            <View style={{ display: cash }}>
              <Text>Cash on delivery</Text>
            </View>

          </View>

          <TouchableOpacity onPress={() => tooglepayment()}
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              backgroundColor: "#FFB124",
              borderRadius: 25,
              padding: 5,
              borderColor: "gray",
              borderWidth: 0.5,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Change</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => Gotocompleted()}
          style={{
            backgroundColor: "#FFB124",
            alignItems: "center",
            padding: 10,
            borderRadius: 15,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 20 }}>
            Confirm your purchase
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
