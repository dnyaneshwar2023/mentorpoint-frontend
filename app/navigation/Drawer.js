import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";

import Heading from "../components/Heading";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
const AppDrawer = createDrawerNavigator();
import Sidebar from "../components/Sidebar";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MentorProfile from "../screens/MentorProfile";
import BookingScreen from "../screens/BookingScreen";
import EarningsSceen from "../screens/EarningsSceen";
import EditProfile from "../screens/EditProfile";
import ScheduleScreen from "../screens/ScheduleScreen";
import MentorServices from "../screens/MentorServices";
import BottomTabBar from "./BottomTabBar";
import UserProfile from "../screens/UserProfile";
import ServicesScreen from "../screens/ServicesScreen";
import ChatScreen from "../screens/ChatScreen";
import SuccessAnimation from "../animations/SuccessAnimation";
import FailureAnimation from "../animations/FailureAnimation";
import AddServiceScreen from "../screens/AddServiceScreen";
import AddOpportunityScreen from "../screens/AddOpportunity";
import BookingSuccess from "../animations/BookingSuccess";
import Payment from "../screens/Payment";
import MeetingDetailsScreen from "../screens/MeetingDetailsScreen";
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

          {/* <AppDrawer.Screen
            component={MentorProfile}
            name="MentorProfile"
            options={{
              drawerIcon: () => (
                <AntDesign name="user" size={24} color="#00aced" />
              ),
              headerShown: true,
              drawerItemStyle: { display: "none" },
            }}
          /> */}

          <AppDrawer.Screen
            component={MentorServices}
            name="MentorServices"
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
            component={AddServiceScreen}
            name="AddService"
            options={{
              drawerLabel: "Your Services",
              drawerIcon: () => (
                <AntDesign name="customerservice" size={24} color="#00aced" />
              ),
              headerShown: true,
              headerTitle: "Add Service",
              drawerItemStyle: { display: "none" },
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
            component={MeetingDetailsScreen}
            name="MeetingDetails"
            options={{
              drawerLabel: "Meeting Details",
              drawerIcon: () => (
                <MaterialCommunityIcons
                  name="video-outline"
                  size={24}
                  color="#00aced"
                />
              ),
              headerShown: true,
              headerTitle: "Meeting Details",
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
          {/* <AppDrawer.Screen
            component={ServicesScreen}
            name="Services"
            options={{
              drawerIcon: () => (
                <FontAwesome name="money" size={24} color="#00aced" />
              ),
              headerShown: true,
              drawerItemStyle: { display: "none" },
            }}
          /> */}
          <AppDrawer.Screen
            component={AddOpportunityScreen}
            name="AddOpportunity"
            options={{
              drawerIcon: () => (
                <MaterialIcons name="work" size={24} color="#00aced" />
              ),
              headerShown: true,
              headerTitle: "Add Opportunity",
              drawerLabel: "Add Opportunity",
            }}
          />

          <AppDrawer.Screen
            component={ChatScreen}
            name="Chats"
            options={{
              drawerIcon: () => (
                <FontAwesome name="money" size={24} color="#00aced" />
              ),
              headerShown: true,
              drawerItemStyle: { display: "none" },
            }}
          />
          <AppDrawer.Screen
            component={SuccessAnimation}
            name="Success"
            options={{
              drawerIcon: () => (
                <FontAwesome name="money" size={24} color="#00aced" />
              ),
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
          <AppDrawer.Screen
            component={FailureAnimation}
            name="Failure"
            options={{
              drawerIcon: () => (
                <FontAwesome name="money" size={24} color="#00aced" />
              ),
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
          {/* <AppDrawer.Screen
            name="Booking"
            component={BookingScreen}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialIcons name="work-outline" size={24} color={color} />
              ),
              headerShown: true,
              drawerItemStyle: { display: "none" },
            }}
          /> */}
          <AppDrawer.Screen
            component={BookingStack}
            name="BookingStack"
            options={{
              drawerIcon: () => (
                <FontAwesome name="money" size={24} color="#00aced" />
              ),
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
          <AppDrawer.Screen
            component={BookingSuccess}
            name="BookingSuccess"
            options={{
              drawerIcon: () => (
                <FontAwesome name="money" size={24} color="#00aced" />
              ),
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
        </AppDrawer.Navigator>
      </NavigationContainer>
    </>
  );
}
