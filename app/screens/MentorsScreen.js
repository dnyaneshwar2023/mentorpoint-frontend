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
import mentorsApi from "../apis/mentors";
import { useIsFocused } from "@react-navigation/native";
import mentorid from "../utils/mentorid";

export default function MentorsScreen({ navigation }) {
  const [refresh, setRefresh] = useState(false);
  const [mentors, setMentors] = useState([]);
  const focus = useIsFocused();
  const successResponse = () => {
    navigation.navigate("Success", {
      buttonTitle: "Take me to Home",
      screenName: "Home",
    });
  };

  const failResponse = () => {
    navigation.navigate("Failure", {
      buttonTitle: "Retry",
      screenName: "Home",
    });
  };

  useEffect(() => {
    if (!focus) return null;
    mentorsApi
      .getMentors()
      .then((res) => {
        if (res.ok == true) setMentors(res.data.data);
        else {
          failResponse();
        }
      })
      .catch((err) => {
        failResponse();
        console.log(err);
      });
  }, [focus]);

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setMentors([]);
    if (!focus) return null;
    mentorsApi
      .getMentors()
      .then((res) => {
        if (res.ok == true) setMentors(res.data.data);
        else {
          failResponse();
        }
      })
      .catch((err) => {
        failResponse();
        console.log(err);
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
