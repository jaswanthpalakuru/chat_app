import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageonImage from "./TwoImageonImage";
import Icons from "../icons/Icons";

export default function BarMessage({
  name,
  backArrowPress = () => {
    console.log("Back Arrow Pressed");
  },
  chatIconPress = () => {
    console.log("Chat Icon Pressed");
  },
}) {
  return (
    <View style={styles.container}>
      <Icons.BackArrow onPress={backArrowPress} />
      <ImageonImage />
      <Icons.Common name={name} onPress={chatIconPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
});
