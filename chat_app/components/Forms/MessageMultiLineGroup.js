import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function MessageMultiLineGrouup({
  message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  time = "12:25",
  seen = false,
  image = "https://picsum.photos/seed/picsum/200/300",
  name = "James",
  numberofLines,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.detailView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{ uri: image, height: 24, width: 24 }}
          />
          <Text style={styles.text}>{name}</Text>
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
      <View style={styles.messageView}>
        <Text numberOfLines={numberofLines}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    elevation: 5,
    borderRadius: 20,
    padding: 15,
    // margin: 10,
  },
  detailView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  imageView: {
    flexDirection: "row",
    flex: 1,
    fontSize: 12,
    alignItems: "center",
  },
  status: {
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    marginRight: 10,
    fontSize: 12,
    color: "grey",
  },
  image: {
    borderRadius: 100,
    marginRight: 5,
  },
  text: {
    fontWeight: "bold",
  },
});
