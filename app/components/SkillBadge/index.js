import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Badge } from "react-native-elements";
import { colors } from "../../configs/variables";
export default function SkillBadge({ skill }) {
  return (
    <View style={styles.container}>
      <Badge
        value={skill}
        badgeStyle={{
          borderRadius: 3,
          height: 30,
          paddingHorizontal: 5,
          backgroundColor: colors.primary,
        }}
        textStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          marginRight: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
  },
});
