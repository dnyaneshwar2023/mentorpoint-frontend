import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MentorCard from "../components/MentorCard";
export default function MentorsScreen() {
  return (
    <View style={styles.container}>
      <MentorCard />
      <MentorCard />
      <MentorCard />
      <MentorCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});
