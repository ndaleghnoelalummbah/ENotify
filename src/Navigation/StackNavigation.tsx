import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../Screens/Login/Login";
// Import your screens or components for each tab
import Home from "../Screens/Home/Home";
import Event from "../Screens/Event/Event";
import Member from "../Screens/Member/Member";
import AddMember from "../Screens/AddMember/AddMember";
import AddEvent from "../Screens/AddEvent/AddEvent";
import TabNavigation from "./TabNavigation";

export type StackParamList = {
  Login: undefined;
  Home: undefined;
  Event: undefined;
  Member: undefined;
  AddMember: undefined;
  AddEvent: undefined;
};
// Create stack navigator
const Stack = createNativeStackNavigator<StackParamList>();

// Define stack navigator for each tab
// const LoginStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Login" component={Login} />
//     <Stack.Screen name="Home" component={Home} />
//   </Stack.Navigator>
// );

// const HomeStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="AddMember" component={AddMember} />
//     <Stack.Screen name="AddEvent" component={AddEvent} />
//   </Stack.Navigator>
// );
// const MemberStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Member" component={Member} />
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="AddMember" component={AddMember} />
//   </Stack.Navigator>
// );
// const EventStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Event" component={Event} />
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="AddEvent" component={AddEvent} />
//   </Stack.Navigator>
// );
// const AddMemberStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="AddMember" component={AddMember} />
//     <Stack.Screen name="Member" component={Member} />
//   </Stack.Navigator>
// );
// const AddEventStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="AddEvent" component={AddEvent} />
//     <Stack.Screen name="Event" component={Event} />
//   </Stack.Navigator>
// );

// <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
// <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
// <Stack.Screen name="Event" component={Event} options={{ headerShown: false }} />
// <Stack.Screen name="Member" component={Member} options={{ headerShown: false }} />
// <Stack.Screen name="AddMember" component={AddMember} options={{ headerShown: false }} />
// <Stack.Screen name="AddEvent" component={AddEvent} options={{ headerShown: false }} />

const StackNavigation: React.FC = () => {
  return (
    // <Stack.Navigator initialRouteName="Login">
    //   <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //   <Stack.Screen name="Main" component={TabNavigation} options={{ headerShown: false }} />
    // </Stack.Navigator>

    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="Event" component={Event} options={{ headerShown: false }} />
      <Stack.Screen name="Member" component={Member} options={{ headerShown: false }} />
      <Stack.Screen name="AddMember" component={AddMember} options={{ headerShown: false }} />
      <Stack.Screen name="AddEvent" component={AddEvent}  />
    </Stack.Navigator>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeStack} />
    //     <Tab.Screen name="Event" component={Event} />
    //     <Tab.Screen name="Member" component={Member} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
