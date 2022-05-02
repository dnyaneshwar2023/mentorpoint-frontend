import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomSheet } from "react-native-elements";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import SessionItem from "../../components/SessionItem";
import AppButton from "../../components/AppButton";
import useBottomDrawer from "../../hooks/useBottomDrawer";
import RNEInput from "../../components/RNEInput";
import servicesApi from "../../apis/services";
import validationSchema from "./validations";
import useAuth from "../../auth/useAuth";

export default function SessionEditDrawer({ visible }) {
  const navigation = useNavigation();
  const { drawer, setVisible } = useBottomDrawer();
  const { user } = useAuth();
  const mentorid = user?._id;

  const successResponse = () => {
    navigation.navigate("Success", {
      buttonTitle: "Home",
      screenName: "Home",
    });
  };

  const failResponse = () => {
    navigation.navigate("Failure", {
      buttonTitle: "Take me to Home",
      screenName: "Home",
    });
  };

  const addService = (values) => {
    console.log(values);
    servicesApi
      .addService({ mentor_id: mentorid, mentor_name: user?.name, ...values })
      .then((res) => {
        if (res.ok) {
          successResponse();
        } else {
          failResponse();
        }
      })
      .catch((err) => {
        failResponse();
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
            title: "",
            description: "",
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
                  name="title"
                  onInputChange={(text) => console.log(text)}
                  error={touched?.title && errors.title}
                />
                <RNEInput
                  placeholder="Enter Session Description"
                  bg="white"
                  label="Session Description"
                  name="description"
                  multiline={true}
                  error={touched.description && errors.description}
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
