import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import { statusbar } from "../configs/variables";

export default function MentorProfile() {
  return (
    <>
      <View style={styles.container}>
        <ProfileCard />
      </View>
      <View style={{ flex: 3 }}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusbar,
  },
});
