import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";

export default function DatePicker() {
  return (
    <View>
      <View>
        <Modal isVisible={true}>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
