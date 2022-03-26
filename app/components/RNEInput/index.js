import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input } from "react-native-elements";
import { colors } from "../../configs/variables";

export default function RNEInput({
  placeholder,
  label,
  multiline,
  bg,
  onInputChange,
}) {
  return (
    <Input
      onChangeText={(text) => onInputChange(text)}
      placeholder={placeholder}
      label={label}
      multiline={multiline}
      inputStyle={{
        backgroundColor: bg ? bg : colors.lightgrey,
      }}
      inputContainerStyle={{
        borderBottomWidth: 2,
        borderWidth: 2,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: bg ? bg : colors.lightgrey,
        borderRadius: 5,
      }}
      labelStyle={{
        color: "black",
        marginBottom: 5,
      }}
    />
  );
}

const styles = StyleSheet.create({});
