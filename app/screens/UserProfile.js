import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import ProfileCard from "../components/ProfileCard";
import SkillBadge from "../components/SkillBadge";
import { colors, statusbar } from "../configs/variables";
import Socialcard from "../components/SocialCard";

import user from "../utils/user";

export default function UserProfile({ route, navigation }) {
  const [drawer, setDrawer] = useState(false);
  console.log(user);
  return (
    <>
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
          <ProfileCard {...user} />
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
            {user.bio}
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
            {user.skills.map((item) => {
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
            <Socialcard name={"github"} />
            <Socialcard name={"linkedin"} />
            <Socialcard name={"instagram"} />
          </View>
        </View>
      </ScrollView>
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
