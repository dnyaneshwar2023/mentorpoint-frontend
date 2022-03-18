import React, { useRef } from "react";
import {
  View,
  Button,
  ScrollView,
  FlatList,
  Dimensions,
  useWindowDimensions,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import AppButton from "../../components/AppButton";
import SessionItem from "../../components/SessionItem";
import { colors } from "../../configs/variables";

const SessionsDrawer = React.forwardRef((props, ref) => {
  const { height, width } = Dimensions.get("window");

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d75",
      title: "Third Item",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RBSheet
        ref={ref}
        height={height * 0.7}
        openDuration={150}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons
            name="drag-horizontal-variant"
            size={24}
            color="black"
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {" "}
            List of the Sessions
          </Text>
        </View>
        <FlatList data={data} renderItem={(item) => <SessionItem />} />
      </RBSheet>
    </View>
  );
});

export default SessionsDrawer;
