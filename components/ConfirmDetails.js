import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ConfirmDetails() {
  return (
    <View style={styles.container}>

      <View
        style={{
          borderWidth: 2,
          borderColor: "#FFB124",
          backgroundColor: "rgba(128, 128, 128, 0.5)",
          borderRadius: 30,
          justifyContent: "space-between",
          padding: 10,
          width: "95%",
          flexDirection: "column",
          marginLeft: 10,
          marginBottom: 10,
          marginTop:10
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="home-outline" size={30} />
              <Text style={{ alignSelf: "center", fontWeight: "700" }}>
                Home
              </Text>
            </View>
          </View>

          <Ionicons name="eyedrop-outline" size={30} />
        </View>

        <Text style={{}}>Summary</Text>
        <Text style={{ marginBottom: 5, fontWeight: "500" }}>
          This is a Summaryof home
        </Text>

        <View style={{ height: 0.2, backgroundColor: "black" }}></View>

        <Text>This is description of this</Text>
        <Text>This is the required description of the item</Text>
      </View>

      <View
        style={{
          borderWidth: 2,
          borderColor: "#FFB124",
          backgroundColor: "rgba(128, 128, 128, 0.5)",
          borderRadius: 30,
          justifyContent: "space-between",
          padding: 10,
          width: "95%",
          flexDirection: "column",
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="business-sharp" size={30} />
              <Text style={{ alignSelf: "center", fontWeight: "700" }}>
                Office
              </Text>
            </View>
          </View>

          <Ionicons name="eyedrop-outline" size={30} />
        </View>

        <Text style={{}}>Summary</Text>
        <Text style={{ marginBottom: 5, fontWeight: "500" }}>
          This is a Summaryof Office
        </Text>

        <View style={{ height: 0.2, backgroundColor: "black" }}></View>

        <Text>This is description of this</Text>
        <Text>This is the required description of the item</Text>
      </View>

      <View
        style={{
          alignSelf: "center",

          padding: 15,
          margin: 10,
          borderRadius: 5,
          width: "95%",
          borderWidth: 1,
          borderStyle: "dashed",
          borderColor: "#FFB124",
        }}
      >
        <Text style={{ alignSelf: "center", fontWeight: "900", fontSize: 15 }}>
          Add Address Details
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "95%",

          alignItems: "center",
          margin: 10,
        }}
      >
        <Pressable
          style={{
            borderRadius: 15,
            padding: 15,
            margin: 10,

            borderRadius: 5,
            width: "95%",
            backgroundColor: "#FFB124",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#fff",
              fontWeight: "900",
              fontSize: 15,
            }}
          >
            Comfirm Address
          </Text>
        </Pressable>
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
});
