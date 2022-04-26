import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookingScreen from "../screens/BookingScreen";
const Stack = createStackNavigator();
const BookingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Booking" component={BookingScreen} />
    </Stack.Navigator>
  );
};

export default BookingStack;
