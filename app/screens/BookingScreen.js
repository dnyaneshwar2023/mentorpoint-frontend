import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import DatePicker from "../components/DatePicker";
import ModalContext from "../hooks/useModal/context";
import AppButton from "../components/AppButton";
import { colors, statusbar } from "../configs/variables";
import AppPicker from "../components/AppPicker";
import DateContext from "../hooks/useDate/context";
import SlotCard from "../components/SlotCard";
import RNEInput from "../components/RNEInput";

import { useIsFocused } from "@react-navigation/native";

import servicesApi from "../apis/services";
import slotsApi from "../apis/slots";
import useAuth from "../auth/useAuth";
import sessionsApi from "../apis/sessions";
import RazorpayCheckout from "react-native-razorpay";
const validationSchema = yup.object().shape({
  resume_link: yup.string().required().url(),
});

export default function BookingScreen({ route, navigation }) {
  const [modal, setModal] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [service, setService] = useState({});
  const [slots, setSlots] = useState([]);
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(true);
  const serviceid = route?.params?.serviceid;
  const mentorid = route?.params?.mentor_id;
  const isFocus = useIsFocused();
  const { user } = useAuth();

  const successResponse = () => {
    navigation.navigate("BookingSuccess", {
      buttonTitle: "My Sessions",
      screenName: "Sessions",
    });
  };

  const failResponse = () => {
    navigation.navigate("Failure", {
      buttonTitle: "Back to Home",
      screenName: "Home",
    });
  };
  const handleSubmit = (values) => {
    setSpinner(true);
    const user_slot = selected;
    if (user_slot == null) return null;
    delete user_slot["is_booked"];
    const payload = {
      resume_link: values?.resume_link,
      date: date,
      slot: selected,
      service_id: serviceid,
      user_id: user?._id,
      start_time: user_slot.start_time,
      end_time: user_slot.end_time,
      mentor_id: mentorid,
    };

    if (false) {
      var options = {
        description: "Session Payment",
        image: "https://i.imgur.com/3g7nmJC.png",
        currency: "INR",
        key: "rzp_live_CFq8WlxGy8ruJr", // Your api key
        amount: service.fee * 100,
        name: user?.name,
        prefill: {
          email: user?.email,
          contact: "9657690018",
          name: "Mentorpoint",
        },
        theme: { color: colors.primary },
      };

      RazorpayCheckout.open(options)
        .then((data) => {
          // handle success
          sessionsApi
            .bookSession(payload)
            .then((res) => {
              if (res.ok) {
                setSpinner(false);
                successResponse();
              } else {
                failResponse();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          // handle failure
          failResponse();
        });
    } else {
      sessionsApi
        .bookSession(payload)
        .then((res) => {
          if (res.ok) {
            setSpinner(false);
            successResponse();
          } else {
            failResponse();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (!isFocus) {
      setService({});
      return null;
    }
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
      <Formik
        initialValues={{
          resume_link: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit, handleChange, touched }) => (
          <>
            <ScrollView keyboardShouldPersistTaps={"always"}>
              <View style={styles.container}>
                <View style={styles.biocontainer}>
                  <Text
                    style={{
                      color: colors.primary,
                      fontWeight: "bold",
                      fontSize: 16,
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
                  <View
                    style={{
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Duration
                    </Text>
                    <Text
                      style={{
                        textAlign: "justify",
                        lineHeight: 20,
                        marginVertical: 5,
                      }}
                    >
                      {service?.duration} Minutes
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: -10,
                    marginTop: 10,
                    marginBottom: -10,
                  }}
                >
                  <RNEInput
                    placeholder="Enter Resume Link"
                    bg="white"
                    label="Resume Link"
                    name="resume_link"
                    onInputChange={handleChange}
                    error={touched.resume_link && errors?.resume_link}
                  />
                </View>
                <ModalContext.Provider value={{ modal, setModal }}>
                  <DateContext.Provider value={{ date, setDate }}>
                    <AppPicker placeholder={date} icon="calendar" />
                    <DatePicker />
                  </DateContext.Provider>
                </ModalContext.Provider>

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
                        onPress={() => {
                          if (item.is_booked) return null;
                          setSelected(item);
                        }}
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
                {slots.length == 0 && !refresh && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text>No Slots Available on {date} </Text>
                  </View>
                )}
              </View>
            </ScrollView>
            <View
              style={{
                marginHorizontal: 20,
              }}
            >
              {spinner ? (
                <View
                  style={{
                    backgroundColor: colors.primary,
                    marginVertical: 10,
                    paddingVertical: 10,
                    borderRadius: 5,
                  }}
                >
                  <ActivityIndicator size="large" color="white" />
                </View>
              ) : (
                <AppButton title="Proceed" onPress={handleSubmit} />
              )}
            </View>
          </>
        )}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
