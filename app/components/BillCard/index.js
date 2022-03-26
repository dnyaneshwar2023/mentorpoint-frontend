import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../configs/variables";

export default function BillCard() {
  return (
    <View style={styles.container}>
      <View style={styles.sessiondetails}>
        <Text style={styles.title}>Session Type:</Text>
        <Text style={styles.subtitle}>Doubts Solving Session</Text>
      </View>
      <View style={styles.chargecontainer}>
        <Text style={styles.title}>Amount:</Text>
        <Text style={styles.subtitle}>100</Text>
      </View>
      <View style={styles.chargecontainer}>
        <Text style={styles.title}>Processing Charges:</Text>
        <Text style={styles.subtitle}>5</Text>
      </View>
      <View style={styles.chargecontainer}>
        <Text style={styles.title}>Platform Charges:</Text>
        <Text style={styles.subtitle}>0</Text>
      </View>
      <View
        style={{
          borderTopColor: "black",
          borderTopWidth: 2,
          marginHorizontal: 10,
        }}
      ></View>
      <View style={[styles.chargecontainer]}>
        <Text style={styles.title}>Total:</Text>
        <Text style={styles.subtitle}>110</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin: 10,
    shadowColor: "#171717",
    elevation: 10,
    backgroundColor: colors.lightblue,
  },
  sessiondetails: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  chargecontainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  subtitle: {
    fontWeight: "bold",
  },
});
