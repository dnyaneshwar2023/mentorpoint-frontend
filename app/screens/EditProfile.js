import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppTextInput from "../components/AppInputText";
import { Input } from "react-native-elements";
import * as yup from "yup";
import { Formik } from "formik";

import { colors, statusbar } from "../configs/variables";
import RNEInput from "../components/RNEInput";
import AppButton from "../components/AppButton";
import AppImagePicker from "../components/ImagePicker";
import SkillSelect from "../components/SkillSelect";

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

export default function EditProfile() {
  const [imageUri, setImageUri] = useState(null);

  function handleChange(text) {
    console.log(text);
  }

  const handleSubmit = (values) => {
    console.log("Submission");
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          bio: "",
          email: "",
          linkedin_url: "",
          github_url: "",
          company: "",
          instagram_url: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
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
                  placeholder="Enter Name"
                  label="Name"
                  name="name"
                  bg="white"
                  onInputChange={handleChange}
                  error={errors.name}
                />

                <RNEInput
                  placeholder="Enter Mobile Number"
                  label="Mobile Number"
                  name="mobile_number"
                  bg="white"
                  onInputChange={handleChange}
                  error={errors.mobile_number}
                />
                <RNEInput
                  placeholder="Company/Organization"
                  label="Company/Organization"
                  onInputChange={handleChange}
                  bg="white"
                  name="company"
                  error={errors.company}
                />
                <RNEInput
                  placeholder="Enter Headline"
                  label="Headline"
                  onInputChange={handleChange}
                  bg="white"
                  multiline={true}
                  name="headline"
                  error={errors.headline}
                />

                <RNEInput
                  placeholder="Bio"
                  label="Bio"
                  onInputChange={handleChange}
                  bg="white"
                  multiline={true}
                  name="bio"
                  error={errors.bio}
                />
                <RNEInput
                  placeholder="LinkedIn Profile URL"
                  label="LinkedIn Profile URL"
                  onInputChange={handleChange}
                  bg="white"
                  name="linkedin_url"
                  error={errors.linkedin_url}
                />
                <RNEInput
                  placeholder="GitHub Profile URL"
                  label="GitHub Profile URL"
                  onInputChange={handleChange}
                  bg="white"
                  name="github_url"
                  error={errors.github_url}
                />
                <RNEInput
                  placeholder="Instagram Profile URL"
                  label="Instagram Profile URL"
                  onInputChange={handleChange}
                  bg="white"
                  name="instagram_url"
                  error={errors.instagram_url}
                />

                <SkillSelect />
              </ScrollView>
            </View>

            <View style={{ marginHorizontal: 10 }}>
              <AppButton title="Save Details" onPress={handleSubmit} />
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
    paddingTop: statusbar,
  },
  detailscontainer: {
    flex: 1,
    margin: 10,
  },
});
