import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import login from "../../assets/";
type RootStackParamList = {
  Login: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const login = () => {

    navigation.replace('Login');
  };

  return (
    <View>
      <Text>welcome</Text>


      <TouchableOpacity onPress={login}>
        <Text>login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});