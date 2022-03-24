import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function EarningCard() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        Total Earnings
      </Text>
      <View style={styles.amount}>
        <FontAwesome5 name="money-bill-wave" size={28} color="green" />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            150
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80%",
    height: "40%",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
  },
});
