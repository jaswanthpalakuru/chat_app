import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import AppText from "../AppComponents/AppText";

export default function HeadersBig({ onPress }) {
  return (
    <View style={styles.container}>
      {/* <AppText name="Chats" style={styles.textOne} /> */}
      <Text style={styles.textOne}>Chats</Text>
      <Pressable
        onPress={() => {
          console.log("Manage Pressed");
          onPress;
        }}
      >
        <Text style={styles.textTwo}>manage</Text>
      </Pressable>
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
    fontSize: 25,
    fontWeight: "bold",
    color: "grey",
  },
  textTwo: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 15,
  },
});
