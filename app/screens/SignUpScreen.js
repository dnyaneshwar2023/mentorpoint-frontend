import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { statusbar } from "../configs/variables";
import { Formik } from "formik";
import * as yup from "yup";
import RNEInput from "../components/RNEInput";
import AppButton from "../components/AppButton";
import GoogleButton from "react-google-button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
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
  name: yup.string().required(),
});

export default function SignUpScreen({ navigation }) {
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => (
            <CardItem key={index} image={item.image} />
          ))}
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            Sign Up
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
                    placeholder="Your Name"
                    onInputChange={() => {}}
                    bg="white"
                    name="name"
                  />
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

                <View style={{ paddingHorizontal: 10, marginTop: -30 }}>
                  <AppButton
                    title="Sign Up"
                    onPress={() => {}}
                    buttonStyles={{
                      paddingHorizontal: 10,
                      borderRadius: 5,
                    }}
                  />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <AppButton
                    title="Sign In Instead"
                    onPress={() => {
                      navigation.navigate("Login");
                    }}
                    buttonStyles={{
                      paddingHorizontal: 10,
                      backgroundColor: "white",
                      borderColor: "black",
                      borderRadius: 5,
                      borderWidth: 2,
                    }}
                    textStyle={{
                      color: "black",
                    }}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
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
