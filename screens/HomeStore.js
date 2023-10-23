import React, { useEffect, useState, useContext, useRef } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { db } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Modal, Portal, PaperProvider, Snackbar } from "react-native-paper";
import Preview from "../components/Preview";
import { ProfileContext } from "../Manager/ProfileManager";
import { Card } from "react-native-paper";
import { AddtoCart } from "../Cart/AddtoCart";

const HomeStore = () => {
  const { key } = useContext(ProfileContext);
  const [isvisible, set_Visible] = useState(false);
  const onDismissSnackBar = () => set_Visible(false);
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const items = [
    {
      id: 1, img: require('../assets/dress1.jpg'), msg: `👗Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a 👗`},
    {
      id: 2, img: require('../assets/dress2.jpg'), msg: `🧺Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a`},
    {
      id: 3, img: require('../assets/dress3.jpg'), msg: `❤️Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a`},
    {
      id: 4, img: require('../assets/dress4.jpg'), msg: `Lorem Ipsum has been the 👚industry's standard dummy text
    ever since the 1500s, when an unknown printer took a👚`}
  ]; // Replace with your content data.

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Automatically scroll to the next page every 2 seconds.
    const scrollInterval = setInterval(() => {
      const nextPage = (currentPage + 1) % items.length;
      pagerRef.current?.setPage(nextPage);
    }, 3000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [currentPage, items]);

  ///

  const { visible, setVisible, ItemOnModal, setItemOnModal } =
    useContext(ProfileContext);

  const showModal = (item) => {
    setItemOnModal(item);
    setVisible(true);
  };
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    height: "100%",
    marginBottom: 20,
  };

  const [StoreItems, SetStoreItems] = useState([]);
  const colRef = collection(db, "Store");

  useEffect(() => {
    getDocs(collection(db, "Store")).then((querySnapshot) => {
      const Store = [];
      querySnapshot.forEach((doc) => {
        Store.push({
          id_item: doc.id,
          ...doc.data(),
        });
      });
      SetStoreItems(Store);
    })

  }, []);

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, margin: 5, flexDirection: "row" }}>
      <Card style={{ margin: 4, flex: 1 }}>
        <View style={{ position: "relative", flex: 1 }}>
          <TouchableOpacity onPress={() => showModal(item)}>
            <Image
              source={{ uri: item.img }}
              style={{ height: 300, width: "100%", borderRadius: 15 }}
            />
          </TouchableOpacity>
          <View style={{ margin: 10 }}>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
              {item.brand}
            </Text>
            <Text>{item.itemtype}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "#FFB124", fontWeight: "bold" }}>
                R{item.itemcost}
              </Text>
              <TouchableOpacity onPress={() => {
                AddtoCart({
                  ...item,
                  size: "S",
                  color: "black",
                  ukey: key
                });
                set_Visible(true);
              }
              }>
                <MaterialCommunityIcons name="shopping-outline" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              marginLeft: 10,
              marginTop: 10,
              backgroundColor: "white",
              borderRadius: 100,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="ios-heart-outline" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      </Card>

    </View>
  );

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Preview />
        </Modal>
      </Portal>
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              overflow: "hidden",
            }}
          >
            <PagerView
              style={styles.viewPager}
              initialPage={0}
              ref={pagerRef}
              onPageSelected={({ nativeEvent }) => {
                handlePageChange(nativeEvent.position);
              }}
            >
              {items.map((item, index) => (
                <View key={index}>
                  {item.id == "1" && (
                    <View style={{ flex: 1 }}>
                      <Image source={item.img} style={styles.slideImgages} />
                      <Text
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          top: 50,
                          backgroundColor: 'rgba(255,255,255, 0.7)',
                          padding: 10,
                          margin: 15,
                          fontWeight: "600"
                        }}
                      >
                        {item.msg}
                      </Text>
                    </View>
                  )}
                  {item.id == "2" && (
                    <View style={{ flex: 1 }}>
                      <Image source={item.img} style={styles.slideImgages} />
                      <Text
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          top: 50,
                          backgroundColor: 'rgba(255,255,255, 0.7)',
                          padding: 10,
                          margin: 15,
                          fontWeight: "600"
                        }}
                      >
                        {item.msg}
                      </Text>
                    </View>
                  )}
                  {item.id == "3" && (
                    <View style={{ flex: 1 }}>
                      <Image source={item.img} style={styles.slideImgages} />
                      <Text
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          top: 50,
                          backgroundColor: 'rgba(255,255,255, 0.7)',
                          padding: 10,
                          margin: 15,
                          fontWeight: "600"
                        }}
                      >
                        {item.msg}
                      </Text>
                    </View>
                  )}
                  {item.id == "4" && (
                    <View style={{ flex: 1 }}>
                      <Image source={item.img} style={styles.slideImgages} />
                      <Text
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          top: 50,
                          backgroundColor: 'rgba(255,255,255, 0.7)',
                          padding: 10,
                          margin: 15,
                          fontWeight: "600"
                        }}
                      >
                        {item.msg}
                      </Text>
                    </View>
                  )}
                </View>
              ))}
            </PagerView>
          </View>
          {StoreItems == [] ? <Text style={{ textAlign: "center", marginTop: 20 }}>Awaiting store content, please wait...</Text> :
            <FlatList
              data={StoreItems}
              scrollEnabled={false}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor={(item) => item.id_item}
              style={styles.flatList}

            />
          }

        </ScrollView>
        <Snackbar
          duration={1000}
          visible={isvisible}
          onDismiss={onDismissSnackBar}
        >
          Added to Cart.
        </Snackbar>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideImgages: {
    flex: 1,
    objectFit: "cover",
    width: "100%",
    position: "relative",
  },
  topImage: {
    flex: 1,
    resizeMode: "contain",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "relative",
  },
  flatList: {
    flex: 1,
    margin: 5,
  },
  productImage: {
    height: 300,
    width: Dimensions.get("window").width / 2 - 10,
    borderRadius: 15,
    margin: 5,
    backgroundColor: "whitesmoke",
    position: "relative",
  },
  viewPager: {
    flex: 1,
    height: 250,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeStore;
