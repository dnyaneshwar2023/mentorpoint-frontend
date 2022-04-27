import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import DatePicker from "../components/DatePicker";
import ModalContext from "../hooks/useModal/context";
import AppButton from "../components/AppButton";
import { colors, statusbar } from "../configs/variables";
import AppTextInput from "../components/AppInputText";
import AppPicker from "../components/AppPicker";
import DateContext from "../hooks/useDate/context";
import { Ionicons } from "@expo/vector-icons";
import BottonButton from "../components/BottomButton";
import BillCard from "../components/BillCard";
import { useIsFocused } from "@react-navigation/native";
import BottomDrawerContext from "../hooks/useBottomDrawer/context";
import BillDrawer from "../drawers/BillDrawer";
import servicesApi from "../apis/services";

export default function BookingScreen({ route }) {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [service, setService] = useState({});
  const [refresh, setRefresh] = useState(0);
  const serviceid = route?.params?.serviceid;
  const isFocus = useIsFocused();
  useEffect(() => {
    setService({});
    servicesApi
      .getServiceById(serviceid)
      .then((res) => {
        setService(res?.data?.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isFocus]);
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
            {service?.title}
          </Text>
          <Text
            style={{
              textAlign: "justify",
              lineHeight: 20,
              marginVertical: 5,
            }}
          >
            {service?.description}
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
