import { Platform, StatusBar } from "react-native";

const statusbar = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const colors = {
  primary: "#1E90FF",
  grey: "#787878",
  lightcyan: "#E0FFFF",
  lightskyblue: "#87CEFA",
  lightgrey: "#D3D3D3",
  lightblue:'#e6ecff'
};
export { statusbar, colors };
