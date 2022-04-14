import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { statusbar } from "../configs/variables";
import RNEInput from "../components/RNEInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as yup from "yup";
const data = [
  {
    id: 1,
    image: require("../images/hiring.png"),
  },
  {
    id: 2,
    image: require("../images/step-up.png"),
  },
  {
    id: 2,
    image: require("../images/meeting.png"),
  },
];

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function LoginScreen() {
  const CardItem = ({ image }) => {
    return (
      <View
        style={{
          borderRadius: 5,
          borderColor: "black",
          borderWidth: 1,
          marginHorizontal: 10,
        }}
      >
        <Image
          source={image}
          style={{
            width: 300,
            height: 200,
            resizeMode: "center",
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <ScrollView horizontal>
          {data.map((item, index) => (
            <CardItem key={index} image={item.image} />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          Let's Get Started
        </Text>
      </View>
      <View style={styles.userdetailscontainer}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <View>
                <RNEInput
                  placeholder="E-mail"
                  onInputChange={() => {}}
                  bg="white"
                  name="email"
                />
                <RNEInput
                  placeholder="Password"
                  onInputChange={() => {}}
                  bg="white"
                  name="password"
                />
              </View>

              <View style={{ paddingHorizontal: 10 }}>
                <AppButton
                  title="Sign In"
                  onPress={() => {}}
                  buttonStyles={{
                    paddingHorizontal: 10,
                  }}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusbar,
  },
  imagecontainer: {
    margin: 10,
    flexDirection: "row",
  },
  userdetailscontainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
