import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SessionItem from "../components/SessionItem";
import servicesApi from "../apis/services";
import mentorid from "../utils/mentorid";
import { useIsFocused } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function ServicesScreen({ route }) {
  const [services, setServices] = useState([]);
  const navigation = useNavigation();
  const mentor_id = route?.params?.mentor_id;
  const isFocus = useIsFocused();
  useEffect(() => {
    setServices([]);
    console.log(isFocus);
    if (!isFocus) return null;
    servicesApi
      .getServices(mentor_id)
      .then((res) => {
        setServices(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isFocus]);

  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
