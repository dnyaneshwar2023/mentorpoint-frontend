import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";
import Drawer from "./app/navigation/Drawer";
import LoginScreen from "./app/screens/LoginScreen";
import SuccessAnimation from "./app/animations/SuccessAnimation";
import { useEffect } from "react";
import SignUpScreen from "./app/screens/SignUpScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
export default function App() {
  return (
    <>
      <Drawer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
