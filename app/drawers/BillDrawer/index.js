import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomSheet } from "react-native-elements";
import SessionItem from "../../components/SessionItem";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useBottomDrawer from "../../hooks/useBottomDrawer";
import BillCard from "../../components/BillCard";
export default function BillDrawer({ visible }) {
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
        }}
      >
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons
            name="drag-horizontal-variant"
            size={24}
            color="black"
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            maxHeight: 500,
            height: "100%",
          }}
        >
          <View>
            <BillCard />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            backgroundColor: "white",
          }}
        >
          <AppButton
            title="back"
            buttonStyles={{
              paddingHorizontal: 40,
              paddingVertical: 10,
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
  },
});
