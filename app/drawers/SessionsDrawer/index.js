import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BottomSheet } from "react-native-elements";
import SessionItem from "../../components/SessionItem";
import AppButton from "../../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useBottomDrawer from "../../hooks/useBottomDrawer";
import servicesApi from "../../apis/services";
import mentorid from "../../utils/mentorid";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function SessionsDrawer({ visible }) {
  const { drawer, setVisible } = useBottomDrawer();
  const [services, setServices] = useState([]);
  const isFocus = useIsFocused();
  const navigation = useNavigation();
  useEffect(() => {
    servicesApi
      .getServices(mentorid)
      .then((res) => {
        setServices(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isFocus]);

  return (
    <BottomSheet
      isVisible={visible}
      modalProps={{}}
      containerStyle={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons
            name="drag-horizontal-variant"
            size={24}
            color="black"
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            maxHeight: 500,
            height: "100%",
          }}
        >
          <View>
            {services.length > 0 ? (
              <ScrollView>
                {services.map((item) => {
                  return (
                    <SessionItem
                      key={item._id}
                      {...item}
                      onPress={() => {
                        navigation.navigate("Booking", {
                          serviceid: item._id,
                        });
                      }}
                    />
                  );
                })}
              </ScrollView>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            )}
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            backgroundColor: "white",
          }}
        >
          <AppButton
            title="back"
            buttonStyles={{
              paddingHorizontal: 40,
              paddingVertical: 10,
            }}
            onPress={() => setVisible(false)}
          />
          <AppButton
            title="Next"
            buttonStyles={{
              paddingHorizontal: 40,
              paddingVertical: 10,
            }}
          />
        </View>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottombuttons: {
    flex: 1,
    flexDirection: "row",
  },
});
