import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Story from "../components/Parts/Story";
import StoryScrollComponent from "./ScreenComponents/StoryScrollComponent";
import UnreadMessages from "./ScreenComponents/UnreadMessages";
import UserDetails from "./ScreenComponents/UserDetails";
import HeadersBig from "../components/Parts/HeadersBig";
import MultipleChat from "../components/List/MultipleChat";
import Swipeable from "react-native-gesture-handler/Swipeable";
import GroupChat from "./GroupChat";
import { createStackNavigator } from "@react-navigation/stack";
import AllMessages from "./ScreenComponents/AllMessages";

const Stack = createStackNavigator();

export default function HomeScreen({
  unread = true,
  stories = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Jame",
      name: "Jaswanth",
      groupChat: true,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Jaswanth",
      name: "Jamey",
      groupChat: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Son",
      name: "Ion",
      groupChat: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Jame",
      name: "Jaswanth",
      groupChat: true,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Jaswanth",
      name: "Jamey",
      groupChat: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Son",
      name: "Ion",
      groupChat: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Jame",
      name: "Jaswanth",
      groupChat: true,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Jaswanth",
      name: "Jamey",
      groupChat: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Son",
      name: "Ion",
      groupChat: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Jame",
      name: "Jaswanth",
      groupChat: true,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Jaswanth",
      name: "Jamey",
      groupChat: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU",
      userName: "Son",
      name: "Ion",
      groupChat: true,
    },
  ],
}) {
  const Right = () => {
    return (
      <View>
        <Text>Delete</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <UserDetails />
        {unread ? <UnreadMessages /> : null}
        <View>
          <ScrollView horizontal={true}>
            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU" />
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              {stories.map((data, index) => {
                return (
                  <StoryScrollComponent
                    key={index}
                    image={data.image}
                    name={data.name}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.chat}>
        <HeadersBig />
        <ScrollView showsVerticalScrollIndicator={false}>
          {stories.map((data, index) => {
            return (
              <MultipleChat
                key={index}
                name={data.name}
                image={data.image}
                groupChat={data.groupChat}
                userName={data.userName}
              />
            );
          })}
        </ScrollView>
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            options={{ style: { position: "absolute", width: "100%" } }}
            // style={}
            name="GroupChat"
            component={GroupChat}
          />
        </Stack.Navigator> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 10,
  },
  chat: {
    backgroundColor: "#FFF",
    marginTop: 25,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    flex: 1,
  },
  contentConteiner: { flex: 1, backgroundColor: "#FFF" },
  storySwipe: {
    marginVertical: 10,
  },
});
