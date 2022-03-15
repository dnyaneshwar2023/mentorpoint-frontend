import { Platform, StatusBar } from "react-native";

const statusbar = Platform.OS === "android" ? StatusBar.currentHeight : 0;

export { statusbar };
