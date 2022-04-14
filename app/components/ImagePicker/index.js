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
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../configs/variables";

export default function AppImagePicker({ imageUri, onChangeImage }) {
  useEffect(() => {
    const requestPermission = async () => {
      const result = await ImagePicker.requestCameraPermissionsAsync();
      console.log(result.granted);
      if (!result.granted) {
        requestPermission();
      }
    };
    requestPermission();
  }, []);
  const handlePress = () => {
    console.log(imageUri);
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
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log(error);
      console.log("Error Reading Image");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.picker}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={35} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
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
  },
});
