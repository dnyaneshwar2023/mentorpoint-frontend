import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../configs/variables";
export default function SessionItem() {
  return (
    <View style={styles.container}>
      <View style={styles.sessioncontainer}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "nowrap",
            overflow: "scroll",
          }}
        >
          <Text style={styles.sessionheader}>Doubt Solving Session</Text>
        </View>
        {/* {"\u20A8"}. 99 */}
        <View>
          <Text style={styles.pricing}>FREE</Text>
        </View>
      </View>
      <View style={styles.moveicon}>
        <MaterialCommunityIcons name="chevron-right" size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
    borderColor: colors.grey,
    borderRadius: 5,
    borderWidth: 2,
  },
  sessioncontainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    overflow: "hidden",
  },
  sessionheader: {
    fontSize: 17,
    fontWeight: "bold",
  },
  pricing: {
    color: "green",
    fontWeight: "bold",
    fontSize: 15,
  },
  moveicon: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});
