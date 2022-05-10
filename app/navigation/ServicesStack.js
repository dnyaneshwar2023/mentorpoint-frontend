import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MentorProfile from "../screens/MentorProfile";
import ServicesScreen from "../screens/ServicesScreen";
import BookingScreen from "../screens/BookingScreen";
import BookingSummary from "../screens/BookingSummary";
import SessionsTypeScreen from "../screens/MentorServices";
import AddServiceScreen from "../screens/AddServiceScreen";
import EditService from "../screens/EditService";
const Stack = createStackNavigator();
const ServicesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MentorServices"
        component={SessionsTypeScreen}
        options={{
          title: "Your Services",
        }}
      />
      <Stack.Screen
        name="AddService"
        component={AddServiceScreen}
        options={{
          title: "Add Service",
        }}
      />
      <Stack.Screen
        name="EditService"
        component={EditService}
        options={{
          title: "Edit Service",
        }}
      />
    </Stack.Navigator>
  );
};

export default ServicesStack;
