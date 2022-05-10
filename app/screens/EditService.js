import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { BottomSheet } from "react-native-elements";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import AppButton from "../components/AppButton";
import RNEInput from "../components/RNEInput";
import servicesApi from "../apis/services";
import useAuth from "../auth/useAuth";
import { useIsFocused } from "@react-navigation/native";
import LoadingButtonButton from "../components/LoadingButton";
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
export default function EditService({ route }) {
  const navigation = useNavigation();
  const { user } = useAuth();
  const mentorid = user?._id;
  const service_id = route.params?.service_id;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);

  const focus = useIsFocused();

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

  const updateService = (values) => {
    setLoader(true);
    console.log(values);
    servicesApi
      .editService(values)
      .then((res) => {
        if (res.ok) {
          setLoader(false);
          console.log(res.data);
          successResponse();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!focus) return null;
    setLoading(true);
    setService(null);

    servicesApi
      .getServiceById(service_id)
      .then((res) => {
        if (res.ok) {
          setService(res?.data?.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, [focus]);

  return (
    <>
      <View style={styles.container}>
        {loading && (
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
        {service && !loading && (
          <Formik
            initialValues={service}
            validationSchema={validationSchema}
            onSubmit={updateService}
          >
            {({ errors, handleSubmit, touched, values }) => (
              <>
                <View>
                  <RNEInput
                    defaultValue={values?.title}
                    placeholder="Enter Session Name"
                    bg="white"
                    label="Session Name"
                    name="title"
                    onInputChange={(text) => console.log(text)}
                    error={touched?.title && errors.title}
                  />
                  <RNEInput
                    defaultValue={values?.description}
                    placeholder="Enter Session Description"
                    bg="white"
                    label="Session Description"
                    name="description"
                    multiline={true}
                    error={touched.description && errors.description}
                  />
                  <RNEInput
                    defaultValue={values?.fee}
                    placeholder="Enter Session Charges"
                    bg="white"
                    label="Session Charges"
                    name="fee"
                    error={touched.fee && errors.fee}
                  />
                  <RNEInput
                    defaultValue={values?.duration}
                    placeholder="Enter duration in Minutes"
                    bg="white"
                    label="Duration"
                    name="duration"
                    error={touched.duration && errors.duration}
                  />
                </View>
                <View style={styles.bottombuttons}>
                  {loader ? (
                    <LoadingButtonButton />
                  ) : (
                    <AppButton
                      title="update"
                      buttonStyles={{
                        paddingVertical: 15,
                        borderRadius: 5,
                      }}
                      onPress={handleSubmit}
                    />
                  )}
                </View>
              </>
            )}
          </Formik>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "space-between",
  },
  bottombuttons: {
    marginHorizontal: 10,
  },
});
