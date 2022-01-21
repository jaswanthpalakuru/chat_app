import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Reply({
  name = "Mark Weins",
  message = "Unless you have somthing to say you liver next door to my house hai hello",
  backgroundColor = "#292941",
  borderRadius,
}) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor, borderRadius: borderRadius },
      ]}
    >
      <View style={[styles.textView]}>
        <Text style={styles.text}>{name}</Text>
        <Text numberOfLines={1} style={styles.text}>
          {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    // backgroundColor: "#292941",
    // margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 12,
  },
  textView: {
    borderLeftWidth: 2,
    borderLeftColor: "white",
    height: 35,
    padding: 5,
    justifyContent: "center",
  },
});
