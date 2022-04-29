import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
export default function SlotCard(props) {
  const starttime = moment(props.start_time).format("LT");
  const endtime = moment(props.end_time).format("LT");
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View>
          <Text>
            {starttime} - {endtime}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 5,
          }}
        >
          {props.selected == true && (
            <MaterialIcons name="verified" size={20} color="black" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: "row",
  },
});
