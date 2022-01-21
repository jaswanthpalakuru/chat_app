import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ImageonImage from "./TwoImageonImage";
import Icons from "../icons/Icons";
import ThreeImageOnImages from "./ThreeImageOnImages";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function BarMessageIconsUnread({
  name,
  unreadMessage,
  backArrowPressed = function () {
    console.log("Back Arrow Pressed");
  },
  videoPressed = function () {
    console.log("Video Pressed");
  },
  unreadMessagesPressed = function () {
    console.log("Unread Messages Pressed");
  },
}) {
  return (
    <View>
      <View style={styles.content}>
        <Icons.BackArrow onPress={backArrowPressed} />
        <ImageonImage />
        <Icons.Common name={name} onPress={videoPressed} />
      </View>
      <View style={styles.unreadView}>
        <Pressable
          style={styles.unreadMessages}
          onPress={unreadMessagesPressed}
        >
          <ThreeImageOnImages />
          <Text style={styles.text}>UNREAD MESSAGES</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  text: {
    marginHorizontal: 5,
    color: "#FFF",
    fontSize: 11,
  },
  unreadMessages: {
    backgroundColor: "#7ED3B2",
    elevation: 5,
    borderRadius: 100,
    // width: "50%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  unreadView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
