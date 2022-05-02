import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { useIsFocused } from "@react-navigation/native";

import { colors, statusbar } from "../configs/variables";
import RNEInput from "../components/RNEInput";
import AppButton from "../components/AppButton";
import AppImagePicker from "../components/ImagePicker";
import SkillSelect from "../components/SkillSelect";
import mentorsApi from "../apis/mentors";
import useAuth from "../auth/useAuth";
const validationSchema = yup.object().shape({
  name: yup.string().required(),
  bio: yup.string().required(),
  headline: yup.string().required(),
  linkedin_url: yup.string().url(),
  instagram_url: yup.string().url(),
  github_url: yup.string().url(),
  company: yup.string().required(),
  mobile_number: yup.string().required(),
});

export default function EditProfile({ navigation }) {
  const [imageUri, setImageUri] = useState(null);
  const [mentordata, setMentorData] = useState(null);
  const isFocus = useIsFocused();

  const mentorid = useAuth()?.user?._id;

  function handleChange(text) {
    console.log(text);
  }

  const successResponse = () => {
    navigation.navigate("Success", {
      buttonTitle: "Take me to Profile",
      screenName: "UserProfile",
    });
  };

  const failResponse = () => {
    navigation.navigate("Failure", {
      buttonTitle: "Take me to Profile",
      screenName: "UserProfile",
    });
  };
  const updateData = (values) => {
    mentorsApi
      .updateMentor(values)
      .then((res) => {
        if (res.ok) {
          if (res.data.ok) successResponse();
          else failResponse();
        } else {
          failResponse();
        }
      })
      .catch((err) => {
        console.log(err);
        failResponse();
      });
  };

  useEffect(() => {
    setMentorData(null);
    mentorsApi
      .getMentors(mentorid)
      .then((res) => {
        if (res.ok == true) setMentorData(res.data.data[0]);
        else {
          navigation.navigate("Failure", {
            buttonTitle: "Take me to Profile",
            screenName: "UserProfile",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isFocus]);

  return (
    <View style={styles.container}>
      {mentordata ? (
        <Formik
          initialValues={{
            ...mentordata,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => updateData(values)}
        >
          {({
            errors,
            touched,
            values,
            setFieldValue,
            resetForm,
            handleSubmit,
          }) => (
            <>
              <View style={styles.detailscontainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Profile Picture
                    </Text>

                    <AppImagePicker
                      imageUri={imageUri}
                      onChangeImage={(val) => {
                        setImageUri(val);
                        console.log(val);
                      }}
                    />
                  </View>

                  <RNEInput
                    defaultValue={values?.name}
                    placeholder="Enter Name"
                    label="Name"
                    name="name"
                    bg="white"
                    onInputChange={handleChange}
                    error={errors.name}
                  />

                  <RNEInput
                    defaultValue={values?.mobile_number}
                    placeholder="Enter Mobile Number"
                    label="Mobile Number"
                    name="mobile_number"
                    bg="white"
                    onInputChange={handleChange}
                    error={errors.mobile_number}
                  />
                  <RNEInput
                    defaultValue={values?.company}
                    placeholder="Company/Organization"
                    label="Company/Organization"
                    onInputChange={handleChange}
                    bg="white"
                    name="company"
                    error={errors.company}
                  />
                  <RNEInput
                    defaultValue={values?.headline}
                    placeholder="Enter Headline"
                    label="Headline"
                    onInputChange={handleChange}
                    bg="white"
                    multiline={true}
                    name="headline"
                    error={errors.headline}
                  />

                  <RNEInput
                    defaultValue={values?.bio}
                    placeholder="Bio"
                    label="Bio"
                    onInputChange={handleChange}
                    bg="white"
                    multiline={true}
                    name="bio"
                    error={errors.bio}
                  />
                  <RNEInput
                    defaultValue={values?.linkedin_url}
                    placeholder="LinkedIn Profile URL"
                    label="LinkedIn Profile URL"
                    onInputChange={handleChange}
                    bg="white"
                    name="linkedin_url"
                    error={errors.linkedin_url}
                  />
                  <RNEInput
                    defaultValue={values?.github_url}
                    placeholder="GitHub Profile URL"
                    label="GitHub Profile URL"
                    onInputChange={handleChange}
                    bg="white"
                    name="github_url"
                    error={errors.github_url}
                  />
                  <RNEInput
                    defaultValue={values?.github_url}
                    placeholder="Instagram Profile URL"
                    label="Instagram Profile URL"
                    onInputChange={handleChange}
                    bg="white"
                    name="instagram_url"
                    error={errors.instagram_url}
                  />

                  <SkillSelect skills={values.skills} />
                </ScrollView>
              </View>

              <View style={{ marginHorizontal: 10 }}>
                <AppButton title="Save Details" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      ) : (
        <>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusbar,
  },
  detailscontainer: {
    flex: 1,
    margin: 10,
  },
});
