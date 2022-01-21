import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThreeImagesOnImages from "../../components/Parts/ThreeImageOnImages";

export default function UnreadMessages({
  number = 12,
  name1 = "Jaswanth",
  name2 = "Zippy",
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <ThreeImagesOnImages />
      </View>
      <View style={{ overflow: "hidden" }}>
        <Text numberOfLines={1} style={styles.text}>
          You have {number} of Unread Messages from
        </Text>
        <Text numberOfLines={1} style={styles.text}>
          {name1}, {name2} and others...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    elevation: 5,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    color: "grey",
  },
  imageView: {
    marginRight: 10,
  },
});
