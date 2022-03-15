import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Rating } from "react-native-elements";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={styles.usercontainer}>
            <Image
              source={require("../../images/user-icon.png")}
              style={styles.image}
            />
            <Text style={styles.heading}>Dnyaneshwar Ware</Text>
            <Text style={styles.subheading}>SDE at Somewhere</Text>
          </View>
        </View>
        <View style={styles.infocontainer}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "space-evenly",
            }}
          >
            <Text>Sessions</Text>
            <Text>10+</Text>
            <Text>Rating</Text>
            <Rating
              defaultValue={3.5}
              readonly
              fractions={1}
              imageSize={20}
              style={{ paddingVertical: 10 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  imagecontainer: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "#0055ff",
    borderBottomWidth: 1,
  },
  usercontainer: {
    flex: 1,
    alignContent: "flex-start",
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    resizeMode: "contain",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
  },
  subheading: {
    fontSize: 16,
    fontWeight: "100",
  },
  infocontainer: {
    flex: 1,
    alignItems: "center",
  },
});
