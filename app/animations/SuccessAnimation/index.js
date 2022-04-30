import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
export default function SuccessAnimation() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LottieView source={require("./success.json")} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({});
