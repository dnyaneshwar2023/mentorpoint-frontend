import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../components/AppInputText";
import { Input } from "react-native-elements";
import { colors, statusbar } from "../configs/variables";
import RNEInput from "../components/RNEInput";
import AppButton from "../components/AppButton";
export default function EditProfile() {
  function handleChange(text) {
    console.log(text);
  }
  return (
    <View style={styles.container}>
      <View style={styles.detailscontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RNEInput
            placeholder="Enter Name"
            label="Enter Name"
            bg="white"
            onInputChange={handleChange}
          />
          <RNEInput
            placeholder="Company/Organization"
            label="Company/Organization"
            onInputChange={handleChange}
            bg="white"
          />
          <RNEInput
            placeholder="Bio"
            label="Bio"
            onInputChange={handleChange}
            bg="white"
            multiline={true}
          />
          <RNEInput
            placeholder="LinkedIn Profile URL"
            label="LinkedIn Profile URL"
            onInputChange={handleChange}
            bg="white"
          />
          <RNEInput
            placeholder="GitHub Profile URL"
            label="GitHub Profile URL"
            onInputChange={handleChange}
            bg="white"
          />
          <RNEInput
            placeholder="Instagram Profile URL"
            label="Instagram Profile URL"
            onInputChange={handleChange}
            bg="white"
          />
          <RNEInput
            placeholder="Skills"
            label="Skills"
            onInputChange={handleChange}
            bg="white"
          />
        </ScrollView>
      </View>

      <View style={{ marginHorizontal: 10 }}>
        <AppButton title="Save Details" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusbar,
  },
  detailscontainer: {
    flex: 1,
    margin: 10,
  },
});
