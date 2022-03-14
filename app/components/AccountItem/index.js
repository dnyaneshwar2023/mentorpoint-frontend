import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function AccountItem() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/user-icon.png")}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          resizeMode: "contain",
        }}
      />

      <Text style={styles.heading}> Dnyaneshwar Ware </Text>
      <Text style={styles.subheading}> danny@domain.com </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
  },
  subheading: {
    fontSize: 16,
    fontWeight: "100",
  },
});
