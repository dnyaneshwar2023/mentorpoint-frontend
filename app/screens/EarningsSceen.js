import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import { colors, statusbar } from "../configs/variables";
import EarningCard from "../components/EarningCard";
import AppButton from "../components/AppButton";
import BottonButton from "../components/BottomButton";
import useAuth from "../auth/useAuth";
import sessionsApi from "../apis/sessions";
import EarningItem from "../components/EarningItem";
export default function EarningsSceen() {
  const { user } = useAuth();
  const [sessions, setSessions] = useState();
  const focus = useIsFocused();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!focus) return null;
    setSessions([]);
    setLoading(true);
    sessionsApi.getSessions({ mentor_id: user._id }).then((res) => {
      if (res.ok == true) {
        setSessions(res.data.data);
      } else {
        failResponse();
      }
      setLoading(false);
    });
  }, [focus]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.rewardcontainer}>
          <EarningCard title="Current Earnings" amount={150} />
          <EarningCard title="Total Earnings" amount={1500} />
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Recent Sessions
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            padding: 10,
          }}
        >
          {loading && (
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
          <FlatList
            data={sessions}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <EarningItem {...item} />}
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <AppButton
            title="withdraw"
            buttonStyles={{ backgroundColor: "blue" }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rewardcontainer: {
    flexDirection: "row",
    backgroundColor: "blue",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    margin: 10,
    borderRadius: 5,
  },
});
