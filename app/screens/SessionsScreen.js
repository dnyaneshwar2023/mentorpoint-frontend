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
import useAuth from "../auth/useAuth";

export default function SessionsScreen({ navigation }) {
  const [sessions, setSessions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { user } = useAuth();
  const focus = useIsFocused();
  const failResponse = () => {
    navigation.navigate("Failure", {
      buttonTitle: "Retry",
      screenName: "Home",
    });
  };

  useEffect(() => {
    if (!focus) return;
    setLoaded(false);
    setSessions([]);
    const payload =
      user?.role == "student"
        ? { user_id: user._id }
        : { mentor_id: user?._id };
    sessionsApi.getSessions(payload).then((res) => {
      if (res.ok == true) {
        setSessions(res.data.data);
      } else {
        failResponse();
      }
      setLoaded(true);
    });
  }, [focus]);

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setSessions([]);
    setLoaded(false);
    sessionsApi
      .getSessions({ user_id: user._id })
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
    setLoaded(false);
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
          {loaded ? (
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              No Active Sessions right Now
            </Text>
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
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
