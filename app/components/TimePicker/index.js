import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import useDate from "../../hooks/useDate";
import useModal from "../../hooks/useModal";
export default function TimePicker() {
  const { modal, setVisible } = useModal();
  const { date, changeDate } = useDate();
  if (!modal) {
    return null;
  }
  return (
    <DateTimePicker
      mode="time"
      value={date}
      onChange={async (event, date) => {
        changeDate(date);

        setVisible(false);
      }}
      onTouchCancel={() => setVisible(false)}
      minuteInterval={15}
    />
  );
}

const styles = StyleSheet.create({});
