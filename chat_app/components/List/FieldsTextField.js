import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icons from "../icons/Icons";

export default function FieldsTextField({ fieldNames = "Field Name" }) {
  const [fieldName, setFieldName] = useState(false);
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        {text ? <Text>{fieldNames}</Text> : null}
        <TextInput
          placeholder="Search"
          onChangeText={(text) => {
            setFieldName(true);
            setText(text);
          }}
          value={text}
        />
      </View>
      <Icons.CloseButton
        onPress={() => {
          setFieldName(false);
          setText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 100,
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 5,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
  },
});
