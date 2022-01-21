import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icons from "../../components/icons/Icons";

export default function UserDetails({
  image = "https://picsum.photos/seed/picsum/200/300",
  wishes = "Good Morning",
  name = "Alex Bender",
}) {
  return (
    <View style={styles.container}>
      <>
        <Image
          style={styles.image}
          source={{ uri: image, height: 40, width: 40 }}
        />
      </>
      <View style={styles.contentView}>
        <View style={styles.details}>
          <Text style={styles.wishes}>{wishes}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.icons}>
          <Icons.Search
            backGroundColor="#FFB0D0"
            onPress={() => console.log("Search Button Pressed")}
          />
          <Icons.AddButton
            onPress={() => console.log("Add Button Pressed")}
            backGroundColor="#437EFF"
            size={40}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  contentView: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    flex: 2,
  },
  image: {
    borderRadius: 100,
    overflow: "hidden",
  },
  icons: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
  wishes: {
    fontSize: 12,
    color: "grey",
  },
});
