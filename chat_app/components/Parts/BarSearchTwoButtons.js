import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icons from "../icons/Icons";
import BarSearch from "./BarSearch";

export default function BarSearchTwoButtons() {
  return (
    <View style={styles.container}>
      <View>
        <Icons.BackArrow
          onPress={() => {
            console.log("Back Button Pressed");
          }}
        />
      </View>
      <View style={styles.search}>
        <BarSearch onChangeText={(text) => console.log(text)} />
      </View>
      <View>
        <Icons.Common
          name="chatbubble-ellipses"
          onPress={() => {
            console.log("Chat Button Pressed");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  search: {
    flex: 1,
  },
});
