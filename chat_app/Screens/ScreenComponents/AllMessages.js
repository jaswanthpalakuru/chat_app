import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import GroupChat from "../../Screens/GroupChat";

export default function MultipleChat({
  navigation,
  image = "https://picsum.photos/200/300",
  subText = "Awesome",
  name = "James",
  feeling = "Sounds Good!",
  time = "12:25",
  count = 2,
  day = "Today",
  onPress = () => {
    console.log("Pressed Multiple Chat");
    navigation.navigate("GroupChat");
  },
}) {
  const stories = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      name: "James",
      groupChat: true,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      name: "Jaswanth",
      groupChat: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      name: "Jack",
      groupChat: false,
    },
  ];
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{ uri: image, height: 50, width: 50 }}
        />
      </View>
      <View style={styles.contentOne}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.secondaryContent}>
          <Image
            style={styles.image}
            source={{ uri: image, height: 15, width: 15 }}
          />
          <Text style={styles.contentText}>{feeling}</Text>
        </View>
      </View>
      <View style={styles.contentTwo}>
        <View style={styles.number}>
          {count && <Text style={styles.numberText}>{count}</Text>}
        </View>
        <Text style={styles.contentText}>
          {day}, {time}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    // height: 100,
    // elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    // marginVertical: 5,
    // marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: 10,
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginRight: 10,
  },
  image: {
    borderRadius: 100,
  },
  contentOne: {
    padding: 5,
    flex: 2,
    alignItems: "flex-start",
  },
  contentTwo: {
    padding: 10,
    flex: 2,
    alignItems: "flex-end",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  secondaryContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentText: {
    fontSize: 12,
    color: "grey",
    marginLeft: 5,
  },
  number: {
    backgroundColor: "#7ED3B2",
    borderRadius: 100,
    paddingHorizontal: 5,
  },
  numberText: {
    color: "white",
  },
});
