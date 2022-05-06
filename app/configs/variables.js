import { Platform, StatusBar, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;

const statusbar = Platform.OS === "android" ? StatusBarManager.HEIGHT : 0;
const colors = {
  primary: "#1E90FF",
  grey: "#787878",
  lightcyan: "#E0FFFF",
  lightskyblue: "#87CEFA",
  lightgrey: "#D3D3D3",
  lightblue: "#e6ecff",
};
export { statusbar, colors };
