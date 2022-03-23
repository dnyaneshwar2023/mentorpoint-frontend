import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MentorCard from "../components/MentorCard";
export default function MentorsScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});
