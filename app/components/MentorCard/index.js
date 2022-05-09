import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import driveURL from "../../utils/drive.js";
import { colors } from "../../configs/variables";
import AppButton from "../AppButton";
import SkillBadge from "../SkillBadge";

export default function MentorCard(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profileheader}>
        <View style={styles.mentorinfo}>
          <View style={styles.profileicon}>
            {props?.profile_picture ? (
              <Image
                source={{
                  uri: driveURL + props?.profile_picture,
                }}
                style={styles.image}
              />
            ) : (
              <Image
                source={require("../../images/user-icon.png")}
                style={styles.image}
              />
            )}
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
            <View
              style={{
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                }}
              >
                {props?.headline}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 20,
            marginHorizontal: 5,
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
            onPress={() =>
              navigation.navigate("BookingStack", {
                screen: "MentorProfile",
                params: { user: props },
              })
            }
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
            onPress={() => {
              navigation.navigate("BookingStack", {
                screen: "Services",
                params: { mentor_id: props?._id },
              });
            }}
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
    flex: 1,
    paddingVertical: 10,
    margin: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 5,
  },
  profileheader: {
    flex: 1,
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
    flex: 7,
    flexDirection: "row",
    overflow: "hidden",
  },
  profileicon: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mentorname: {
    marginLeft: 10,
    alignItems: "flex-start",
    overflow: "hidden",
    flexWrap: "wrap",
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
    resizeMode: "cover",
  },
  skillscontainer: {},
  badgecontainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
    flexWrap: "wrap",
  },
});
