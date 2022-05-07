import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../configs/variables";

export default function LoadingButtonButton({
  title,
  onPress,
  buttonStyles,
  IconComponent,
  textStyle,
}) {
  return (
    <View style={[styles.button, buttonStyles]}>
      <ActivityIndicator size={25} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#0080ff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 15,
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
});
