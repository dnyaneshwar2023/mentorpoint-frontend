import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import useAuth from "../../auth/useAuth";
import driveURL from "../../utils/drive";
export default function AccountItem() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {user?.profile_picture ? (
          <Image
            source={{ uri: driveURL + user?.profile_picture }}
            style={{
              width: 70,
              height: 70,
              resizeMode: "cover",
              overflow: "hidden",
            }}
          />
        ) : (
          <Image
            source={require("../../images/user-icon.png")}
            style={{
              width: 70,
              height: 70,
              resizeMode: "cover",
            }}
          />
        )}
      </View>
      <Text style={styles.heading}>{user?.name}</Text>
      <Text style={styles.subheading}>{user?.email} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
  },
  image: {
    borderRadius: 35,
    borderColor: "black",
    overflow: "hidden",
  },
  subheading: {
    fontSize: 14,
    fontWeight: "100",
  },
});
