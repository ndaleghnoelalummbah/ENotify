import { StyleSheet, Text, Image, View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "./styles";
import { TextInput } from "react-native";
type RootStackParamList = {
  Home: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Login: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleLogin = () => {
    navigation.replace("Home");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
      <Image source={require("../../images/logins.png")} alt="huhu" style={styles.loginImage} />

      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputContainer}>
        <Image source={require("../../images/email.png")} style={styles.mail} />
        <TextInput placeholder="Email" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require("../../images/passwd.png")} style={styles.lock} />
        <View style={styles.passwd}>
          <TextInput placeholder="Password" secureTextEntry style={styles.PasswdText} />
          <Image source={require("../../images/eye.png")} style={styles.eyeIcon} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
