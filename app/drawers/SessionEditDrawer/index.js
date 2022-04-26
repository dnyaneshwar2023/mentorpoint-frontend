import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomSheet } from "react-native-elements";
import SessionItem from "../../components/SessionItem";
import AppButton from "../../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useBottomDrawer from "../../hooks/useBottomDrawer";
import RNEInput from "../../components/RNEInput";
import { Formik } from "formik";
import servicesApi from "../../apis/services";
import mentorid from "../../utils/mentorid";

import validationSchema from "./validations";

export default function SessionEditDrawer({ visible }) {
  const { drawer, setVisible } = useBottomDrawer();

  const addService = (values) => {
    servicesApi.addService(mentorid, values).then((res) => {
      console.log(res.data);
    });
  };

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
          padding: 10,
        }}
      >
        <Formik
          initialValues={{
            session_title: "",
            session_description: "",
            fee: "",
            duration: "",
          }}
          validationSchema={validationSchema}
          onSubmit={addService}
        >
          {({ errors, handleSubmit, touched }) => (
            <>
              <View style={{ alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="drag-horizontal-variant"
                  size={24}
                  color="black"
                />
              </View>
              <View>
                <RNEInput
                  placeholder="Enter Session Name"
                  bg="white"
                  label="Session Name"
                  name="session_title"
                  onInputChange={(text) => console.log(text)}
                  error={touched?.session_title && errors.session_title}
                />
                <RNEInput
                  placeholder="Enter Session Description"
                  bg="white"
                  label="Session Description"
                  name="session_description"
                  multiline={true}
                  error={
                    touched.session_description && errors.session_description
                  }
                />
                <RNEInput
                  placeholder="Enter Session Charges"
                  bg="white"
                  label="Session Charges"
                  name="fee"
                  onInputChange={(text) => console.log(text)}
                  error={touched.fee && errors.fee}
                />
                <RNEInput
                  placeholder="Enter duration in Minutes"
                  bg="white"
                  label="Duration"
                  name="duration"
                  onInputChange={(text) => console.log(text)}
                  error={touched.duration && errors.duration}
                />
              </View>
              <View style={styles.bottombuttons}>
                <AppButton
                  title="back"
                  buttonStyles={{
                    paddingHorizontal: 40,
                    paddingVertical: 10,
                    backgroundColor: "red",
                    borderColor: "red",
                    borderWidth: 1,
                  }}
                  onPress={() => setVisible(false)}
                />
                <AppButton
                  title="Submit"
                  buttonStyles={{
                    paddingHorizontal: 40,
                    paddingVertical: 10,
                  }}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottombuttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});
