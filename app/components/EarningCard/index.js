import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function EarningCard(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "700",
        }}
      >
        {props?.title}
      </Text>
      <View style={styles.amount}>
        <FontAwesome5 name="rupee-sign" size={20} color="green" />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            {props?.amount}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
