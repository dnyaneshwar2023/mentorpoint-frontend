import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import RNEInput from "../components/RNEInput";
import AppButton from "../components/AppButton";
import mentorsApi from "../apis/mentors";
import useAuth from "../auth/useAuth";
import { useIsFocused } from "@react-navigation/native";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  meetingurl: yup.string().url().trim(),
});

export default function MeetingDetailsScreen() {
  const [meetingurl, setMeetingURL] = useState(null);
  const focus = useIsFocused();
  const [loaded, setLoaded] = useState(false);
  const { user } = useAuth();
  const handleUpdateURL = (values) => {
    setMeetingURL(values.meeting_url);
    if (values?.meeting_url?.length <= 0) {
      ToastAndroid.show("Empty Meeting URL", ToastAndroid.SHORT);
      return null;
    }
    mentorsApi
      .updateMentor({ _id: user?._id, meetingUrl: values?.meeting_url })
      .then((res) => {
        if (res.ok) {
          //console.log(res.data);
          ToastAndroid.show("Meeting Details Updated", ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(
            "Something Went Wrong,Please Try Again",
            ToastAndroid.SHORT
          );
        }
      })
      .catch((err) => {
        ToastAndroid(
          "Something Went Wrong,Please Try Again",
          ToastAndroid.SHORT
        );
      });
  };
  useEffect(() => {
    if (!focus) return;
    setLoaded(false);
    mentorsApi
      .getMentors({ _id: user?._id })
      .then((res) => {
        if (res.ok) {
          setMeetingURL(res?.data?.data[0].meetingUrl);
        }
      })
      .catch((err) => {
        ToastAndroid(
          "Something Went Wrong,Please Try Again",
          ToastAndroid.SHORT
        );
      });
    setLoaded(true);
  }, [focus]);

  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          paddingVertical: 10,
          borderBottomColor: "blue",
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            lineHeight: 25,
          }}
        >
          Your Meeting URL will be shared with candidates for a particular
          session. Though you can share any changes for the sessions through
          chats.
        </Text>
      </View>
      {loaded ? (
        <Formik
          initialValues={{
            meeting_url: meetingurl,
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdateURL}
        >
          {({ handleSubmit, values, errors, handleChange }) => (
            <View>
              <RNEInput
                defaultValue={meetingurl}
                label="Meeting URL"
                placeholder="Enter Meeting URL"
                name="meeting_url"
                onInputChange={handleChange}
                bg="white"
                error={errors?.meeting_url}
              />
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <AppButton title="Update" onPress={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
});
