import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { ToggleButton,Button,Snackbar } from "react-native-paper";
import s from "../assets/s.png";
import m from "../assets/m.png";
import l from "../assets/l.png";
import xl from "../assets/xl.png";
import { Ionicons } from '@expo/vector-icons';
import { ProfileContext } from "../Manager/ProfileManager";
import { AddtoCart } from "../Cart/AddtoCart";

const Preview = () => {
  const {
    visible, setVisible,
    ItemOnModal,setItemOnModal,
    key, SetKey
} = useContext(ProfileContext);

const [itemcolor, setcolor] = useState("pnik");
  const [status, setStatus] = useState("checked");
  const [value, setValue] = useState("S");
  const [isLoading, setisLoading] = useState(false);
  const [isvisible, set_Visible] = useState(false);
  const onDismissSnackBar = () => set_Visible(false);

  const onButtonToggle = (value) => {
    setStatus(status === "checked" ? "unchecked" : "checked");
  };
  const HandleaAddtoCart=()=>{
    try {
      AddtoCart(data);
      set_Visible(true);
    } catch (error) {
      console.log(String(error));
    }
  }
  

  var data={
    ...ItemOnModal,
    size:value,
    color:itemcolor,
    ukey:key
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: ItemOnModal.img }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundColor: "whitesmoke",
            position:"relative"
          }}
        />
      <Ionicons
      onPress={()=>setVisible(false)}
       name="ios-close-circle-outline" size={34} color="black" style={{position:"absolute",top:0,zIndex:5,margin:20,backgroundColor:'white',borderRadius:25}} />

      </View>
      <View style={{ flex: 1, margin: 10 }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>{ItemOnModal.brand}</Text>
          <Text style={{ fontSize: 18 }}>R{ItemOnModal.itemcost}</Text>
        </View>
        <Text>{ItemOnModal.itemtype}</Text>

        <Text style={{ fontSize: 25, marginTop: 10, fontWeight: "600" }}>
          Colors
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity onPress={()=>setcolor('pink')}>
          <Octicons name="dot-fill" size={55} color="#ffa797" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setcolor('blue')}>
          <Octicons name="dot-fill" size={55} color="#14bfed" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>setcolor('black')}>
          <Octicons name="dot-fill" size={55} color="#060606" />
          </TouchableOpacity>
          <Text style={{alignSelf:"center"}}>{itemcolor}</Text>
        </View>
        <Text style={{ fontSize: 25, marginTop: 10, fontWeight: "600" }}>
          Size
        </Text>
        <ToggleButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <View style={{flexDirection:"row"}}>
          <ToggleButton icon={s} value="S" style={{borderRadius:25}} >
            </ToggleButton>
          <ToggleButton icon={m} value="M" style={{borderRadius:25}}/>
          <ToggleButton icon={l} value="L" style={{borderRadius:25}}/>
          <ToggleButton icon={xl} value="XL" style={{borderRadius:25}}/>
          </View>
        </ToggleButton.Group>

        <TouchableOpacity onPress={()=>HandleaAddtoCart()}>
          <Button disabled={isLoading ? true : false} style={styles.customButton}
            loading={isLoading}
            mode="contained" >
            Add to bag
          </Button>
        </TouchableOpacity>
        <Snackbar
        duration={1000}
        visible={isvisible}
        onDismiss={onDismissSnackBar}
        >
        Added to Cart.
      </Snackbar>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#FFB124",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  }
});

export default Preview;
