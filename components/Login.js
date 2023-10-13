import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import fav from "../assets/favicon.png";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   // Add your login logic here using 'username' and 'password' state
  //   // If login is successful, you can navigate to the homepage
  //   navigation.navigate("home");
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={fav} style={styles.icon} />
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Instagram</Text>
      </View>
      <TextInput
        placeholder="Username"
        style={styles.textInput}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View>
        <Text style={styles.forgT}>forgot password?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          {/* Add onPress prop to call handleLogin function */}
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signT}>
        <Text>Don't have an account? </Text>
        <Text style={{ color: "#FFB124", paddingLeft: 5 }}>Sign up</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Use flexGrow to ensure the content fits within the screen
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: 350,
    height: 40,
    borderRadius: 15,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  forgT: {
    marginLeft: 240,
  },
  icon: {
    marginBottom: 20,
    height: 80,
    width: 80,
    marginTop: 130,
  },
  imgContainer: {
    // backgroundColor:'red',
    width: "100%",
    alignItems: "center",
    marginBottom: 120,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 200, // Adjusted the marginTop for the button
  },
  button: {
    backgroundColor: "#FFB124",
    padding: 10,
    borderRadius: 10,
    width: 400,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  signT: {
    marginTop: 12,
    flexDirection: "row",
  },
});

export default LoginScreen;
