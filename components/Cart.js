import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-paper";

const Cart = () => {
  const Shoes = [
    {
      id: 0,
      shoename: "Air Max 90-XZ pro",
      price: "780.99",
      img: require("../assets/sneeker.png"),
    },
    {
      id: 1,
      shoename: "Air Max vintage",
      price: "680.99",
      img: require("../assets/sneeker.png"),
    },
    {
      id: 2,
      shoename: "Air Max max-star",
      price: "780.90",
      img: require("../assets/sneeker.png"),
    },
    {
      id: 3,
      shoename: "Air Max air-one",
      price: "570.99",
      img: require("../assets/sneeker.png"),
    },
    {
      id: 4,
      shoename: "Air Max air-two",
      price: "999.99",
      img: require("../assets/sneeker.png"),
    },
    {
      id: 5,
      shoename: "Air Max air-three",
      price: "980.99",
      img: require("../assets/sneeker.png"),
    },
    {
      id: 6,
      shoename: "Air Max bold pro",
      price: "981.99",
      img: require("../assets/sneeker.png"),
    },
    {
      id: 7,
      shoename: "Air Max 20-XZ pro",
      price: "982.91",
      img: require("../assets/sneeker.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 4 }}>
        <View style={{ flexDirection: "row", gap: 5, margin: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: 280,
              borderColor: "gray",
              borderWidth: 0.1,
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="chevron-back"
              size={22}
              color="black"
              style={{ padding: 7 }}
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: "400", fontSize: 25 }}>My Cart</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Shoes}
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
                    source={require("../assets/sneeker.png")}
                    style={{
                      margin: 10,
                      width: 80,
                      height: 80,
                      borderRadius: 8,
                      backgroundColor: "whitesmoke",
                    }}
                  />
                  <View style={{ justifyContent: "center", marginLeft: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.shoename}</Text>
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
                      <Text> R{item.price}</Text>
                    </View>
                    <Text style={{ color: "blue" }}>lorems ipsulm...</Text>
                  </View>
                </View>

                <TouchableOpacity>
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
            <Text>3 pairs</Text>
          </View>

          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
            R6080.99
          </Text>
        </View>

        <View
          style={{ height: 0.5, backgroundColor: "gray", margin: 5 }}
        ></View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View style={{ flexDirection: "row", gap: 7 }}>
              <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>
                Shipping Address
              </Text>
              <Feather name="truck" size={20} color="black" />
            </View>
            <Text>15 Rose view, Midrand</Text>
            <Text style={{ color: "gray" }}>4-5 day(s) to deliver</Text>
          </View>

          <TouchableOpacity
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              backgroundColor: "whitesmoke",
              borderRadius: 25,
              padding: 5,
              borderColor: "gray",
              borderWidth: 0.5,
            }}
          >
            <Text style={{ color: "blue", fontWeight: "bold" }}>Change</Text>
          </TouchableOpacity>
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
            <View style={{ flexDirection: "row" }}>
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
          </View>

          <TouchableOpacity
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              backgroundColor: "whitesmoke",
              borderRadius: 25,
              padding: 5,
              borderColor: "gray",
              borderWidth: 0.5,
            }}
          >
            <Text style={{ color: "blue", fontWeight: "bold" }}>Change</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "blue",
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

