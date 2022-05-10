import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import "react-native-gesture-handler";
import { Switch } from "react-native-elements";

import { colors } from "../../configs/variables";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function SessionTypeItem({
  item,
  handleDeleteItem,
  handleEditItem,
}) {
  const [value, setValue] = useState(item?.is_deleted);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Text style={styles.time}>{item?.title}</Text>
        <Text style={styles.time}> - </Text>
        <Text style={styles.time}>Rs. {item?.fee} </Text>
        <Text style={styles.time}>({item?.duration} mins)</Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={handleEditItem}>
          <View style={[styles.button, { backgroundColor: "blue" }]}>
            <MaterialIcons name="edit" size={20} color="white" />
          </View>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Active Status
          </Text>
          <Switch
            value={!value}
            onValueChange={(value) => {
              setValue(!value);
              handleDeleteItem(item?._id, !value);
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
    justifyContent: "center",
    margin: 10,
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    borderRadius: 5,
  },
  time: {
    fontWeight: "700",
    fontSize: 17,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 5,
    marginVertical: 10,
    marginLeft: 10,
  },
});
