import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomSheet } from "react-native-elements";
import SessionItem from "../../components/SessionItem";
import AppButton from "../../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useBottomDrawer from "../../hooks/useBottomDrawer";
import RNEInput from "../../components/RNEInput";
export default function SessionEditDrawer({ visible }) {
  const { drawer, setVisible } = useBottomDrawer();
  return (
    <BottomSheet
      isVisible={visible}
      modalProps={{}}
      containerStyle={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons
            name="drag-horizontal-variant"
            size={24}
            color="black"
          />
        </View>
        <View>
          <RNEInput
            placeholder="Enter Session Name"
            bg="white"
            label="Session Name"
            onInputChange={(text) => console.log(text)}
          />
          <RNEInput
            placeholder="Enter Session Description"
            bg="white"
            label="Session Description"
            onInputChange={(text) => console.log(text)}
          />
          <RNEInput
            placeholder="Enter Session Charges"
            bg="white"
            label="Session Charges"
            onInputChange={(text) => console.log(text)}
          />
        </View>
        <View style={styles.bottombuttons}>
          <AppButton
            title="back"
            buttonStyles={{
              paddingHorizontal: 40,
              paddingVertical: 10,
              backgroundColor: "red",
              borderColor: "red",
              borderWidth: 1,
            }}
            onPress={() => setVisible(false)}
          />
          <AppButton
            title="Next"
            buttonStyles={{
              paddingHorizontal: 40,
              paddingVertical: 10,
            }}
          />
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottombuttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});
