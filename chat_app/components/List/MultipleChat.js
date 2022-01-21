import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import GroupChat from "../../Screens/GroupChat";
import { useNavigation } from "@react-navigation/native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialIcons } from "@expo/vector-icons";
import Icons from "../icons/Icons";

export default function MultipleChat({
  // navigation,
  image = "https://picsum.photos/200/300",
  subText = "Awesome",
  userName = "User",
  name = "James",
  feeling = "Sounds Good!",
  time = "12:25",
  count = 2,
  day = "Today",
  onPress = () => {
    console.log("Pressed Multiple Chat");
    navigation.navigate("GroupChat");
  },
  addGroupCall = () => {
    console.log("Add Group Call Pressed");
  },
  deletePress = () => {
    console.log("Pressed Delete");
  },
  pinPress = () => {
    console.log("Pressed pin");
  },
  mutePress = () => {
    console.log("Pressed mute");
  },

  groupChat,
}) {
  const navigation = useNavigation();
  function navigateGroupChat() {
    navigation.navigate("GroupChat", {
      name: name,
      groupChat: groupChat,
      userName: userName,
    });
  }
  const Separator = () => <View style={styles.itemSeparator} />;
  const LeftSwipeActions = () => {
    return (
      <Pressable onPress={addGroupCall} style={styles.leftSwipePressable}>
        <Text style={styles.leftSwipeText}>Arrange a group call</Text>
      </Pressable>
    );
  };
  const rightSwipeActions = () => {
    return (
      <View style={styles.rightSwipePressable}>
        <Icons.PinButton color="#7ED3B2" onPress={pinPress} />
        <Icons.MuteButton onPress={mutePress} />
        <Icons.Common name="trash" color="#F53D5B" onPress={deletePress} />
        {/* <MaterialIcons
          name="delete"
          size={24}
          color="black"
          style={{
            color: "#1b1a17",
            // paddingHorizontal: 10,
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}
        /> */}
      </View>
    );
  };
  const swipeFromLeftOpen = () => {
    // alert("Swipe from left");
    // console.log("Hello");
  };
  const swipeFromRightOpen = () => {
    // alert("Swipe from right");
    // console.log("Hello");
  };
  return (
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={swipeFromRightOpen}
      onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <Pressable onPress={navigateGroupChat} style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{ uri: image, height: 50, width: 50 }}
          />
        </View>
        <View style={styles.contentOne}>
          <Text style={styles.name}>{userName}</Text>
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
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    // height: 100,
    elevation: 1,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    // marginVertical: 5,
    // marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  leftSwipePressable: {
    backgroundColor: "#7ED3B2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    height: 50,
    marginTop: 15,
  },
  leftSwipeText: {
    color: "#FFF",
    paddingHorizontal: 10,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  rightSwipePressable: {
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 10,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
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
