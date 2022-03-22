import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Badge } from "react-native-elements";
import { colors } from "../../configs/variables";
export default function SkillBadge({ skill, style }) {
  return (
    <View style={styles.container}>
      <Badge
        value={skill}
        badgeStyle={[
          {
            borderRadius: 3,
            height: 30,
            paddingHorizontal: 5,
            backgroundColor: colors.primary,
          },
          style?.badgeStyle,
        ]}
        textStyle={[
          {
            fontSize: 14,
          },
          style?.textStyle,
        ]}
        containerStyle={{
          marginRight: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
  },
});
