import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import SessionCard from "../components/SessionCard";

export default function SessionsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SessionCard />
        <SessionCard />
        <SessionCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});
