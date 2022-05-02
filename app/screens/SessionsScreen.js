import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import sessionsApi from "../apis/sessions";
import SessionCard from "../components/SessionCard";
import { useIsFocused } from "@react-navigation/native";

export default function SessionsScreen({ navigation }) {
  const [sessions, setSessions] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const focus = useIsFocused();
  const failResponse = () => {
    navigation.navigate("Failure", {
      buttonTitle: "Retry",
      screenName: "Home",
    });
  };
  const getSessions = async () => {
    const res = await sessionsApi.getSessions();
    console.log(res.data.data);
    return res.data.data;
  };
  useEffect(() => {
    if (!focus) return null;
    setSessions([]);
    sessionsApi.getSessions().then((res) => {
      if (res.ok == true) {
        setSessions(res.data.data);
      } else {
        failResponse();
      }
    });
  }, [focus]);

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setSessions([]);
    sessionsApi
      .getSessions()
      .then((res) => {
        console.log(res);
        if (res.ok == true) {
          setSessions(res.data.data);
        } else {
          failResponse();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setRefresh(false);
  }, []);

  return (
    <View style={styles.container}>
      {sessions.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={sessions}
          renderItem={({ item }) => (
            <SessionCard
              {...item}
              handleChat={() => {
                navigation.navigate("Chats", { sessionid: item._id });
              }}
            />
          )}
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
    marginVertical: 20,
  },
});
