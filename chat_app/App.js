import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import HeadersBig from "./components/Parts/HeadersBig";
import HeadersSmall from "./components/Parts/HeadersSmall";
import Story from "./components/Parts/Story";
import MultipleChat from "./components/List/MultipleChat";
import ListOne from "./components/List/ListOne";
import FieldsTextField from "./components/List/FieldsTextField";
// import Icons from "./components/icons/Icons";
import BarSearch from "./components/Parts/BarSearch";
import BarSearchTwoButtons from "./components/Parts/BarSearchTwoButtons";
import BarsStandard from "./components/Parts/BarsStandard";
import FormsStandard from "./components/Forms/FormsStandard";
import Reply from "./components/Forms/Reply";
import MessageMultiLine from "./components/Forms/MessageMultiLine";
import MessageMultiLineGroup from "./components/Forms/MessageMultiLineGroup";
import MessageSingleLine from "./components/Forms/MessageSingleLine";
import MessageMultiLineReply from "./components/Forms/MessageMultiLineReply";
import ImageonImage from "./components/Parts/TwoImageonImage";
import BarMessage from "./components/Parts/BarMessage";
import BarMessage2 from "./components/Parts/BarMessage2";
import BarMessageIconsUnread from "./components/Parts/BarMessageIconsUnread";
import ThreeImageOnImages from "./components/Parts/ThreeImageOnImages";
import HomeScreenNavigation from "./Navigation/Home/HomeScreenNavigation";
import PlayGround from "./PlayGround";
import GroupChat from "./Screens/GroupChat";
import TwoImageonImage from "./components/Parts/TwoImageonImage";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GroupChatImage from "./components/Parts/GroupChatImage";
import Contacts from "./Screens/Contacts";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreenNavigation} />
        <Stack.Screen name="GroupChat" component={GroupChat} />
        {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Icons.AddButton
        onPress={() => console.log("Add Button Pressed")}
        // backGroundColor="#437EFF"
      />
      <Icons.Search
        // backGroundColor="#3153A1"
        onPress={() => console.log("Search Button Pressed")}
      />
      <Icons.BackArrow
        onPress={() => console.log("BackArrow Button Pressed")}
      />
      <Icons.CallButton onPress={() => console.log("Call Button Pressed")} />
      <Icons.CloseButton onPress={() => console.log("Close Button Pressed")} />
      <Icons.Common
        name="chatbubble-ellipses"
        onPress={() => console.log("Common Button Pressed")}
      />
      <Icons.Common
        name="ios-settings"
        onPress={() => console.log("Common Button Pressed")}
      />
      <Icons.Common
        name="trash"
        onPress={() => console.log("Common Button Pressed")}
      />
      <Icons.Common
        name="videocam"
        onPress={() => console.log("Common Button Pressed")}
      />
      <Icons.Discover
        name="compass"
        onPress={() => console.log("Discover Button Pressed")}
      />
      <Icons.DownArrow
        onPress={() => console.log("DownArrow Button Pressed")}
      />
      <Icons.EditIcons
        onPress={() => console.log("Edit Icons Button Pressed")}
      />
      <Icons.Image onPress={() => console.log("Image Button Pressed")} />
      <Icons.More onPress={() => console.log("More Button Pressed")} />
      <Icons.MuteButton onPress={() => console.log("Mute Button Pressed")} />
      <Icons.PinButton onPress={() => console.log("Pin Button Pressed")} />
      <Icons.Send onPress={() => console.log("Send Button Pressed")} />
      <Icons.Sticker onPress={() => console.log("Sticker Button Pressed")} />
      <Icons.Success onPress={() => console.log("Success Button Pressed")} />
      <Icons.UpArrow onPress={() => console.log("UpArrow Button Pressed")} />
      <Icons.User onPress={() => console.log("User Button Pressed")} /> */}
      {/* <MultipleChat image="https://picsum.photos/200/300" /> */}
      {/* <MultipleChat image="https://picsum.photos/200/300" />
      <MultipleChat image="https://picsum.photos/200/300" /> */}

      {/* <Text>Hello</Text> */}
      {/* <ScrollView>
        
      </ScrollView> 
      */}
      {/*
       */}
      {/* <FormsStandard /> */}
      {/* <MessageMultiLine backgroundColor="#FFF" /> */}
      {/* <MessageMultiLineGroup numberofLines={1} /> */}
      {/* <MessageMultiLineGroup /> */}
      {/* <MessageMultiLineReply /> */}
      {/* <MessageSingleLine /> */}
      {/* <Reply /> */}
      {/* <FieldsTextField /> */}
      {/* <ListOne /> */}
      {/* <MultipleChat image="https://picsum.photos/200/300" /> */}
      {/* <MultipleChat image="https://picsum.photos/200/300" />
      <MultipleChat image="https://picsum.photos/200/300" /> */}
      {/* <BarMessage name={"chatbubble-ellipses"} /> */}
      {/* <BarMessage2 name={"videocam"} /> */}
      {/* <BarMessageIconsUnread name={"videocam"} unreadMessage={true} /> */}
      {/* <TwoImageonImage
        image1="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        image2="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      /> */}
      {/* <BarSearch /> */}
      {/* <BarSearchTwoButtons /> */}
      {/* <BarsStandard /> */}
      {/* <HeadersBig /> */}
      {/* <HeadersSmall /> */}
      {/* <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_2z0JGSt1lS30w3WoY5xZunW-TC6UHlmMljda98-PRQ8MPtuRoDSWpeYmOe4WMO9TRw&usqp=CAU" /> */}
      {/* <HomeScreenNavigation /> */}
      {/* <GroupChat /> */}
      {/* <MyStack /> */}
      {/* <GroupChatImage /> */}
      <Contacts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "space-around",
    flex: 1,
    // marginHorizontal: 10,
  },
});
