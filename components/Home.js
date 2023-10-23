
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStore from '../screens/HomeStore';
import Cart from '../screens/Cart';
import StoreReaction from '../screens/StoreReaction';
import StoreProfile from '../screens/StoreProfile';
import {
    FontAwesome,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
  import { useRoute } from '@react-navigation/native';
import Orders from '../screens/Orders';
const Tab = createBottomTabNavigator();
const size=30;
const opHome={title:'',headerShown: false,tabBarIcon: ({ color }) => (
    <MaterialIcons name="home" size={size} color="black" />
  )};
  const opOrders={title:'',headerShown: false,tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="order-bool-descending" size={size} color="black" />
  )};
  const opCart={title:'',headerShown: false,tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="shopping-outline" size={size} color="black" />
  )};
  const opProfile={title:'',headerShown: false,tabBarIcon: ({ color }) => (
    <FontAwesome name="user-o" size={size} color="black" />
  )};

const HomePage = () => {

    return (
        <Tab.Navigator> 
            <Tab.Screen name="Homestore" component={HomeStore} options={opHome}/>
            <Tab.Screen name="Orders" component={Orders} options={opOrders}/>
            <Tab.Screen name="Cart" component={Cart} options={opCart}/>
            <Tab.Screen name="StoreProfile" component={StoreProfile} options={opProfile}/>
        </Tab.Navigator>

    );
};



export default HomePage;
