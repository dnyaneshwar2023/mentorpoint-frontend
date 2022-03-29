import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../../configs/variables";

export default function TimeSelector({ time, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>00:00</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: colors.lightgrey,
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
