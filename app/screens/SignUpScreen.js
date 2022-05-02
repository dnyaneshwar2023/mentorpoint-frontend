import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { statusbar } from "../configs/variables";
import { Formik } from "formik";
import * as yup from "yup";
import RNEInput from "../components/RNEInput";
import AppButton from "../components/AppButton";
import authApi from "../apis/auth";
import useAuth from "../auth/useAuth";
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
  const [wrong, setWrong] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { logIn, user } = useAuth();
  const handleSignup = (values) => {
    setLoading(true);
    authApi
      .signUp(values)
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          if (res.data.ok == 1) {
            const token = res.data.data;
            console.log(token);
            logIn(token);
          } else {
            console.log(res.data);
            setWrong(true);
            setError(res.data.err);
          }
        } else {
          console.log(res.data);
          setWrong(true);
          setError(res.data.err);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

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
        {wrong && (
          <View
            style={{
              marginHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {error}
            </Text>
          </View>
        )}
        <View style={styles.userdetailscontainer}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
            }}
            onSubmit={handleSignup}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, values, errors, touched }) => (
              <>
                <View>
                  <RNEInput
                    placeholder="Your Name"
                    onInputChange={() => {}}
                    bg="white"
                    name="name"
                    error={touched.name && errors.name}
                  />
                  <RNEInput
                    placeholder="E-mail"
                    onInputChange={() => {}}
                    bg="white"
                    name="email"
                    error={touched.email && errors.email}
                  />
                  <RNEInput
                    placeholder="Password"
                    onInputChange={() => {}}
                    bg="white"
                    name="password"
                    error={touched.password && errors.password}
                  />
                </View>
                {loading && (
                  <View
                    style={{
                      alignSelf: "flex-start",
                      marginHorizontal: 10,
                    }}
                  >
                    <ActivityIndicator size="large" color="#0000ff" />
                  </View>
                )}

                <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                  <AppButton
                    title="Sign Up"
                    onPress={handleSubmit}
                    buttonStyles={{
                      paddingHorizontal: 10,
                      borderRadius: 5,
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
