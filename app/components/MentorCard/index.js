import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../configs/variables";
import { FontAwesome } from "@expo/vector-icons";
import { Badge } from "react-native-elements";
import { SimpleLineIcons } from "@expo/vector-icons";
import AppButton from "../AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import SkillBadge from "../SkillBadge";
import { useNavigation } from "@react-navigation/native";
export default function MentorCard(props) {
  const navigation = useNavigation();
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
              {props.name}
            </Text>
            <Text
              style={{
                opacity: 0.7,
                fontWeight: "600",
              }}
            >
              {props.headline}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 2,
              borderRadius: 5,
              borderColor: colors.grey,
              borderWidth: 1,
            }}
          >
            <MaterialIcons name="star-rate" size={20} color="orange" />
            <Text style={{ fontWeight: "bold" }}> 4.5 </Text>
          </View>
        </View>
      </View>

      <View style={styles.badgecontainer}>
        {props.skills.map((item) => {
          return <SkillBadge skill={item} style={badgeStyle} key={item} />;
        })}
      </View>

      <View style={styles.buttons}>
        <View>
          <AppButton
            title="Profile"
            onPress={() => navigation.navigate("Profile")}
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
    borderBottomWidth: 1,
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
