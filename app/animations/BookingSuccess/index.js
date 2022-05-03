import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import AppButton from "../../components/AppButton";
import { colors } from "../../configs/variables";
export default function BookingSuccess({ navigation, route }) {
  const { buttonTitle, screenName } = route?.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          source={require("./appointment.json")}
          style={{
            width: 500,
            height: 500,
          }}
          autoPlay
          loop
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "700",
              }}
            >
              Yay!! Your Appointment is Successful!
            </Text>
          </View>
          <View>
            <AppButton
              title={buttonTitle ? buttonTitle : "Home"}
              buttonStyles={{
                borderRadius: 5,
                backgroundColor: colors.primary,
              }}
              onPress={() => navigation.navigate(screenName)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
