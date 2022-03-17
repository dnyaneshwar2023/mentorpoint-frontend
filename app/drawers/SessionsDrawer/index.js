import React, { useRef } from "react";
import { View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import AppButton from "../../components/AppButton";
import { colors } from "../../configs/variables";

const SessionsDrawer = React.forwardRef((props, ref) => {
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
        height={500}
        openDuration={150}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <AppButton title="Check Availability" />
        <AppButton title="Check Availability" />
        <AppButton title="Check Availability" />
        <AppButton title="Check Availability" />
        <AppButton title="Check Availability" />
        <AppButton title="Check Availability" />
      </RBSheet>
    </View>
  );
});

export default SessionsDrawer;
