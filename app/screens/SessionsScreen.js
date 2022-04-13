import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import sessionsApi from "../apis/sessions";
import SessionCard from "../components/SessionCard";

export default function SessionsScreen() {
  const [sessions, setSessions] = useState([]);

  const getSessions = async () => {
    const res = await sessionsApi.getSessions();
    console.log(res.data.data);
    return res.data.data;
  };
  useEffect(() => {
    getSessions().then((data) => {
      setSessions(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {sessions.length > 0 ? (
        <FlatList
          data={sessions}
          renderItem={({ item }) => <SessionCard {...item} />}
          keyExtractor={(item) => item._id}
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
    marginVertical: 20,
  },
});
