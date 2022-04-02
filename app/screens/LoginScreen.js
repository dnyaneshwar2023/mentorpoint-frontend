import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";

const data = [
  {
    id: 1,
    image: require("../illustrations/hiring.svg"),
  },
  {
    id: 2,
    image: require("../illustrations/step-up.svg"),
  },
];

export default function LoginScreen() {
  const cardItem = ({ index, item }) => {
    return (
      <View>
        <Image source={item.image} />
      </View>
    );
  };
  return (
    <View>
      <Carousel ref={(c) => {}} data={data} renderItem={cardItem} />
    </View>
  );
}

const styles = StyleSheet.create({});
