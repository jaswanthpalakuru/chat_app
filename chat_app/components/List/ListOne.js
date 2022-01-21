import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icons from "../icons/Icons";

export default function ListOne({
  name = "Andreas",
  feeling = "Sounds Good!",
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.textFeeling}>{feeling}</Text>
      </View>
      <View>
        <Icons.RightArrow onPress={() => console.log("Pressed")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 100,
    backgroundColor: "#FFF",
    elevation: 5,
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
  },
  name: {
    color: "grey",
    fontSize: 12,
  },
  textFeeling: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textView: {
    justifyContent: "space-between",
  },
});
