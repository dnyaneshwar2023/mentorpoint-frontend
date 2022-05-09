import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import AppButton from "../../components/AppButton";
export default function PaymentFailed({ navigation, route }) {
  const { buttonTitle, screenName } = route?.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          source={require("./payment-failed.json")}
          style={{
            width: 300,
            height: 300,
          }}
          autoPlay
          loop
        />
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Payment Failed
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <AppButton
          title={buttonTitle ? buttonTitle : "Home"}
          buttonStyles={{
            borderRadius: 5,
            backgroundColor: "#E74B3C",
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
