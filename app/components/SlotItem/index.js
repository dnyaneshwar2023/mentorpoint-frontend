import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../configs/variables";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SlotItem({ starttime, endtime }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.time}>{starttime}</Text>
        <Text style={styles.time}> - </Text>
        <Text style={styles.time}>{endtime}</Text>
      </View>
      <View
        style={{
          backgroundColor: "red",
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 5,
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons name="delete" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    borderRadius: 5,
  },
  time: {
    fontWeight: "500",
    fontSize: 17,
  },
});
