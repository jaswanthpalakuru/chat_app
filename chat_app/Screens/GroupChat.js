import React, { useRef, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import FormsStandard from "../components/Forms/FormsStandard";
import BarMessage2 from "../components/Parts/BarMessage2";
import Messages from "./ScreenComponents/Messages";
import SingleMessage from "./ScreenComponents/SingleMessage";
import { NavigationContainer } from "@react-navigation/native";

export default function GroupChat({ username = "User", navigation, route }) {
  const [messages, setMessages] = useState([
    { name: "User", message: "hello1", time: "1:30", seen: false },
    { name: "User1", message: "hello2", time: "2:30", seen: false },
    { name: "User1", message: "hello3", time: "3:30", seen: false },
    { name: "User1", message: "hello4", time: "4:30", seen: false },
    { name: "User", message: "hello5", time: "5:30", seen: false },
    { name: "User", message: "hello6", time: "6:30", seen: false },
    { name: route.params.name, message: "hello7", time: "7:30", seen: false },
    {
      name: route.params.userName,
      message: "hello8",
      time: "8:30",
      seen: false,
    },
    { name: "User1", message: "hello9", time: "9:30", seen: false },
    { name: "User", message: "hello0", time: "10:30", seen: true },
    { name: "User1", message: "hello12", time: "11:30", seen: true },
    { name: "User", message: "hello13", time: "12:30", seen: true },
    { name: "User1", message: "hello14", time: "13:30", seen: true },
    { name: "User1", message: "hello15", time: "14:30", seen: true },
    { name: "User", message: "hello23", time: "15:30", seen: true },
    { name: "User1", message: "hello21", time: "16:30", seen: true },
    { name: "User1", message: "hello22", time: "17:30", seen: true },
  ]);
  function addMessageToArray(text) {
    // console.log(text);
    // Adding Messages to the sample array of message objects
    setMessages((prevMessages) => {
      // console.log(prevMessages);
      return [...prevMessages, text];
    });
  }
  const scrollView = useRef();
  var currentTime = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  return (
    <View
      style={[
        styles.container,
        {
          flex: 1,
          backgroundColor: "#F7F7F9",
          justifyContent: "space-between",
        },
      ]}
    >
      <View>
        <BarMessage2
          groupChat={route.params.groupChat}
          name={"videocam"}
          backArrowPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <ScrollView
          onContentSizeChange={() => {
            scrollView.current.scrollToEnd();
          }}
          ref={scrollView}
          style={{ backgroundColor: "#F7F7F9", flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((item, index) => {
            return (
              <SingleMessage
                key={index}
                message={item.message}
                userName={route.params.userName}
                name={item.name}
                seen={item.seen}
                time={item.time}
              />
            );
          })}
        </ScrollView>
      </View>
      <View>
        <FormsStandard
          backgroundColor="#FFB0FE"
          addDataToArray={addMessageToArray}
          userName={route.params.userName}
          time={currentTime}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  //   padding: 10,
  // marginTop: StatusBar.currentHeight,
  // },
});
