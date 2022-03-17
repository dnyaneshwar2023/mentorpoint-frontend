import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function BottonButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    width: "100%",
    padding: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#0080ff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 18,
  },
});
