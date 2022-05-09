import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { launchImageLibrary } from "react-native-image-picker";
import { colors } from "../../configs/variables";

export default function AppImagePicker({ imageUri, onChangeImage }) {
  useEffect(() => {
    // const requestPermission = async () => {
    //   const result = await ImagePicker.requestCameraPermissionsAsync();
    //   console.log(result.granted);
    //   if (!result.granted) {
    //     requestPermission();
    //   }
    // };
    // requestPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete Image", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        {
          text: "No",
        },
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: "photo",
      });
      if (!result.didCancel) {
        onChangeImage(result.assets[0]);
      }
    } catch (error) {
      console.log(error);
      console.log("Error Reading Image");
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={styles.picker}>
        <TouchableWithoutFeedback onPress={handlePress}>
          {imageUri == null ? (
            <MaterialCommunityIcons name="camera" size={35} />
          ) : (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}
        </TouchableWithoutFeedback>
      </View>

      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        {imageUri && (
          <TouchableWithoutFeedback onPress={handlePress}>
            <MaterialCommunityIcons name="delete" size={30} color="red" />
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
  },
  picker: {
    width: 100,
    height: 100,
    backgroundColor: colors.lightgrey,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
