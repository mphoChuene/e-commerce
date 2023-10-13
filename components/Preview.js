import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Preview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}></View>
      <View style={styles.ProdDetails}>
        <View style={styles.prodtitle}>
          <View style={styles.prodName}>
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>Skirt</Text>
            <Text style={{ color: "grey" }}>black comfortable skirt</Text>
          </View>
          <View style={styles.price}>
            <Text
              style={{ fontSize: 22, color: "dodgerblue", fontWeight: "bold", marginTop:8 }}
            >
              R70.85
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={{fontSize:25, fontWeight:'bold',marginVertical:10}}>COLOR</Text>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
          </View>
        </View>
        <View>
            <Text style={{fontSize:20, fontWeight:'bold',marginVertical:20,marginLeft:10}}>SIZE</Text>
            <View style={styles.sizeContainer}>
                <TouchableOpacity style={styles.sizeSelectors}>
                    <Text style={{fontSize:25}}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeSelectors}>
                    <Text style={{fontSize:25,color:'#fff'}}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeSelectors}>
                    <Text style={{fontSize:25}}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sizeSelectors}>
                    <Text style={{fontSize:25}}>XL</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    <View style={styles.bottomSection}>
    <TouchableOpacity style={styles.addToCartBtn}>
            <Text style={{fontSize:20,color:'#fff'}}>Add to bag</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    backgroundColor: "grey",
    height: 500,
    width: "100%",
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20
  },
  ProdDetails: {},
  prodtitle: {
    flexDirection: "row",
    width: "100%",
  },
  prodName: {
    // justifyContent:"space-around"
  },
  price: {
    // justifyContent:"flex-end",
    marginLeft: 180,
  },
  circleContainer:{
    flexDirection:'row',

  },
  circle: {
    backgroundColor: "pink",
    height: 30,
    width: 30,
    borderRadius: 50,
    marginHorizontal:3,
  }, 
  sizeSelectors:{
    marginHorizontal:5,
    marginVertical:8,
    width:45,
    height:45,
    alignItems: "center",
    justifyContent:'center',
    borderRadius:50,
    backgroundColor:'grey'
  },
  sizeContainer:{
 flexDirection:'row',
 marginLeft:10
  },
  addToCartBtn:{
 backgroundColor:'dodgerblue',
 width:220,
 height: 38,
 borderRadius:15,
 alignItems:"center",
 justifyContent:'center',
 marginVertical:20
  },
  bottomSection:{

  },
});

export default Preview;
