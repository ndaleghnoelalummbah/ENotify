import { Text, StatusBar, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../Components/Header/Header";
import styles from "./style";

type RootStackParamList = {
  Login: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const login = () => {
    navigation.replace("Login");
  };

  return (
    <View>
      <StatusBar backgroundColor="#0065FF" />
      <Header />
      <Text>welcome</Text>
      <TouchableOpacity onPress={login}>
        <Text>login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
