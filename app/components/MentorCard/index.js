import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../configs/variables";
import { FontAwesome } from "@expo/vector-icons";
import { Badge } from "react-native-elements";
import { SimpleLineIcons } from "@expo/vector-icons";
import AppButton from "../AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import SkillBadge from "../SkillBadge";

export default function MentorCard() {
  return (
    <View style={styles.container}>
      <View style={styles.profileheader}>
        <View style={styles.mentorinfo}>
          <View style={styles.profileicon}>
            <Image
              source={require("../../images/user-icon.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.mentorname}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Dnyaneshwar Ware
            </Text>
            <Text
              style={{
                opacity: 0.7,
                fontWeight: "600",
              }}
            >
              Mentor
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <MaterialIcons name="star-rate" size={25} color="orange" />
          <Text> 4.5/5</Text>
        </View>
      </View>

      <View style={styles.badgecontainer}>
        <SkillBadge skill="backend" style={badgeStyle} />
        <SkillBadge skill="frontend" style={badgeStyle} />
        <SkillBadge skill="devops" style={badgeStyle} />
      </View>

      <View style={styles.buttons}>
        <View>
          <AppButton
            title="Profile"
            onPress={() => console.log("click")}
            buttonStyles={{
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRadius: 5,
              marginVertical: 10,
            }}
          />
        </View>
        <View>
          <AppButton
            title="Book Now"
            onPress={() => console.log("click")}
            buttonStyles={{
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRadius: 5,
              marginVertical: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const badgeStyle = {
  badgeStyle: {
    backgroundColor: colors.lightblue,
  },
  textStyle: {
    color: colors.primary,
  },
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    margin: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 2,
    justifyContent: "space-around",
  },
  profileheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
  },
  usercontainer: {
    flex: 1,
    alignContent: "flex-start",
    marginLeft: 10,
  },
  mentorinfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileicon: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mentorname: {
    marginLeft: 10,
  },
  buttons: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    resizeMode: "contain",
  },
  skillscontainer: {},
  badgecontainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
    flexWrap: "wrap",
  },
});
