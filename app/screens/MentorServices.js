import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { statusbar } from "../configs/variables";
import SessionTypeItem from "../components/SessionTypeItem";
import AppButton from "../components/AppButton";
import BottomDrawerContext from "../hooks/useBottomDrawer/context";
import SessionEditDrawer from "../drawers/SessionEditDrawer";
import servicesApi from "../apis/services";
import { useIsFocused } from "@react-navigation/native";
export default function SessionsTypeScreen() {
  const [drawer, setDrawer] = useState(false);
  const [services, setServices] = useState([]);
  const focus = useIsFocused();
  const mentor_id = "6259933559338316b65a7e9f";

  const handleDeleteService = (id) => {
    console.log(id);
    servicesApi
      .deleteService({ _id: id })
      .then((res) => {
        setServices(services.filter((item) => item._id != id));
      })
      .then((err) => {});
  };
  const handleEditService = (id) => {};

  useEffect(() => {
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
        <AppButton title="Add New" onPress={() => setDrawer(true)} />
      </View>

      <BottomDrawerContext.Provider value={{ drawer, setDrawer }}>
        <SessionEditDrawer visible={drawer} />
      </BottomDrawerContext.Provider>
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
