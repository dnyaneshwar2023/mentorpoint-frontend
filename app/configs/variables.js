import { Platform, StatusBar } from "react-native";

const statusbar = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const colors = {
  primary: "#1E90FF",
  grey: "#787878",
};
export { statusbar, colors };
