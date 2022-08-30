// import { Button } from "react-native";

import { Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  return (
    // <Button
    //   title="Go to Jane's profile"
    //   onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    // />
    <Button
      icon=""
      mode="contained"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    >
      Go to Jane's profile
    </Button>
  );
};

export default HomeScreen;
