import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Ar = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/shirt.png")}
        style={[styles.image, { height: height * 0.4 }]}
      />
      <Text></Text>
    </View>
  );
};

export default Ar;

const styles = StyleSheet.create({
  image: {
    // position: "absolute",
    zIndex: 1,
    alignSelf: "center",
    width: "100%",
    // height: "100%",
    top: "100%",
  },
});
