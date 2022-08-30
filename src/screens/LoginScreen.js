import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const LoginScreen = ({ navigation, route }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text variant="headlineLarge" style={{ color: "#FFFFFF" }}>
          Bunggy
        </Text>
        <Text variant="titleMedium" style={{ color: "#FFFFFF" }}>
          Let’s Write Your Journey
        </Text>
      </View>
      <View style={styles.rectangle}>
        <View
          style={[
            styles.picture,
            { backgroundColor: "#F3F3F3", marginTop: "30%" },
          ]}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          mode="contained"
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
        />
        <TextInput
          mode="contained"
          label="Password"
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            onPress={() => console.log("Pressed")}
            textColor="#521945"
            style={styles.button}
          >
            Register
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            buttonColor="#521945"
            style={styles.button}
          >
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
  },
  title: {
    paddingTop: "16%",
    backgroundColor: "#912F56",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
  },
  rectangle: {
    height: "16%",
    backgroundColor: "#912F56",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  picture: {
    borderWidth: 4,
    borderColor: "rgba(0,0,0,0.2)",
    height: 120,
    width: 120,
    borderRadius: 99,
  },
  formContainer: {
    marginTop: "20%",
    padding: 16,
  },
  textInput: {
    marginBottom: 20,
    backgroundColor: "white",
    color: "#912F56",
  },
  buttonContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    width: 120,
  },
});

export default LoginScreen;
