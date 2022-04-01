import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AppButton({
  title,
  onPress,
  buttonStyles,
  IconComponent,
  textStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, buttonStyles]}>
        {IconComponent && (
          <View
            style={{
              marginRight: 10,
              justifyContent: "center",
            }}
          >
            {IconComponent}
          </View>
        )}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#0080ff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 15,
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
});
