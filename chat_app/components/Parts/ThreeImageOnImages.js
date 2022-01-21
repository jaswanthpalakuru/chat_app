import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ImageonImage({
  image1 = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/matching-replacing-mixing-colors/jcr_content/main-pars/before_and_after/image-after/match-outcome3.png",
  image2 = "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Hindu-Shiva-God-Wallpaper-Free-Download.jpg",
  image3 = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/matching-replacing-mixing-colors/jcr_content/main-pars/before_and_after/image-after/match-outcome3.png",
}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image1,
          height: 25,
          width: 25,
        }}
      />
      <Image
        style={[styles.image, styles.secondImage]}
        source={{
          uri: image2,
        }}
      />
      <Image
        style={[styles.image, styles.ThirdImage]}
        source={{
          uri: image1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 55,
    overflow: "hidden",
  },
  image: {
    borderRadius: 100,
    height: 25,
    width: 25,
  },
  secondImage: {
    position: "absolute",
    bottom: 0,
    right: 15,
    // zIndex: -1,
  },
  ThirdImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    // zIndex: -1,
  },
});
