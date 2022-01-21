import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function GroupChatImage({
  userImage,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 45,
          width: 45,
          paddingHorizontal: 5,
        }}
      >
        <Image
          style={styles.image1}
          source={{
            uri: image1,
            height: 15,
            width: 15,
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: image2,
            height: 10,
            width: 10,
          }}
        />
        <Image
          style={styles.image1}
          source={{
            uri: image3,
            height: 20,
            width: 20,
          }}
        />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: userImage,
          height: 45,
          width: 45,
        }}
      />
      <View
        style={{
          height: 45,
          width: 45,
          paddingHorizontal: 5,
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: image4,
            height: 20,
            width: 20,
          }}
        />
        <Image
          style={styles.image1}
          source={{
            uri: image5,
            height: 10,
            width: 10,
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: image6,
            height: 15,
            width: 15,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
  },
  image1: {
    borderRadius: 100,
    alignSelf: "flex-end",
  },
});
