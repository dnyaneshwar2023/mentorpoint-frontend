import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import opportunitiesApi from "../apis/opportunities";

import OpportunityCard from "../components/OpportunityCard";

export default function OppotunitiesScreen() {
  const [opportunities, setOpportunities] = useState([]);

  const getOpportunities = async () => {
    const res = await opportunitiesApi.getOpportunities();
    return res.data.data;
  };
  useEffect(async () => {
    getOpportunities().then((data) => {
      setOpportunities(data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={opportunities}
        renderItem={({ item }) => <OpportunityCard {...item} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 10,
  },
});
