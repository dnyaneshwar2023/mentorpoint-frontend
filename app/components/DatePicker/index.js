import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import useModal from "../../hooks/useModal";
import AppButton from "../AppButton";
import { Calendar } from "react-native-calendars";
import { colors } from "../../configs/variables";
import useDate from "../../hooks/useDate";
import moment from "moment";
export default function DatePicker() {
  const { modal, setVisible } = useModal();
  const { date, changeDate } = useDate();
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
              initialDate={moment().format("YYYY-MM-DD")}
              style={{
                padding: 10,
                borderRadius: 10,
              }}
              markedDates={{
                [date]: {
                  selected: true,
                },
              }}
              theme={{
                selectedDayBackgroundColor: colors.primary,
              }}
              onDayPress={(day) => {
                changeDate(day.dateString);
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
