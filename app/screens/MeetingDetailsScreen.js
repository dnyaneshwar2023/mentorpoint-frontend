import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import RNEInput from "../components/RNEInput";
import AppButton from "../components/AppButton";
import mentorsApi from "../apis/mentors";
import useAuth from "../auth/useAuth";
export default function MeetingDetailsScreen() {
  const [meetingurl, setMeetingURL] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    mentorsApi
      .getMentors(user?._id)
      .then((res) => {
        if (res.ok) {
          setMeetingURL(res?.data?.data?.meeting_url);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    ToastAndroid.show("Done", ToastAndroid.SHORT);
  }, []);

  const handleUpdate = (values) => {
    console.log(values);
  };

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
      <Formik
        initialValues={{
          meeting_url: "",
        }}
        onSubmit={handleUpdate}
      >
        {({ handleSubmit, values, errors, handleChange }) => (
          <View>
            <RNEInput
              label="Meeting URL"
              placeholder="Enter Meeting URL"
              name="meeting_url"
              onInputChange={handleChange}
              bg="white"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
});
