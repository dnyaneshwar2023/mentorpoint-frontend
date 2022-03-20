import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AppButton({ title, onPress, buttonStyles }) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0080ff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
