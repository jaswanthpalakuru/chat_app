import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function UpArrow({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.upArrowContainer}>
      <Entypo name="chevron-up" size={20} color="black" />
    </Pressable>
  );
}

function RightArrow({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.rightArrowContainer}>
      <AntDesign name="right" size={15} color="black" />
    </Pressable>
  );
}
function Success({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name="checkcircle" size={24} color="#27DC8F" />
      {/* <AntDesign name="checkcircleo" size={24} color="black" /> */}
    </Pressable>
  );
}

function Sticker({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons
        name="sticker-circle-outline"
        size={24}
        color="black"
      />
    </Pressable>
  );
}

function Search({ onPress, backGroundColor }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.searchContainer,
        backGroundColor ? styles.searchWithBgc : styles.searchWithOutBgc,
        { backgroundColor: backGroundColor ? backGroundColor : "white" },
      ]}
    >
      <Feather
        name="search"
        size={backGroundColor ? 20 : 15}
        color={backGroundColor ? "white" : "black"}
      />
    </Pressable>
  );
}
function AddButton({ onPress, backGroundColor, size }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.addButtonContainer,
        backGroundColor ? styles.addButtonWithBgc : styles.addButtonWithOutBgc,
        // styles.addButtonWithOutBgc,
        { backgroundColor: backGroundColor ? backGroundColor : "white" },
      ]}
    >
      <Ionicons
        name="add"
        size={backGroundColor ? 30 : 20}
        // size={20}
        color={backGroundColor ? "white" : "black"}
      />
    </Pressable>
  );
}
function AddButtonSmall({ onPress, backGroundColor }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.addButtonContainer,
        // backGroundColor ? styles.addButtonWithOutBgc : styles.addButtonWithOutBgc,
        styles.addButtonWithOutBgc,
        { backgroundColor: backGroundColor ? backGroundColor : "white" },
      ]}
    >
      <Ionicons
        name="add"
        size={backGroundColor ? 20 : 15}
        // size={20}
        color={backGroundColor ? "white" : "black"}
      />
    </Pressable>
  );
}

function More({ onPress }) {
  return (
    <Pressable style={styles.moreContainer} onPress={onPress}>
      <Feather name="more-horizontal" size={24} color="#D7AEF3" />
    </Pressable>
  );
}
function EditIcons({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.editIconContainer}>
      <MaterialIcons name="edit" size={16} color="#8A8CA9" />
    </Pressable>
  );
}

function PinButton({ onPress, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.commonButtonContainer, { backgroundColor: color }]}
    >
      <Entypo name="pin" size={24} color="white" />
    </Pressable>
  );
}

function BackArrow({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name="arrowleft" size={30} color="black" />
    </Pressable>
  );
}

function CallButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.callButtonContainer}>
      <Ionicons name="call" size={24} color="white" />
    </Pressable>
  );
}

function Common({ onPress, name, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.commonButtonContainer, { backgroundColor: color }]}
    >
      <Ionicons name={name} size={24} color="white" />
    </Pressable>
  );
}
function Send({ onPress, size }) {
  return (
    <Pressable onPress={onPress} style={styles.sendContainer}>
      <Ionicons name="send" size={24} color="#D7AEF3" />
    </Pressable>
  );
}

function MuteButton({ onPress }) {
  return (
    <Pressable style={styles.commonButtonContainer} onPress={onPress}>
      <Octicons name="mute" size={24} color="white" />
    </Pressable>
  );
}

function CloseButton({ onPress, backGroundColor }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.closeButtomContainer,
        backGroundColor
          ? styles.closeButtomWithBgc
          : styles.closeButtomWithoutBgc,
        { backgroundColor: backGroundColor },
      ]}
    >
      <AntDesign name="close" size={backGroundColor ? 15 : 24} color="black" />
    </Pressable>
  );
}

function Discover({ onPress, name }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} size={50} color="#D7AEF3" />
    </Pressable>
  );
}

function DownArrow({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.downArrowContainer}>
      <Entypo name="chevron-down" size={20} color="black" />
    </Pressable>
  );
}

function Image({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.imageContainer}>
      <MaterialCommunityIcons name="image-filter-hdr" size={20} color="black" />
    </Pressable>
  );
}

function User({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.userContainer}>
      <FontAwesome5 name="user-alt" size={24} color="white" />
    </Pressable>
  );
}

export default {
  AddButton,
  AddButtonSmall,
  BackArrow,
  RightArrow,
  CallButton,
  CloseButton,
  Common,
  Discover,
  DownArrow,
  EditIcons,
  Image,
  More,
  MuteButton,
  PinButton,
  Search,
  Send,
  Sticker,
  Success,
  UpArrow,
  User,
};

const styles = StyleSheet.create({
  addButtonContainer: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonWithOutBgc: {
    elevation: 5,
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonWithBgc: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  callButtonContainer: {
    backgroundColor: "#7ED3B2",
    height: 40,
    width: 40,
    borderRadius: 100,
    // padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  commonButtonContainer: {
    backgroundColor: "#D7AEF3",
    height: 40,
    width: 40,
    borderRadius: 100,
    // padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtomContainer: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtomWithBgc: {
    elevation: 5,
    height: 24,
    width: 24,
  },
  closeButtomWithoutBgc: {
    // elevation: backGroundColor && 5,
    height: 40,
    width: 40,
  },
  downArrowContainer: {
    height: 24,
    width: 24,
    backgroundColor: "#FFF",
    elevation: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  editIconContainer: {
    height: 24,
    width: 24,
    backgroundColor: "#FFF",
    borderRadius: 100,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  imageContainer: {
    height: 24,
    width: 24,
    backgroundColor: "#FFF",
    borderRadius: 100,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  moreContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#FFF",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  searchContainer: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  searchWithOutBgc: {
    elevation: 5,
    height: 24,
    width: 24,
  },
  searchWithBgc: {
    height: 40,
    width: 40,
  },
  sendContainer: {
    backgroundColor: "white",
    elevation: 5,
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
  },
  upArrowContainer: {
    height: 24,
    width: 24,
    backgroundColor: "#FFF",
    elevation: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  userContainer: {
    backgroundColor: "#EBEBF1",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
  },
  rightArrowContainer: {
    height: 24,
    width: 24,
    backgroundColor: "#F7F7F9",
    elevation: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  withBgc: {
    height: 40,
    width: 40,
  },
});
