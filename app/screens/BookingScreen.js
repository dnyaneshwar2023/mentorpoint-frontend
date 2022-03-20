import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import DatePicker from "../components/DatePicker";
import ModalContext from "../hooks/useModal/context";
import AppButton from "../components/AppButton";
export default function BookingScreen() {
  const [modal, setModal] = useState(true);
  return (
    <View style={styles.container}>
      {/* */}
      <ModalContext.Provider value={{ modal, setModal }}>
        <DatePicker />
      </ModalContext.Provider>

      <AppButton title="Open" onPress={() => setModal(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
