import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { statusbar } from "../../configs/variables";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import useAuth from "../../auth/useAuth";
import driveURL from "../../utils/drive";
export default function HeaderItem({ route, navigation }) {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <AntDesign name="menufold" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>{route.name}</Text>
        </View>
        <View>
          <Avatar
            onPress={() => navigation.navigate("UserProfile")}
            activeOpacity={0.2}
            avatarStyle={{}}
            containerStyle={{ backgroundColor: "#BDBDBD" }}
            icon={{}}
            source={
              user?.profile_picture
                ? {
                    uri: driveURL + user?.profile_picture,
                  }
                : require("../../images/user-icon.png")
            }
            imageProps={{
              style: {
                resizeMode: "cover",
              },
            }}
            overlayContainerStyle={{}}
            placeholderStyle={{}}
            rounded
            size="small"
            title="P"
            titleStyle={{}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: statusbar,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
