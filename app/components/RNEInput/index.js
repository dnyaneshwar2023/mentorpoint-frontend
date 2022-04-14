import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input } from "react-native-elements";
import { colors } from "../../configs/variables";
import { useFormikContext } from "formik";

export default function RNEInput({
  placeholder,
  label,
  multiline,
  bg,
  onInputChange,
  name,
}) {
  const { setFieldValue } = useFormikContext();
  return (
    <Input
      onChangeText={(text) => setFieldValue(name, text)}
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
