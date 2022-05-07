import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import ProfileCard from "../components/ProfileCard";
import SkillBadge from "../components/SkillBadge";
import { colors, statusbar } from "../configs/variables";
import Socialcard from "../components/SocialCard";
import useAuth from "../auth/useAuth";
import mentorsApi from "../apis/mentors";
import RNEInput from "../components/RNEInput";

export default function UserProfile({ route, navigation }) {
  const [drawer, setDrawer] = useState(false);
  const [userData, setUserData] = useState(null);
  const { user } = useAuth();
  const userid = user?._id;
  const focus = useIsFocused();
  const handleOpenLink = async (link) => {
    if (!link) return null;
    await Linking.openURL(link);
  };
  useEffect(() => {
    if (!focus) return null;
    setUserData(null);
    mentorsApi.getMentors(userid).then((res) => {
      if (res.ok) {
        setUserData(res.data.data[0]);
      }
    });
  }, [focus]);

  return (
    <>
      {userData == null && (
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
      {userData && (
        <ScrollView>
          <View>
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditProfile");
                }}
              >
                <Feather name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <ProfileCard {...userData} />
          </View>

          <View style={styles.biocontainer}>
            <Text
              style={{
                color: colors.grey,
                fontWeight: "bold",
              }}
            >
              Bio
            </Text>
            <Text
              style={{
                textAlign: "justify",
                lineHeight: 20,
                marginVertical: 5,
              }}
            >
              {userData.bio}
            </Text>
          </View>

          <View style={styles.skillscontainer}>
            <Text
              style={{
                color: colors.grey,
                fontWeight: "bold",
              }}
            >
              Skills
            </Text>
            <View style={styles.badgecontainer}>
              {userData.skills.map((item) => {
                return <SkillBadge skill={item} key={item} />;
              })}
            </View>
          </View>

          <View style={styles.socialcontainer}>
            <Text
              style={{
                color: colors.grey,
                fontWeight: "bold",
              }}
            >
              Social Profiles
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Socialcard
                name={"github"}
                onPress={() => handleOpenLink(userData?.github_url)}
              />
              <Socialcard
                name={"linkedin"}
                onPress={() => handleOpenLink(userData?.linkedin_url)}
              />
              <Socialcard
                name={"instagram"}
                onPress={() => handleOpenLink(userData?.instagram_url)}
              />
            </View>
          </View>
          {/* <View style={styles.skillscontainer}>
            <Text
              style={{
                color: colors.grey,
                fontWeight: "bold",
              }}
            >
              Meeting URL
            </Text>
            
          </View> */}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 5,
  },
  biocontainer: {
    marginLeft: 20,
    marginVertical: 10,
    marginRight: 20,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  skillscontainer: {
    marginLeft: 20,
    marginVertical: 10,
    marginRight: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignItems: "flex-start",
  },
  badgecontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginVertical: 5,
  },
  socialcontainer: {
    marginLeft: 20,
    marginVertical: 5,

    marginRight: 20,
    paddingBottom: 10,
  },
});
