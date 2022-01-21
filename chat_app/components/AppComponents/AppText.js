import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AppText({ name, onPress, style }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={style}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
