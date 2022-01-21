import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function TwoImageonImage({
  image1 = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/matching-replacing-mixing-colors/jcr_content/main-pars/before_and_after/image-after/match-outcome3.png",
  image2 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image1,
        }}
      />
      <Image
        style={[styles.image, styles.secondImage]}
        source={{
          uri: image2,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 60,
    overflow: "hidden",
  },
  image: {
    borderRadius: 100,
    height: 40,
    width: 40,
  },
  secondImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
});
