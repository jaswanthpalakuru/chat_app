import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function BarSearch({
  onChangeText = (text) => {
    console.log(text);
  },
}) {
  return (
    <View style={styles.container}>
      {/* <AntDesign name="search1" size={15} color="black" /> */}
      <FontAwesome name="search" size={20} color="grey" />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 50,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#FFF",
    elevation: 5,
    borderRadius: 50,
    marginHorizontal: 10,
    alignItems: "center",
  },
  textInput: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 5,
    marginBottom: 0,
    flex: 1,
    borderLeftWidth: 1,
    paddingHorizontal: 5,
    borderColor: "#FFB0FE",
    // height: 20,
  },
});
