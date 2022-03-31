import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import useDate from "../../hooks/useDate";
import useModal from "../../hooks/useModal";
export default function TimePicker({ modal }) {
  const { setVisible } = useModal();
  const { date, changeDate } = useDate();
  console.log(date);
  if (!modal) return null;
  return (
    <DateTimePicker
      mode="time"
      value={date ? date : new Date()}
      onChange={async (event, date) => {
        changeDate(date);
        setVisible(false);
      }}
      onT
      minuteInterval={15}
      onTouchEnd={() => {
        console.log("End");
        setVisible(false);
      }}
    />
  );
}

const styles = StyleSheet.create({});
