import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Story({
  image,
  name = "Jackson",
  onPress = () => {
    console.log("User Story Pressed");
  },
}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: image, height: 50, width: 50 }}
        />
      </View>
      <Text style={styles.textStyle}>{name}</Text>
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
    marginHorizontal: 5,
  },
  image: {
    borderRadius: 100,
  },
  textStyle: {
    fontWeight: "bold",
  },
});
