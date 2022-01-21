import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageonImage from "./TwoImageonImage";
import Icons from "../icons/Icons";
import GroupChatImage from "./GroupChatImage";

export default function BarMessage2({
  backgroundColor = "#FFF",
  name,
  backArrowPress = () => {
    console.log("Back Arrow Pressed");
  },
  chatIconPress = () => {
    console.log("Chat Icon Pressed");
  },
  userImage = "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
  image1 = "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
  image2 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  image3 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  image4 = "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
  image5 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  image6 = "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
  groupChat = true,
}) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Icons.BackArrow onPress={backArrowPress} />
      {groupChat ? (
        <GroupChatImage
          userImage={userImage}
          image1={image1}
          image2={image2}
          image3={image3}
          image4={image4}
          image5={image5}
          image6={image6}
        />
      ) : (
        <ImageonImage image1={image1} image2={image2} />
      )}
      <Icons.Common name={name} onPress={chatIconPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
});
