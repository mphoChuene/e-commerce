import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";
import { Card, Chip, Button } from "react-native-paper";
import { Feather } from '@expo/vector-icons';
import React, { useState, useEffect, useContext } from "react";
import { ProfileContext } from "../Manager/ProfileManager";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import uuid from 'react-native-uuid';


const StoreProfile = () => {
    const [address, setAddress] = useState([]);
    const [Name, setName] = useState('');
    const [MemberDate, setMemberDate] = useState('');
    const [display, SetDisplay] = useState('updName');
    const [TempAddress, setTempAddress] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const {
        key
    } = useContext(ProfileContext);
    useEffect(() => {
        var document = doc(db, "E_Users", key)
        onSnapshot(document, (snapshot) => {
            setName(snapshot.data().Name);
            setMemberDate(snapshot.data().memberDate);
            setAddress(snapshot.data().address)
        })
    }, []);

    const updateCurrentUser = () => {

        if (display == 'uptaddress' && TempAddress !== '') {
            let newList = [...address, { id: uuid.v4(), address: TempAddress }]
            let update = { address: newList }
            setisLoading(true);
            setDoc(doc(db, 'E_Users', key.trim()), update, { merge: true }).then(() => {
                setTempAddress('');
                setisLoading(false);
                Alert.alert('Notification', 'Successfully added an address');
            }).catch((err) => {
                setisLoading(false);
                console.log(String(err));
                Alert.alert('Notification', String(err));
            });
        }
        if (display == 'updName' && Name !== '') {
            let update = { Name: Name }
            setisLoading(true);
            setDoc(doc(db, 'E_Users', key.trim()), update, { merge: true }).then(() => {
                setisLoading(false);
                Alert.alert('Notification', 'Successfully updated your name');
            }).catch((err) => {
                console.log(String(err));
                setisLoading(false);
                Alert.alert('Notification', String(err));
            });
        }
    }

    const HandleDelete = (id) => {

        var TempArray = [];
        var idremove = id;
        Alert.alert('Notification', 'Would you like to delete this address',
            [
                {
                    text: 'OK', onPress: () => {
                        TempArray = address.filter((addr) => addr.id !== idremove);
                        let update = { address: TempArray }
                        setisLoading(true);
                        setDoc(doc(db, 'E_Users', key.trim()), update, { merge: true }).then(() => {
                            setisLoading(false);
                            Alert.alert('Notification', 'Successfully removed an address');
                        }).catch((err) => {
                            setisLoading(false);
                            console.log(String(err));
                            Alert.alert('Notification', String(err));
                        });
                    }
                },
                {
                    text: 'No', onPress: () => {
                        //just for dismmissing a dialog
                    }
                }
            ]);
    }

    return (
        <View style={styles.container}>
            <Card style={{ backgroundColor: "#fff", margin: 10 }}>

                <View style={{ flexDirection: "column", padding: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ borderRadius: 15, overflow: "hidden", marginRight: 5 }}>
                            <Image source={require('../assets/man.png')} style={{ borderRadius: 15, objectFit: "cover", width: 50, height: 50 }} />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
                                <TouchableOpacity onPress={() => SetDisplay('updName')}>
                                    <MaterialCommunityIcons name="pencil-box-outline" size={24} color="black" />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 25, fontWeight: "bold" }}>{Name}</Text>
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: "500", color: 'gray' }}>shooper</Text>
                        </View>
                    </View>
                    <Text style={{ marginBottom: 3 }}>Your address(s)</Text>
                    <View style={{ flexDirection: "row", gap: 4 }}>
                        <TouchableOpacity onPress={() => SetDisplay('uptaddress')} style={{ alignSelf: "center" }}>
                            <Feather name="plus-square" size={24} color="black" />
                        </TouchableOpacity>
                        <ScrollView contentContainerStyle={{ gap: 3 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {address.map((item) => (
                                <Chip onPress={() => HandleDelete(item.id)} key={item.id} mode="outlined" icon={()=>(
                                    <MaterialIcons name="wrong-location" size={16} color="#FFB124" />
                                )}>{item.address}</Chip>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: "row", padding: 2, backgroundColor: '#FFB124', borderRadius: 5, marginTop: 10 }}>
                        <Text style={{ color: "white" }}>Membership date: {MemberDate}</Text>
                    </View>

                    {display == 'updName' ? <View>
                        <Text style={styles.title3}>Your Name</Text>
                        <TextInput
                            style={styles.input1}
                            placeholder="Name"
                            value={Name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View> : <View>
                        <Text style={styles.title3}>Your Address</Text>
                        <TextInput
                            style={styles.input1}
                            placeholder="Your Address"
                            value={TempAddress}
                            onChangeText={(text) => setTempAddress(text)}
                        />
                    </View>}

                    <TouchableOpacity onPress={() => updateCurrentUser()}>

                        <Button disabled={isLoading ? true : false} style={styles.customButton}
                            loading={isLoading}
                            mode="contained" >
                            Update
                        </Button>

                    </TouchableOpacity>

                </View>

            </Card>

        </View>
    );
}

export default StoreProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    input1: {
        height: 45,
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    customButton: {
        marginTop: "10%",
        width: "100%",
        backgroundColor: "#FFB124",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 9,
    }
});