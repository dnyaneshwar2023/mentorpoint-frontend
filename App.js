import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";
import Drawer from "./app/navigation/Drawer";
import LoginScreen from "./app/screens/LoginScreen";
import { auth } from "./app/firebase/client";

import { useEffect } from "react";
import ExpoScreen from "./app/screens/ExpoScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
export default function App() {
  return (
    <>
      <AuthNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
