import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function MessageMultiLine({
  message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  time = "12:25",
  seen = true,
  backgroundColor,
}) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor, elevation: backgroundColor && 5 },
      ]}
    >
      <View>
        <Text
          style={
            backgroundColor
              ? styles.textColorWithBgc
              : styles.textColorWithoutBgc
          }
        >
          {message}
        </Text>
      </View>
      <View style={styles.status}>
        <Text
          style={[
            styles.time,
            backgroundColor
              ? styles.textColorWithBgc
              : styles.textColorWithoutBgc,
          ]}
        >
          {time}
        </Text>
        {seen ? (
          <Ionicons name="checkmark-done" size={14} color="#34B7F1" />
        ) : (
          <Feather
            name="check"
            size={14}
            color={backgroundColor ? "grey" : "white"}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin: 10,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#FFF",
    // elevation: 5,
    padding: 10,
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
  },
  textColorWithBgc: {
    color: "black",
  },
  textColorWithoutBgc: {
    color: "white",
  },
});
