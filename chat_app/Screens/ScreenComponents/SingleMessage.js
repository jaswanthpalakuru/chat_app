import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function SingleMessage({
  userName = "Jack",
  name = "mcd",
  message = "Lorem Ipsum of Lorem Ipsum.Lorem Ipsum of Lorem Ipsum.Lorem Ipsum of Lorem Ipsum.Lorem Ipsum of Lorem Ipsum.Lorem Ipsum of Lorem Ipsum.",
  time = "12:25",
  seen = false,
  friendName = "Alice mccoy",
  image1 = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) {
  return (
    <View
      style={[
        styles.container,
        { alignSelf: userName == name ? "flex-end" : "flex-start" },
      ]}
    >
      <View style={styles.text}>
        <View
          style={{
            marginBottom: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ borderRadius: 100, marginRight: 10 }}
            source={{
              uri: image1,
              height: 24,
              width: 24,
            }}
          />
          <Text style={{ fontWeight: "bold" }}>
            {userName == name ? userName : name}
          </Text>
        </View>
        <Text>{message}</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.time}>{time}</Text>
        {seen ? (
          <Ionicons name="checkmark-done" size={14} color="#34B7F1" />
        ) : (
          <Feather name="check" size={14} color="grey" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "75%",
    backgroundColor: "#FFF",
    elevation: 5,
    margin: 5,
    borderRadius: 20,
    padding: 10,
  },
  text: {
    paddingVertical: 5,
    marginVertical: 5,
    paddingLeft: 5,
    paddingRight: 15,
  },
  status: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  time: {
    marginRight: 5,
  },
});
