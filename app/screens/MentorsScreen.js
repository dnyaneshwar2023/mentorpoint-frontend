import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import MentorCard from "../components/MentorCard";
import mentorsApi from "../apis/users.js";

export default function MentorsScreen() {
  const [refresh, setRefresh] = useState(false);
  const [mentors, setMentors] = useState([]);
  const getMentors = async () => {
    const res = await mentorsApi.getMentors();
    return res.data.data;
  };
  useEffect(() => {
    getMentors().then((data) => {
      setMentors(data);
    });
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setMentors([]);
    getMentors().then((data) => {
      setMentors(data);
    });
    setRefresh(false);
  }, []);

  return (
    <View style={styles.container}>
      {mentors.length > 0 ? (
        <FlatList
          data={mentors}
          renderItem={({ item }) => <MentorCard {...item} />}
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
    marginVertical: 10,
  },
});
