import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import sessionsApi from "../apis/sessions";
import services from "../apis/services";
import moment from "moment";
import LoadingButtonButton from "../components/LoadingButton";
import AppButton from "../components/AppButton";
import driveURL from "../utils/drive";
import { colors } from "../configs/variables";
import RazorpayCheckout from "react-native-razorpay";
import RNPgReactNativeSdk from "react-native-pg-react-native-sdk";
import useAuth from "../auth/useAuth";
import apisauce from "apisauce";
import uuid from "react-native-uuid";

export default function BookingSummary({ route, navigation }) {
  const [spinner, setSpinner] = useState(false);
  const { service, payload } = route?.params.session;
  const { user } = useAuth();
  const successResponse = () => {
    navigation.navigate("BookingSuccess", {
      buttonTitle: "My Sessions",
      screenName: "Sessions",
    });
  };

  const failResponse = () => {
    navigation.navigate("FailedPayment", {
      buttonTitle: "Back",
      screenName: "Home",
    });
  };

  const handleBooking = async () => {
    setSpinner(true);
    if (service?.fee > 0) {
      var options = {
        description: "Session Payment",
        image: driveURL + "1q6aqxnQ_BMXjFC5O6FppM9OXzrZAJPp_",
        currency: "INR",
        key: "rzp_live_CFq8WlxGy8ruJr", // Your api key
        amount: service.fee * 110,
        name: user?.name,
        prefill: {
          email: user?.email,
          contact: user?.mobile ? user?.mobile : "8888888888",
          name: user?.name,
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
                setSpinner(false);
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

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.text}>Session Title: {service?.title}</Text>
        <Text style={styles.text}>
          Session Duration: {service?.duration} Minutes
        </Text>
        <Text style={styles.text}>Mentor Name: {service?.mentor_name}</Text>
        <Text style={styles.text}>
          Session Time: {moment(payload?.start_time).format("LLL")}
        </Text>
        <Text style={styles.text}>
          Resume Link:{" "}
          <Text style={{ color: "blue", textDecorationLine: "underline" }}>
            {payload?.resume_link}
          </Text>
        </Text>
        <Text style={styles.text}>
          Session Charges: Rs {parseFloat(service?.fee).toFixed(2)}
        </Text>
        <Text style={styles.text}>
          Convinience Charges: Rs{" "}
          {parseFloat(parseInt(service.fee) * 1.1 - service?.fee).toFixed(2)}
        </Text>
        <Text style={styles.text}>
          Total Charges: Rs {parseFloat(service.fee * 1.1).toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        {spinner ? (
          <LoadingButtonButton />
        ) : (
          <AppButton title="Proceed" onPress={handleBooking} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "space-between",
  },
  summary: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "bold",
  },
});
