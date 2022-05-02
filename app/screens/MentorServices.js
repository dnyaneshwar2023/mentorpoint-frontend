import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SessionTypeItem from "../components/SessionTypeItem";
import AppButton from "../components/AppButton";
import servicesApi from "../apis/services";
import { useIsFocused } from "@react-navigation/native";
import useAuth from "../auth/useAuth";
export default function SessionsTypeScreen({ navigation }) {
  const [drawer, setDrawer] = useState(false);
  const [services, setServices] = useState([]);
  const focus = useIsFocused();
  const { user } = useAuth();
  const mentor_id = user?._id;

  const handleDeleteService = (id) => {
    servicesApi
      .deleteService({ _id: id })
      .then((res) => {
        setServices(services.filter((item) => item._id != id));
      })
      .then((err) => {});
  };
  const handleEditService = (id) => {
    console.log("Edit");
  };

  useEffect(() => {
    if (!focus) return null;
    console.log(mentor_id);
    if (!focus) return null;
    servicesApi.getServices(mentor_id).then((res) => {
      setServices(res.data.data);
    });
  }, [focus]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Add Your Session Types</Text>
        </View>
        <FlatList
          keyboardShouldPersistTaps={"handled"}
          data={services}
          keyExtractor={(item) => item._id}
          renderItem={(item) => (
            <SessionTypeItem
              {...item}
              handleDeleteItem={() => handleDeleteService(item.item._id)}
              handleEditItem={() => handleEditService(item.item._id)}
            />
          )}
        />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <AppButton
          title="Add New"
          onPress={() => navigation.navigate("AddService")}
          buttonStyles={{
            borderRadius: 5,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  titlecontainer: {
    marginHorizontal: 10,
  },
});
