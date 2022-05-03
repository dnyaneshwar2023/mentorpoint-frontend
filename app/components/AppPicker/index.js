import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../configs/variables";
import useModal from "../../hooks/useModal";
import useDate from "../../hooks/useDate";

export default function AppPicker({ icon, placeholder, ...otherProps }) {
  const { setVisible } = useModal();

  return (
    <TouchableNativeFeedback onPress={() => setVisible(true)}>
      <View style={styles.container}>
        <View>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={"black"}
              style={styles.icon}
            />
          )}
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text {...otherProps}>{placeholder}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderRadius: 5,
    flexDirection: "row",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
  },
  icon: {
    marginRight: 10,
  },
});
