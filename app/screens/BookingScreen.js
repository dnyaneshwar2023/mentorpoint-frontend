import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
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
import slotsApi from "../apis/slots";
import SlotCard from "../components/SlotCard";

export default function BookingScreen({ route, navigation }) {
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [service, setService] = useState({});
  const [slots, setSlots] = useState([]);
  const [selected, setSelected] = useState({});
  const [refresh, setRefresh] = useState(true);
  const serviceid = route?.params?.serviceid;
  const mentorid = route?.params?.mentor_id;
  const isFocus = useIsFocused();

  React.useCallback(() => {
    console.log("hi");
  }, []);

  useEffect(() => {
    if (!isFocus) return null;
    if (!service?.title) {
      servicesApi
        .getServiceById(serviceid)
        .then((res) => {
          setService(res?.data?.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setSlots([]);
    setRefresh(true);
    slotsApi
      .getSlotsByService({
        mentor_id: mentorid,
        service_id: serviceid,
        date: date,
      })
      .then((res) => {
        setRefresh(false);
        if (res.ok) {
          console.log(res.data);
          setSlots(res?.data?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isFocus, date]);
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
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {slots.map((item) => {
              return (
                <SlotCard
                  {...item}
                  key={item.start_time}
                  selected={item == selected}
                  onPress={() => setSelected(item)}
                />
              );
            })}
          </View>
          {slots.length == 0 && refresh && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
        </ScrollView>
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <AppButton
          title="Proceed"
          onPress={() =>
            navigation.navigate("BookingSuccess", {
              buttonTitle: "My Sessions",
              screenName: "Sessions",
            })
          }
        />
      </View>
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
