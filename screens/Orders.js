import { Image, View, StyleSheet, Text, ScrollView } from "react-native";
import received from "../assets/online.png";
import { Card } from "react-native-paper";
import React, { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../Manager/ProfileManager";
import { db } from "../FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Orders = () => {
    const [Order, setOrder] = useState([]);
    const {
        key
    } = useContext(ProfileContext);
    const q = query(collection(db, "Orders"), where("CustomerID", "==", key));
    useEffect(() => {
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const x = [];
            querySnapshot.forEach((doc) => {
                x.push({ id: doc.id, ...doc.data() });
            });
            setOrder(x);
        });
        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            {
                Order.length !== 0 ?
                    <ScrollView>
                        {Order?.map((item,index) => (
                            <Card key={item.id} style={{ backgroundColor: "#fff", margin: 5, padding: 5 }}>
                                <View style={{flexDirection:"row"}}>
                                <Text style={{backgroundColor:'#FFB124',borderRadius:25,color:'white',padding:5}}>{index+1}</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    
                                    <Image source={received} style={{ width: 60, height: 60, objectFit: "contain" }} />
                                    <View style={{ margin: 3 }}>
                                        <Text>Delivery Time Frame : {item.deliveryTimeFrame}</Text>
                                        <Text>Total Cost : R{item.maxCost}</Text>
                                        <Text>Payment Method : {item.paymentMethod}</Text>
                                        <Text>Shiping Address : {item.shipingAddress}</Text>
                                        <Text>Order Date : {item.dateOrdered}</Text>
                                    </View>

                                </View>
                                {
                                    item.singleOrder?.map((i) => (
                                        <Card key={i.id_item} style={{ borderRadius: 5, backgroundColor: "#fff", margin: 4, padding: 15 }}>
                                            <Text style={{ fontWeight: "700" }}>Item(s)</Text>
                                            <Text>Brand : {i.brand}</Text>
                                            <Text>Color : {i.color}</Text>
                                            <Text>Size : {i.size}</Text>
                                            <Text>Type : {i.itemtype}</Text>
                                            <Text>item cost : R{i.itemcost}</Text>
                                            <View style={{ height: 0.5, width: '100%', backgroundColor: 'gray', marginTop: 10, marginBottom: 5 }}></View>
                                        </Card>
                                    ))
                                }
                            </Card>
                        ))}
                    </ScrollView>
                    :
                    <View>
                        <Image source={received} style={styles.icon} />
                        <Text style={{ alignSelf: "center" }}>No Orders received yet...</Text>
                    </View>
            }

        </View>
    );
}

export default Orders;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
    },
    icon: {
        marginBottom: 20,
        height: 80,
        width: 80,
        marginTop: 130,
        alignSelf: "center"
    },
});