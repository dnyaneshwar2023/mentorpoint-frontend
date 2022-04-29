import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { statusbar } from "../configs/variables";
import { Formik } from "formik";
import * as yup from "yup";
import RNEInput from "../components/RNEInput";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import android from "../firebase/android";

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

export default function LoginScreen({ navigation }) {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: android.androidClientID,
    expoClientId: android.webClientId,
    webClientId: android.webClientId,
  });
  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      setAccessToken(authentication.accessToken);
    }
  }, [response]);
  async function getUserData() {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      console.log(data);
      auth
        .signInAnonymously(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setUserInfo(data);
    });
  }

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
              <View style={styles.loginbuttons}>
                <View style={{ paddingHorizontal: 10 }}>
                  <AppButton
                    title="Sign In"
                    onPress={() => {}}
                    buttonStyles={{
                      paddingHorizontal: 30,
                      borderRadius: 5,
                      paddingVertical: 10,
                    }}
                  />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <AppButton
                    title="Sign Up"
                    onPress={() => {
                      navigation.navigate("Signup")
                    }}
                    buttonStyles={{
                      paddingHorizontal: 30,
                      borderRadius: 5,
                      paddingVertical: 10,
                    }}
                  />
                </View>
              </View>

              <View style={{ paddingHorizontal: 10 }}>
                <AppButton
                  title="Continue With Google"
                  onPress={() => {
                    promptAsync();
                  }}
                  buttonStyles={{
                    paddingHorizontal: 10,
                    backgroundColor: "white",
                    borderRadius: 5,
                    borderColor: "black",
                    borderWidth: 2,
                  }}
                  textStyle={{
                    color: "black",
                  }}
                  IconComponent={
                    <AntDesign name="google" size={25} color="red" />
                  }
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
    marginTop: 10,
    paddingHorizontal: 20,
  },
  loginbuttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -30,
  },
});
