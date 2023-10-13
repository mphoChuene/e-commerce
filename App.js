import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Cart from "./components/Cart";
import Preview from "./components/Preview";
import LoginScreen from "./components/Login";
import HomePage from "./components/Home";
import ConfirmDetails from "./components/ConfirmDetails";
import RegistrationPage from "./components/Register";

// const Stack = createNativeStackNavigator(); // Move it outside the App function

export default function App() {
  return (

    // <LoginScreen />
    // <HomePage/>
    <Cart/>
  );
}
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     {/* <Stack.Screen name="Home" component={HomePage} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>