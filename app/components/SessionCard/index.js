import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../configs/variables";
import { Badge } from "react-native-elements";
import { SimpleLineIcons } from "@expo/vector-icons";
import AppButton from "../AppButton";
import moment from "moment";

export default function SessionCard(props) {
  const starttime = moment(props.start_time).format("LLL");
  return (
    <View style={styles.container}>
      <View style={styles.sessionheader}>
        <View style={styles.sessionicon}>
          <FontAwesome name="book" size={30} color="black" />
        </View>
        <View style={styles.sessiontitle}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {props?.service_id?.title}
          </Text>
          <Text
            style={{
              opacity: 0.7,
              fontWeight: "600",
            }}
          >
            {props?.service_id?.mentor_name}
          </Text>
        </View>
      </View>

      <View style={styles.pricingsection}>
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <Text style={styles.pricing}>
            {props?.service_id?.fee == "0" ? "FREE" : props?.service_id?.fee}
          </Text>
        </View>
        <View>
          <Badge
            value="LIVE"
            badgeStyle={{ backgroundColor: "red", borderRadius: 2 }}
            textStyle={{
              fontWeight: "bold",
            }}
          />
        </View>
      </View>

      <View style={styles.timesection}>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <SimpleLineIcons name="calendar" size={18} color="black" />
        </View>
        <View>
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            {starttime}
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton
            title="Chat"
            onPress={props?.handleChat}
            buttonStyles={{
              paddingVertical: 5,
              paddingHorizontal: 50,
              borderRadius: 5,
              marginVertical: 10,
            }}
          />
        </View>
        <View style={styles.button}>
          <AppButton
            title="Meet"
            onPress={() => console.log("click")}
            buttonStyles={{
              paddingVertical: 5,
              paddingHorizontal: 50,
              borderRadius: 5,
              marginVertical: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    margin: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 2,
    justifyContent: "space-around",
  },
  sessionheader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 10,
  },
  sessionicon: {
    padding: 10,
    backgroundColor: colors.lightskyblue,
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sessiontitle: {
    marginLeft: 10,
  },
  pricingsection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pricing: {
    color: "green",
    fontWeight: "bold",
    fontSize: 15,
  },
  timesection: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  buttons: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: "space-between",
  },
  button: {},
});
