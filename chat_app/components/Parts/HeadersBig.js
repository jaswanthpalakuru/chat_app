import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function HeadersBig() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Chats</Text>
      <Text style={styles.textTwo}>Manage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  textOne: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  textTwo: {
    fontWeight: "bold",
    color: "black",
    fontSize: 15,
  },
});
