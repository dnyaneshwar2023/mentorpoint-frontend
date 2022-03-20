import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import useModal from "../../hooks/useModal";
import AppButton from "../AppButton";
import { Calendar } from "react-native-calendars";
import { colors } from "../../configs/variables";
export default function DatePicker() {
  const { modal, setVisible } = useModal();
  const [selected, setDate] = useState("");
  return (
    <View>
      <View>
        <Modal
          isVisible={modal}
          animationOut="fadeOutUp"
          animationIn="fadeInDown"
          animationInTiming={50}
          animationOutTiming={50}
        >
          <View>
            <Calendar
              initialDate="2022-03-19"
              style={{
                padding: 10,
                borderRadius: 10,
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                },
                "2022-03-16": {
                  marked: true,
                },
                ...selected,
              }}
              theme={{
                selectedDayBackgroundColor: colors.primary,
              }}
              onDayPress={(day) => {
                setDate(day.dateString);
              }}
            />
          </View>
          <AppButton title="ok" onPress={() => setVisible(false)} />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
