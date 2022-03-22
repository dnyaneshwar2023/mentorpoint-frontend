import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../configs/variables";
export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.profilecontainer}>
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
              <View>
                <Text style={styles.subheading}>Sessions</Text>
                <Text style={{ fontWeight: "bold", color: colors.primary }}>
                  10+
                </Text>
              </View>
              <View>
                <Text style={styles.subheading}>Rating</Text>
                <Text style={{ fontWeight: "bold", color: colors.primary }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    4.5
                  </Text>
                  /5
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.quotecontainer}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          Fake it untill you make it
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  quotecontainer: {
    alignItems: "flex-start",
    marginLeft: 20,
    paddingRight: 20,
    borderBottomColor: "#0055ff",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginRight: 10,
  },
  profilecontainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
  },
  imagecontainer: {
    flex: 1,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
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
    fontWeight: "bold",
    opacity: 0.5,
  },
  infocontainer: {
    flex: 1,
    alignItems: "center",
  },
  badgecontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginVertical: 5,
  },
});
