import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";

import Heading from "../components/Heading";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
const AppDrawer = createDrawerNavigator();
import Sidebar from "../components/Sidebar";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MentorProfile from "../screens/MentorProfile";
import SessionsDrawer from "../drawers/SessionsDrawer";
import SessionsScreen from "../screens/SessionsScreen";
import OppotunitiesScreen from "../screens/OppotunitiesScreen";
import BookingScreen from "../screens/BookingScreen";
import MentorsScreen from "../screens/MentorsScreen";
import EarningsSceen from "../screens/EarningsSceen";
import EditProfile from "../screens/EditProfile";
import ScheduleScreen from "../screens/ScheduleScreen";
import ChatScreen from "../screens/ChatScreen";
import SessionsTypeScreen from "../screens/SessionsTypeScreen";
import BottomTabBar from "./BottomTabBar";
import UserProfile from "../screens/UserProfile";
import BookingStack from "./BookingStack";
export default function Drawer() {
  return (
    <>
      <NavigationContainer>
        <AppDrawer.Navigator
          drawerContent={(props) => <Sidebar {...props} />}
          screenOptions={{
            headerShown: false,
            drawerLabelStyle: {
              marginLeft: -20,
              fontSize: 18,
              color: "#00aced",
            },
            drawerStyle: {
              //   padding: 10,
            },
            drawerItemStyle: {
              paddingLeft: 20,
            },
          }}
        >
          <AppDrawer.Screen
            component={BottomTabBar}
            name="Home"
            options={{
              drawerIcon: () => (
                <AntDesign name="home" size={24} color="#00aced" />
              ),
            }}
          />
          <AppDrawer.Screen
            component={BookingScreen}
            name="BookingScreen"
            options={{
              drawerIcon: () => (
                <AntDesign name="home" size={24} color="#00aced" />
              ),
              headerShown: true,
              headerTitle: "Your Profile",
              drawerItemStyle: { display: "none" },
            }}
          />
          <AppDrawer.Screen
            component={UserProfile}
            name="UserProfile"
            options={{
              drawerIcon: () => (
                <AntDesign name="user" size={24} color="#00aced" />
              ),
              headerShown: true,
              headerTitle: "Your Profile",
              drawerItemStyle: { display: "none" },
            }}
          />

          <AppDrawer.Screen
            component={MentorProfile}
            name="MentorProfile"
            options={{
              drawerIcon: () => (
                <AntDesign name="user" size={24} color="#00aced" />
              ),
              headerShown: true,
              drawerItemStyle: { display: "none" },
            }}
          />

          <AppDrawer.Screen
            component={SessionsTypeScreen}
            name="SessionTypes"
            options={{
              drawerLabel: "Your Services",
              drawerIcon: () => (
                <AntDesign name="customerservice" size={24} color="#00aced" />
              ),
              headerShown: true,
              headerTitle: "Your Services",
            }}
          />

          <AppDrawer.Screen
            component={ScheduleScreen}
            name="MentorScedule"
            options={{
              drawerLabel: "Mentor Schedule",
              drawerIcon: () => (
                <FontAwesome name="calendar" size={24} color="#00aced" />
              ),
              headerTitle: "Your Schedule",
              headerShown: true,
            }}
          />
          <AppDrawer.Screen
            component={EditProfile}
            name="EditProfile"
            options={{
              drawerLabel: "Edit Profile",
              drawerIcon: () => (
                <FontAwesome name="edit" size={24} color="#00aced" />
              ),
              headerShown: true,
              headerTitle: "Edit Profile",
            }}
          />
          <AppDrawer.Screen
            component={EarningsSceen}
            name="Earnings"
            options={{
              drawerIcon: () => (
                <FontAwesome name="money" size={24} color="#00aced" />
              ),
              headerShown: true,
              headerTitle: "Earnings",
            }}
          />
        </AppDrawer.Navigator>
      </NavigationContainer>
    </>
  );
}
