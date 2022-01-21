import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function PlayGround({ ...textInputProps }) {
  return (
    <View>
      <TextInput {...textInputProps} />
    </View>
  );
}

const styles = StyleSheet.create({});
