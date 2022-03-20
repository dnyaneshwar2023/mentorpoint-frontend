import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { colors } from "../configs/variables";
import DatePicker from "../components/DatePicker";
export default function BookingScreen() {
  const [selected, setDate] = useState({});
  return (
    <View style={styles.container}>
      {/* <Calendar
        initialDate="2022-03-19"
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
      /> */}
      <DatePicker />
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
