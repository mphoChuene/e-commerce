import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    role: "Seller",
  });

  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false); // Add this state

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setIsUsernameAvailable(false); // Reset username availability when input changes
  };

  const handleSubmit = () => {
    // Check username availability when the "Next" button is pressed
    const username = formData.name; // Assuming the "name" field is used as the username
    const usernameAvailable = checkUsernameAvailability(username);
    setIsUsernameAvailable(usernameAvailable);

    // Now you can handle the username availability as needed
    if (usernameAvailable) {
      console.log("Username is available");
      // Continue with the registration process
    } else {
      console.log("Username is not available");
      // Display an error message or take appropriate action
    }
  };

  // Function to check username availability
  const checkUsernameAvailability = (username) => {
    // Implement your username availability logic here (e.g., query a server or check against existing usernames)
    return username.trim() !== ""; // For demonstration purposes, it checks if the username is not empty
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Username</Text>
      <Text style={styles.title2}>
        Choose a username or take our friendly suggestions. You can update it
        whenever you like!
      </Text>

      <Text style={styles.title3}>Username</Text>
      <TextInput
        style={styles.input1}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
      />

      {isUsernameAvailable && (
        <Text style={styles.availableText}>Username available!</Text>
      )}

      <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text>Already have account?</Text>
        <Button title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 100,
    alignSelf: "left",
    color: "black",
  },
  input1: {
    height: 45,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  registerButton: {
    borderRadius: 10,
  },
  title2: {
    color: "black",
    fontSize: 15,
    marginTop: 10,
  },
  title3: {
    marginTop: 30,
    marginBottom: 10,
  },
  availableText: {
    color: "green",
    fontWeight: "bold",
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40%",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 20,
  },
  customButton: {
    marginTop: "15%",
    width: "100%",
    height: "7%",
    backgroundColor: "#FFB124",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default RegistrationPage;
