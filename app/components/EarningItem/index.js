import { StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";

export default function EarningItem(props) {
  const starttime = moment(props.start_time).format("LLL");

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.title}>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            {props?.service_id?.title}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            {starttime}
          </Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amounttext}>+{props?.service_id?.fee}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  title: {
    flex: 7,
    padding: 10,
    backgroundColor: "#1a88ff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  amount: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  amounttext: {
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
});
