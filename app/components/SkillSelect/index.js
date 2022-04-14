import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../configs/variables";
const skills = [
  // this is the parent or 'item'
  {
    name: "Skills",
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: "C++",
        id: 10,
      },
      {
        name: "Java",
        id: 17,
      },
      {
        name: "Python",
        id: 13,
      },
      {
        name: "Javascript",
        id: 14,
      },
      {
        name: "Competitive Programming",
        id: 15,
      },
      {
        name: "Full Stack Devlopment",
        id: 16,
      },
      {
        name: "Frontend",
        id: 21,
      },
      {
        name: "Backend",
      },
      {
        name: "DevOps",
        id: 20,
      },
      {
        name: "Web3",
        id: 18,
      },
      {
        name: "AI/ML",
        id: 19,
      },
    ],
  },
];

export default function SkillSelect() {
  const [selectedOptions, setSelectedOptions] = useState(["C++"]);
  const [items, setItems] = useState(skills);

  const handleAddSearchTerm = (searchTerm) => {
    const newItem = { name: searchTerm };
    var seleted = selectedOptions;
    seleted = seleted.concat(newItem.name);
    setSelectedOptions(seleted);
    skills[0].children = skills[0].children.concat(newItem);
    setItems(skills);
  };

  const searchAdornment = (searchTerm) => {
    return searchTerm.length ? (
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => handleAddSearchTerm(searchTerm)}
      >
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <MaterialIcons name="library-add" size={24} color="black" />
        </View>
      </TouchableOpacity>
    ) : null;
  };

  const noResult = () => {
    return (
      <>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Text style={{ fontWeight: "700" }}>
            Not found in the list, Click Plus icon in right to add it directly.
          </Text>
        </View>
      </>
    );
  };

  return (
    <View>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Skills
        </Text>
      </View>
      <View style={{}}>
        <SectionedMultiSelect
          items={items}
          IconRenderer={Icon}
          uniqueKey="name"
          subKey="children"
          selectText="Choose Skills"
          showDropDowns={true}
          readOnlyHeadings={true}
          showCancelButton
          onSelectedItemsChange={(items) => {
            console.log(items);
            setSelectedOptions(items);
          }}
          searchAdornment={(searchTerm) => searchAdornment(searchTerm)}
          selectedItems={selectedOptions}
          styles={{
            container: {
              backgroundColor: "white",
              padding: 10,
            },
            selectToggle: {
              padding: 10,
              backgroundColor: "white",
              marginHorizontal: 10,
              marginVertical: 10,
              borderRadius: 5,
              borderColor: colors.grey,
              borderWidth: 2,
            },
            chipsWrapper: {
              marginHorizontal: 10,
            },
            chipContainer: {
              backgroundColor: "white",

              borderRadius: 5,
            },
            chipText: {
              color: "blue",
              fontWeight: "700",
            },
            chipIcon: {},
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
