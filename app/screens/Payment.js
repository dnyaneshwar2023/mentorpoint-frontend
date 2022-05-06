import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import RazorpayCheckout from "react-native-razorpay";
export default function Payment() {
  const handelePayment = () => {
    var options = {
      description: "Session Payment",
      image: "https://i.imgur.com/3g7nmJC.png",
      currency: "INR",
      key: "rzp_live_CFq8WlxGy8ruJr", // Your api key
      amount: "100",
      name: "Dnyaneshwar",
      prefill: {
        email: "dnyaneshwarbtecs35@gmail.com",
        contact: "9657690018",
        name: "Mentorpoint",
      },
      theme: { color: "#F37254" },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
      }}
    >
      <AppButton title="Pay" onPress={handelePayment} />
    </View>
  );
}

const styles = StyleSheet.create({});
