import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Icons from "../icons/Icons";

export default function Story({
  image,
  onPress = () => {
    console.log("Story Add Pressed");
  },
}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: image, height: 50, width: 50 }}
        />
        <View style={styles.addButton}>
          <Icons.AddButtonSmall backGroundColor="#437EFF" />
        </View>
      </View>
      <Text style={styles.textStyle}>Add Story</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 90,
    backgroundColor: "#FFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 100,
  },
  addButton: {
    position: "absolute",
    bottom: 0,
    right: -5,
  },
  textStyle: {
    fontWeight: "bold",
  },
});
