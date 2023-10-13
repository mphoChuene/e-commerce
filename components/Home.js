import React from 'react';
import top_image from './images1/image1.jpg'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PagerView from 'react-native-pager-view';
import images1 from './images1/image7.jpg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, Image, StyleSheet, Dimensions, Text, ScrollView } from 'react-native';

const data = [
    { id: '1', source: require('./images1/lady2.png') },
    { id: '2', source: require('./images1/lady2.png') },
    { id: '3', source: require('./images1/lady2.png') },
    { id: '4', source: require('./images1/lady2.png') },
];

const HomePage = () => {
    const renderItem = ({ item }) => (
        <View style={{ position: 'relative', flex: 1 }}>
            <View style={{ width: Dimensions.get('window').width / 2 - 10, backgroundColor: 'whitesmoke', borderRadius: 15, margin: 5 }} >
                <Image source={item.source} style={{ width: 150, height: 300 }} />

            </View>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Tezenis</Text>
            <Text>Lorems ips..</Text>
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>R220.00</Text>
            <View style={{
                position: 'absolute', top: 0,
                marginLeft: Dimensions.get('window').width / 2 - 36, marginTop: 10, backgroundColor: 'white', borderRadius: 100
            }}>
                <Ionicons name="ios-heart-outline" size={28} color="black" />
            </View>



        </View>

    );

    return (

        <SafeAreaView style={{flex:1}}>
            <View style={{ flex: 1 }}>

                <View style={{marginTop:55}} >
                <Ionicons name="chevron-back" size={28} color="black" style={{margin:5}} />
                </View>

                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View style={{ flex: 1 }}>
                            {/* <Image source={top_image} style={styles.topImage} /> */}

                            <View style={{ borderRadius: 15, overflow: 'hidden' }}>
                                <PagerView style={styles.viewPager} initialPage={0}>
                                    <View style={styles.page} key="1">
                                        <Image source={top_image} style={styles.topImage} />
                                    </View>
                                    <View style={styles.page} key="2">
                                        <Image source={images1} style={styles.image7} />
                                    </View>
                                    <View style={styles.page} key="3">
                                        <Image source={top_image} style={styles.topImage} />
                                    </View>
                                </PagerView>
                            </View>


                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                numColumns={2}
                                keyExtractor={(item) => item.id}
                                style={styles.flatList}
                            />
                        </View>

                    </View>
                </ScrollView>


                <View style={{ justifyContent: 'space-around', flexDirection: 'row', paddingBottom: 40, paddingTop: 20 }}>
                    <Feather name="home" size={30} color="black" />
                    <Ionicons name="ios-heart-outline" size={30} color="black" />
                    <MaterialCommunityIcons name="shopping-outline" size={30} color="black" />
                    <FontAwesome name="user-o" size={30} color="black" />
                </View>

            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topImage: {
        flex: 1,
        resizeMode: 'cover',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    flatList: {
        flex: 1,
    },
    productImage: {
        height: 300,
        width: Dimensions.get('window').width / 2 - 10,
        borderRadius: 15,
        margin: 5,
        backgroundColor: 'whitesmoke',
        position: 'relative'
    },
    viewPager: {
        flex: 1,
        height: 250,
        borderRadius: 15,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomePage;
