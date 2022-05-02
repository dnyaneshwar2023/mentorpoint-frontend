import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import AppButton from "../components/AppButton";
import RNEInput from "../components/RNEInput";
import opportunitiesApi from "../apis/opportunities";
import useAuth from "../auth/useAuth";

const validationSchema = yup.object().shape({
  company: yup.string().required(),
  job_title: yup.string().required(),
  application_link: yup.string().url(),
});
export default function AddOpportunityScreen({ visible }) {
  const navigation = useNavigation();
  const { user } = useAuth();
  const mentorid = user?._id;

  const successResponse = () => {
    navigation.navigate("Success", {
      buttonTitle: "All Opportunities",
      screenName: "Opportunities",
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
    opportunitiesApi
      .addOpportunity({ mentor_id: mentorid, ...values })
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
          company: "",
          job_description: "",
          application_link: "",
        }}
        validationSchema={validationSchema}
        onSubmit={addService}
      >
        {({ errors, handleSubmit, touched }) => (
          <>
            <View>
              <RNEInput
                placeholder="Enter Company Name"
                bg="white"
                label="Company Name"
                name="company"
                onInputChange={(text) => console.log(text)}
                error={touched?.company && errors.company}
              />
              <RNEInput
                placeholder="Enter Job Title"
                bg="white"
                label="Job Title"
                name="job_title"
                multiline={true}
                error={touched.job_title && errors.job_title}
              />
              <RNEInput
                placeholder="Enter Application Link"
                bg="white"
                label="Application Link"
                name="application_link"
                error={touched.application_link && errors.application_link}
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
