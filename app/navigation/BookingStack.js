import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MentorProfile from "../screens/MentorProfile";
import ServicesScreen from "../screens/ServicesScreen";
import BookingScreen from "../screens/BookingScreen";
import BookingSummary from "../screens/BookingSummary";
const Stack = createStackNavigator();
const BookingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MentorProfile"
        component={MentorProfile}
        options={{
          title: "Profile",
        }}
      />
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          title: "Services",
        }}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          title: "Booking",
        }}
      />
      <Stack.Screen
        name="Summary"
        component={BookingSummary}
        options={{
          title: "Summary",
        }}
      />
    </Stack.Navigator>
  );
};

export default BookingStack;
