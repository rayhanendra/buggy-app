// import { Button } from "react-native";

import { View } from "react-native";
import { Button } from "react-native-paper";

const NavigationScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        icon=""
        mode="contained"
        onPress={() => navigation.navigate("Profile", { name: "Nendra" })}
      >
        Go to Jane's profile
      </Button>
      <Button
        icon=""
        mode="contained"
        onPress={() => navigation.navigate("Login", { name: "Nendra" })}
      >
        Go to Login
      </Button>
      <Button
        icon=""
        mode="contained"
        onPress={() => navigation.navigate("Home", { name: "Nendra" })}
      >
        Go to Home
      </Button>
    </View>
  );
};

export default NavigationScreen;
