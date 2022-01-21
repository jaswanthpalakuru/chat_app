import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ContactInfo from "./ScreenComponents/ContactInfo";
import { ScrollView } from "react-native-gesture-handler";

export default function Contacts({
  letter = "A",
  onPress = () => {
    console.log("Continue Pressed");
  },
}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <View style={styles.search}>
          <Ionicons name="search" size={20} color="#8A8CA9" />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor="#8A8CA9"
          />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Add contacts</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{letter}</Text>
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
        </ScrollView>
      </View>
      <Pressable onPress={onPress} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  search: {
    backgroundColor: "#F7F7F9",
    elevation: 5,
    width: "60%",
    borderRadius: 50,
    padding: 10,
    marginLeft: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    // fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
    flex: 1,
  },
  continueButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    paddingVertical: 15,
    backgroundColor: "#FFB0FE",
    borderRadius: 50,
    paddingHorizontal: 40,
  },
  continueButtonText: {
    color: "#FFF",
    fontSize: 15,
  },
});
