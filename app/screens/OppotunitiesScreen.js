import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import OpportunityCard from "../components/OpportunityCard";

export default function OppotunitiesScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
        <OpportunityCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 25,
  },
});
