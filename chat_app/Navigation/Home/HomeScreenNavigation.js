import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenStandard from "../../Screens/HomeScreenStandard";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
}

export default function HomeScreenNavigation() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarItemStyle: { paddingBottom: 20 },
        tabBarStyle: { height: 80 },
        tabBarLabelStyle: { fontSize: 15 },
        // tabBarItemStyle: { size: 30 },
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
      }}
      initialRouteName="Chat"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" color={color} size={size} />
          ),
        }}
        name="Discover"
        component={HomeScreenStandard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
        name="Chat"
        component={HomeScreenStandard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
