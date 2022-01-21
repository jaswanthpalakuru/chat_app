import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Icons from "../icons/Icons";

export default function FormsStandard({
  addDataToArray,
  userName = "User",
  time = "12:30",
  backgroundColor = "#FFF",
  onPress = () => {
    console.log("Add Button Pressed");
  },
}) {
  const textRef = React.createRef();
  const [text, setText] = useState({});
  // useEffect(() => {
  //   textRef.current = text;
  //   console.log(text);
  // }, [text]);
  const onChangeText = function (text) {
    setText(text);
  };
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.input}>
        <Icons.AddButton
          backGroundColor="#FFB0FE"
          onPress={() => {
            onPress();
          }}
        />
        <View style={styles.textInput}>
          <TextInput
            ref={textRef}
            placeholder="Type Something"
            onChangeText={onChangeText}
          />
        </View>
        <View style={styles.sticker}>
          <Icons.Sticker onPress={addDataToArray} />
        </View>
      </View>
      <View>
        <Icons.Send
          onPress={() => {
            // console.log("Send Pressed");
            // console.log(textRef.current.value);
            textRef.current.clear();
            addDataToArray({ name: userName, message: text, time: time });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 10,
    paddingRight: 5,
    // margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFF",
    elevation: 5,
    flex: 1,
    borderRadius: 50,
    height: 45,
    // justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 10,
  },
  textInput: {
    marginHorizontal: 5,
    borderLeftWidth: 2,
    borderLeftColor: "#FFB0FE",
    height: 20,
    paddingHorizontal: 5,
    fontSize: 15,
    flex: 1,
  },
  sticker: {
    alignSelf: "flex-end",
  },
});
