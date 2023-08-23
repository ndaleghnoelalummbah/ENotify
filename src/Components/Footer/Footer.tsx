import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import styles from "./style";
const Footer = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="home" style={styles.icons} />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons name="event" style={styles.icons} />
        <Text style={styles.text}>Events</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="users" style={styles.icons} size={24} color="black" />
        <Text style={styles.text}>Members</Text>
      </View>
    </View>
  );
};

export default Footer;
