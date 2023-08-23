import { Text, StatusBar, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../Components/Header/Header";
import styles from "./style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigation/StackNavigation";
import AddMember from "../AddMember/AddMember";

// type RootStackParamList = {
//   Login: undefined;
// };

// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const Home = ({ route, navigation }: NativeStackScreenProps<StackParamList, "Home">) => {
  // const navigation = useNavigation<HomeScreenNavigationProp>();

  const login = () => {
    navigation.replace("Login");
  };
  const handleAddEvent = () => {
    navigation.navigate("AddEvent");
  };
  const handleAddMember = () => {
    navigation.navigate("AddMember");
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#0065FF" />
      <Header />
      <View style={styles.intro}>
        <View>
          <Image source={require("../../images/profile.png")} />
        </View>
        <View style={styles.info}>
          <Text style={styles.welcome}>Hi</Text>
          <Text style={styles.name}>$name</Text>
          <Text style={styles.email}>$email</Text>
        </View>
      </View>

      <TouchableOpacity onPress={login}>
        <Text>login</Text>
      </TouchableOpacity>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={handleAddMember}>
          <View style={styles.addContainer}>
            <Entypo name="add-user" style={styles.icons} />
            <Text style={styles.text}>Add Member</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddEvent}>
          <View style={styles.addContainer}>
            <MaterialIcons name="event-available" style={styles.icons} />
            <Text style={styles.text}>Add Event</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <Footer /> */}
    </View>
  );
};

export default Home;
