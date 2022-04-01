import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { statusbar } from "../configs/variables";
import SessionTypeItem from "../components/SessionTypeItem";
import AppButton from "../components/AppButton";
import BottomDrawerContext from "../hooks/useBottomDrawer/context";
import SessionEditDrawer from "../drawers/SessionEditDrawer";
export default function SessionsTypeScreen() {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Add Your Session Types</Text>
        </View>
        <ScrollView>
          <SessionTypeItem title="Resume Review Session" price="500" />
          <SessionTypeItem title="Resume Review Session" price="500" />
          <SessionTypeItem title="Resume Review Session" price="500" />
          <SessionTypeItem title="Resume Review Session" price="500" />
          <SessionTypeItem title="Resume Review Session" price="500" />
          <SessionTypeItem title="Resume Review Session" price="500" />
          <SessionTypeItem title="Resume Review Session" price="500" />
          <SessionTypeItem title="Resume Review Session" price="500" />
        </ScrollView>
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
    paddingTop: statusbar,
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
