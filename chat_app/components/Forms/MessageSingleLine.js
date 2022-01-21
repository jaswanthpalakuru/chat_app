import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function MessageSingleLine({
  message = "Lorem Ipsum of Lorem Ipsum.Lorem Ipsum of Lorem Ipsum.Lorem Ipsum of Lorem Ipsum.Lorem Ipsum of Lorem Ipsum.Lorem Ipsum of Lorem Ipsum.",
  time = "12:25",
  seen = false,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text numberOfLines={1}>{message}</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.time}>{time}</Text>
        {seen ? (
          <Ionicons name="checkmark-done" size={14} color="#34B7F1" />
        ) : (
          <Feather name="check" size={14} color="grey" />
        )}
      </View>
      {/* <View style={styles.status}>
        <Text style={styles.time}>{time}</Text>
        {seen ? (
          <Ionicons name="checkmark-done" size={14} color="#34B7F1" />
        ) : (
          <Feather name="check" size={14} color="grey" />
        )}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 50,
    backgroundColor: "#FFF",
    borderRadius: 20,
    elevation: 5,
    // margin: 5,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    width: "80%",
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    marginRight: 5,
  },
});
