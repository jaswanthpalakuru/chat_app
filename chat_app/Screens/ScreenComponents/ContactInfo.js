import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ContactInfo({
  name = "Albert Jones",
  phoneNumber = "+91-8074344427",
  onPress = () => {
    console.log("Radio Button Pressed");
  },
}) {
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    setPressed(!pressed);
    onPress();
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
            height: 50,
            width: 50,
          }}
          style={styles.image}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{name}</Text>
          <Text style={{ color: "#8A8CA9" }}>{phoneNumber}</Text>
        </View>
      </View>
      <Pressable onPress={handlePress}>
        {pressed ? (
          <Ionicons name="checkmark-circle" size={24} color="#27DC8F" />
        ) : (
          <Ionicons name="radio-button-off" size={24} color="grey" />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    borderRadius: 100,
  },
});
