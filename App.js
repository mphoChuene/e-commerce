import { StatusBar } from "expo-status-bar";
import LoginScreen from "./components/Login";
import { StyleSheet, Text, View } from "react-native";
import Preview from "./components/Preview";

export default function App() {
  return (
    <View>
      <LoginScreen />
      {/* <Preview/> */}
      <StatusBar style="auto" />
    </View>
  );
}


