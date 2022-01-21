import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MessageMultiLine from "./MessageMultiLine";
import Reply from "./Reply";

export default function MultiLineReply({ reply = true }) {
  return (
    <View style={styles.container}>
      {reply && (
        <View>
          <Reply backgroundColor="#DF9CE2" borderRadius={10} />
        </View>
      )}
      <View>
        <MessageMultiLine backgroundColor="#FFF" seen={true} />
        {/* <MessageMultiLine seen={true} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFB0FE",
    borderRadius: 20,
    padding: 15,
    elevation: 5,
    // margin: 10,
    justifyContent: "space-between",
  },
});
