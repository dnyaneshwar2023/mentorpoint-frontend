import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";
import Drawer from "./app/navigation/Drawer";

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
