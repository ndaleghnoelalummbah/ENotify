import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/Screens/Home/Home";
import Login from "./src/Screens/Login/Login";
import Event from "./src/Screens/Event/Event";
import StackNavigation from "./src/Navigation/StackNavigation";
import TabNavigation from "./src/Navigation/TabNavigation";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <TabNavigation /> */}
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //     <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    //   </Stack.Navigator>
    //       </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
