import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { statusbar } from "../configs/variables";
import ModalContext from "../hooks/useModal/context";
import DatePicker from "../components/DatePicker";
import DateContext from "../hooks/useDate/context";
import AppPicker from "../components/AppPicker";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useIsFocused } from "@react-navigation/native";
import slotsApi from "../apis/slots";
import TimePicker from "../components/TimePicker";
import TimeSelector from "../components/TimeSelector";
import SlotItem from "../components/SlotItem";
import mentorid from "../utils/mentorid";

export default function ScheduleScreen() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [starttime, setStarttime] = useState(new Date());
  const [endtime, setEndtime] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const focus = useIsFocused();
  const mentor_id = mentorid;

  const getSlots = () => {
    setLoading(true);
    setSlots([]);
    slotsApi
      .getSlots(date, mentor_id)
      .then((res) => {
        const slots = res?.data?.data[0]?.mentor_slots;
        setSlots(slots ? slots : []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddSlot = () => {
    const data = {
      date: date,
      mentor_id: mentor_id,
      mentor_slots: [
        {
          start_time: starttime,
          end_time: endtime,
        },
      ],
    };
    slotsApi
      .addSlot(data)
      .then((res) => {
        getSlots();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSlotDelete = (id) => {
    slotsApi
      .deleteMentorSlot({ slot_id: id, mentor_id: mentor_id })
      .then((res) => {
        setSlots(slots.filter((item) => item._id != id));
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (!focus) return null;
    setSlots([]);
    setLoading(true);
    slotsApi
      .getSlots(date, mentor_id)
      .then((res) => {
        const slots = res?.data?.data[0]?.mentor_slots;
        setSlots(slots ? slots : []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date, focus]);

  return (
    <View style={styles.container}>
      <View style={styles.slotselector}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Add Your Free Schedule</Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <ModalContext.Provider value={{ modal, setModal }}>
            <DateContext.Provider value={{ date, setDate }}>
              <AppPicker placeholder={date} icon="calendar" />
              <DatePicker />
            </DateContext.Provider>
          </ModalContext.Provider>
        </View>
      </View>
      <View style={styles.slotselector}>
        <ModalContext.Provider value={{ modal: modal1, setModal: setModal1 }}>
          <DateContext.Provider
            value={{ date: starttime, setDate: setStarttime }}
          >
            {modal1 ? <TimePicker modal={modal1} /> : <></>}
          </DateContext.Provider>
        </ModalContext.Provider>

        <ModalContext.Provider value={{ modal: modal2, setModal: setModal2 }}>
          <DateContext.Provider value={{ date: endtime, setDate: setEndtime }}>
            {modal2 ? <TimePicker modal={modal2} /> : <></>}
          </DateContext.Provider>
        </ModalContext.Provider>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginHorizontal: 10,
              marginTop: 10,
            }}
          >
            Add a Free Time Slot
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TimeSelector
                time={moment(starttime).format("LT")}
                onPress={() => {
                  setModal1(true);
                }}
              />
              <TimeSelector
                time={moment(endtime).format("LT")}
                onPress={() => setModal2(true)}
              />
            </View>
            <AppButton
              title="Add"
              onPress={() => {
                handleAddSlot();
              }}
              buttonStyles={{
                paddingVertical: 10,
                marginVertical: 10,
                marginHorizontal: 10,
                borderRadius: 5,
              }}
              IconComponent={<Ionicons name="add" size={25} color="white" />}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 17,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          Your Slots
        </Text>
        <ScrollView>
          {slots.length > 0 && (
            <View>
              {slots.map((item) => {
                const startTime = moment(item.start_time).format("LT");
                const endTime = moment(item.end_time).format("LT");
                return (
                  <SlotItem
                    starttime={startTime}
                    endtime={endTime}
                    key={item._id}
                    onPress={() => handleSlotDelete(item._id)}
                  />
                );
              })}
            </View>
          )}

          {slots.length <= 0 && !loading && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text> No Slots Provided on {moment(date).format("LL")}</Text>
            </View>
          )}
          {slots.length <= 0 && loading && (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  slotselector: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 10,
  },
  titlecontainer: {},
  buttonscontainer: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
});
