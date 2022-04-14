import { StyleSheet, Text, View, Linking } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import { colors } from "../../configs/variables";
import AppButton from "../AppButton";
export default function OpportunityCard(props) {
  return (
    <View style={[styles.container, styles.elevation]}>
      <View style={styles.header}>
        <View style={styles.workicon}>
          <MaterialIcons name="work" size={24} color="black" />
        </View>

        <View style={styles.worktitle}>
          <Text style={styles.title}>{props.job_title}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons name="organization" size={15} color="black" />
            <View style={{ justifyContent: "center", marginHorizontal: 8 }}>
              <Text style={styles.subtitle}>{props.company}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.timesection}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SimpleLineIcons name="calendar" size={18} color="black" />
          <View
            style={{
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
              }}
            >
              {props.date}
            </Text>
          </View>
        </View>

        <View>
          <AppButton
            title="Apply Now"
            onPress={() => Linking.openURL(props.application_link)}
            buttonStyles={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
              marginVertical: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    margin: 10,
    shadowColor: "#171717",
    elevation: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  workicon: {
    padding: 10,
    backgroundColor: colors.lightskyblue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  worktitle: {
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 30,
  },
  subtitle: {
    opacity: 0.5,
    fontWeight: "bold",
  },
  timesection: {
    flexDirection: "row",
    marginTop: 10,
  },
});
