import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Heading = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>APP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default Heading;
