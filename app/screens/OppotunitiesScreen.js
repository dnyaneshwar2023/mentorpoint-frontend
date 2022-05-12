import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import opportunitiesApi from "../apis/opportunities";

import OpportunityCard from "../components/OpportunityCard";

export default function OppotunitiesScreen() {
  const [opportunities, setOpportunities] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const getOpportunities = async () => {
    const res = await opportunitiesApi.getOpportunities();
    return res.data.data;
  };
  useEffect(async () => {
    getOpportunities().then((data) => {
      setOpportunities(data);
    });
  }, []);
  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    getOpportunities().then((data) => {
      log
      setOpportunities(data);
    });
    setRefresh(false);
  }, []);
  return (
    <View style={styles.container}>
      {opportunities.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={opportunities}
          renderItem={({ item }) => <OpportunityCard {...item} />}
          keyExtractor={(item) => item._id}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
        />
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
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
