import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomSheet } from "react-native-elements";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import AppButton from "../components/AppButton";
import RNEInput from "../components/RNEInput";
import servicesApi from "../apis/services";
import useAuth from "../auth/useAuth";

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  fee: yup
    .number("Charge must be a number")
    .required()
    .typeError("Charge must be a number"),
  duration: yup
    .number("Duration Must Be a Number")
    .required()
    .typeError("Duration Must Be a Number"),
});
export default function AddServiceScreen({ visible }) {
  const navigation = useNavigation();
  const { user } = useAuth();
  const mentorid = user?._id;

  const successResponse = () => {
    navigation.navigate("Success", {
      buttonTitle: "My Services",
      screenName: "MentorServices",
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
    <View style={styles.container}>
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
                error={touched.fee && errors.fee}
              />
              <RNEInput
                placeholder="Enter duration in Minutes"
                bg="white"
                label="Duration"
                name="duration"
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
                  borderRadius: 5,
                }}
                onPress={() => setVisible(false)}
              />
              <AppButton
                title="Submit"
                buttonStyles={{
                  paddingHorizontal: 40,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  bottombuttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
