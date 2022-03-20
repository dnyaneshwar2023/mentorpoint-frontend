import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import DatePicker from "../components/DatePicker";
import ModalContext from "../hooks/useModal/context";
import AppButton from "../components/AppButton";
import { colors, statusbar } from "../configs/variables";
import AppTextInput from "../components/AppInputText";
import AppPicker from "../components/AppPicker";
import DateContext from "../hooks/useDate/context";

export default function BookingScreen() {
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  return (
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

      <AppButton title="Open" onPress={() => setModal(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: statusbar,
  },
});
