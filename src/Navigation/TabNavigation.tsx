import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";

import Home from "../Screens/Home/Home";
import Event from "../Screens/Event/Event";
import Member from "../Screens/Member/Member";
import styles from "./style";

export type BottomParamList = {
  Home: undefined;
  Event: undefined;
  Member: undefined;
};
// Create bottom tab navigator
const Tab = createBottomTabNavigator<BottomParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#D3D3D3",
        //  tabBarBackground: "#0065FF",
        tabBarStyle: {
          backgroundColor: "#0065FF", // Set the background color for the tab bar
          borderTopColor: "transparent", // Hide the top border of the tab bar
          paddingVertical: 6,
        },
        tabBarLabelStyle: {
          fontSize: 14, // Set the font size for the tab label
        },
        // tabBarItemStyle: {
        //   marginVertical: 5, // Adjust the marginBottom to position the background color
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({ focused }) => <MaterialIcons name="home" style={styles.icons} />,
        }}
      />
      <Tab.Screen
        name="Event"
        component={Event}
        options={{
          title: "Events",
          tabBarIcon: ({ focused }) => <MaterialIcons name="event" style={styles.icons} />,
        }}
      />
      <Tab.Screen
        name="Member"
        component={Member}
        options={{
          title: "Members",
          header: () => null,
          tabBarIcon: ({ focused }) => <FontAwesome5 name="users" style={styles.icons} size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name="Event" component={Event} />
    //   <Tab.Screen name="Member" component={Member} />
    // </Tab.Navigator>
  );
};

export default TabNavigation;
