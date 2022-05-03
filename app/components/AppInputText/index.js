import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../configs/variables";

export default function AppTextInput({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      <View>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={"black"}
            style={styles.icon}
          />
        )}
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <TextInput placeholder={placeholder} {...otherProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderRadius: 5,
    flexDirection: "row",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
  },
  icon: {
    marginRight: 10,
  },
});
