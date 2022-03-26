import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import DatePicker from "../components/DatePicker";
import ModalContext from "../hooks/useModal/context";
import AppButton from "../components/AppButton";
import { colors, statusbar } from "../configs/variables";
import AppTextInput from "../components/AppInputText";
import AppPicker from "../components/AppPicker";
import DateContext from "../hooks/useDate/context";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import BottonButton from "../components/BottomButton";
import BillCard from "../components/BillCard";
import BottomDrawerContext from "../hooks/useBottomDrawer/context";
import BillDrawer from "../drawers/BillDrawer";

export default function BookingScreen() {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.biocontainer}>
          <Text
            style={{
              color: colors.grey,
              fontWeight: "bold",
            }}
          >
            Resume Review
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 20,
              marginVertical: 5,
            }}
          >
            Ullamco est aliqua amet proident tempor ullamco sint sit velit
            exercitation eiusmod. Sunt exercitation minim deserunt duis deserunt
            pariatur ex irure id fugiat do. Consectetur non sit ad quis non aute
            amet est velit anim eu occaecat.
          </Text>
        </View>

        <AppTextInput
          placeholder="Resume Link"
          icon="link"
          style={{
            fontSize: 16,
            overflow: "scroll",
            width: "100%",
          }}
        />

        <ModalContext.Provider value={{ modal, setModal }}>
          <DateContext.Provider value={{ date, setDate }}>
            <AppPicker placeholder={date} icon="calendar" />
            <DatePicker />
          </DateContext.Provider>
        </ModalContext.Provider>

        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          placeholder={{ label: "Select Time Slot", value: null }}
          value={{}}
          style={{
            iconContainer: {
              position: "absolute",
              top: "auto",
              left: 10,
              flex: 1,
              justifyContent: "center",
            },
            placeholder: {
              color: "black",
              marginLeft: 10,
            },
            inputAndroid: {
              width: "100%",
            },
            viewContainer: {
              padding: 5,
              flexDirection: "row",
              backgroundColor: colors.lightgrey,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10,
            },
          }}
          items={[
            { key: 1, label: "Football", value: "football" },
            { key: 2, label: "Baseball", value: "baseball" },
            { key: 3, label: "Hockey", value: "hockey" },
          ]}
          fixAndroidTouchableBug={true}
        />
      </View>

      <BottonButton title="Proceed" onPress={() => setDrawer(true)} />
      <BottomDrawerContext.Provider value={{ drawer, setDrawer }}>
        <BillDrawer visible={drawer} />
      </BottomDrawerContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: statusbar,
  },
});
