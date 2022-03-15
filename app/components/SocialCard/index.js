import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Socialcard({ name }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={name} size={35} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
