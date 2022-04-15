import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import SkillInput from "../SkillInput";
import { colors } from "../../configs/variables";
import AppButton from "../AppButton";

export default function SkillSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [skill, setSkill] = useState("");
  const handleAddSkill = () => {
    console.log(skill);
    if (skill.length > 0) setSelectedOptions(selectedOptions.concat(skill));
  };
  const handleDeleteSkill = (skillToDelete) => {
    setSelectedOptions(selectedOptions.filter((item) => item != skillToDelete));
  };
  return (
    <>
      <View>
        <View style={styles.inputs}>
          <View
            style={{
              flex: 1,
            }}
          >
            <SkillInput
              label="Skills"
              name="skills"
              placeholder="Add Skills"
              bg="white"
              onInputChange={(value) => {
                setSkill(value);
                console.log(skill);
              }}
            />
          </View>
          <View>
            <AppButton
              title="Add"
              buttonStyles={{
                paddingVertical: 10,
                borderRadius: 5,
              }}
              onPress={() => handleAddSkill()}
            />
          </View>
        </View>

        <View style={styles.chips}>
          {selectedOptions.map((item) => {
            return (
              <View key={item}>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: "white",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: colors.grey,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => handleDeleteSkill(item)}>
                      <View
                        style={{
                          paddingLeft: 10,
                        }}
                      >
                        <MaterialCommunityIcons
                          name="delete"
                          size={20}
                          color="red"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputs: {
    flexDirection: "row",
    alignItems: "center",
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
