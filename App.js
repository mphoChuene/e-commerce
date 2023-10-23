import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Cart from "./screens/Cart";
import Preview from "./components/Preview";
import LoginScreen from "./components/Login";
import HomePage from "./components/Home";
import ConfirmDetails from "./components/ConfirmDetails";
import RegistrationPage from "./components/Register";
import Forgotpassword from "./components/Forgotpassword";
import { ProfileProvider } from "./Manager/ProfileManager";
import Completed from "./components/Completed";


const Stack = createNativeStackNavigator();
const options={title:'',headerShown: false};
export default function App() {
  return (
    <ProfileProvider>
    <NavigationContainer>
       <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={options}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{title:''}}/>
        <Stack.Screen name="Preview" component={Preview} /> 
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} options={options}/> 
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} options={options}/>
        <Stack.Screen name="Completed" component={Completed} />
      </Stack.Navigator>
    </NavigationContainer>
    </ProfileProvider>
  );
}