import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icons from "../icons/Icons";

export default function BarsStandard({
  status = "Forward",
  backArrowPressed = () => {
    console.log("Back Button Pressed"); //TODO
  },
  chatButtonPressed = () => {
    console.log("Chat Button Pressed");
  },
}) {
  return (
    <View style={styles.container}>
      <View>
        <Icons.BackArrow onPress={backArrowPressed} />
      </View>
      <Text>{status}</Text>
      <View>
        <Icons.Common name="chatbubble-ellipses" onPress={chatButtonPressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    // borderBottomWidth: 1,
  },
});
