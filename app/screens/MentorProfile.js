import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import SkillBadge from "../components/SkillBadge";
import { colors, statusbar } from "../configs/variables";
import Socialcard from "../components/SocialCard";
import BottonButton from "../components/BottomButton";
import SessionsDrawer from "../drawers/SessionsDrawer";
import BottomDrawerContext from "../hooks/useBottomDrawer/context";
export default function MentorProfile({ route, navigation }) {
  const params = route.params;
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <ProfileCard />
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
            {params.bio}
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
            <SkillBadge skill="C++" />
            <SkillBadge skill="javascript" />
            <SkillBadge skill="node-js" />
            <SkillBadge skill="React.js" />
            <SkillBadge skill="Redux" />
            <SkillBadge skill="MongoDB" />
            <SkillBadge skill="React Native" />
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
      <BottonButton title="Start Session" onPress={() => setDrawer(true)} />
      <BottomDrawerContext.Provider value={{ drawer, setDrawer }}>
        <SessionsDrawer visible={drawer} />
      </BottomDrawerContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusbar,
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
