import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SingleMessage from "./SingleMessage";

export default function Messages({ username = "User", item }) {
  return (
    <SingleMessage
      message={item.message}
      username={username}
      name={item.name}
    />
  );
}

const styles = StyleSheet.create({});
