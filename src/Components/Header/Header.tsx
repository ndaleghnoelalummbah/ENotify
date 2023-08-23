import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Entypo } from "@expo/vector-icons";
import styles from './style';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>ENotify</Text>
        <Text style={styles.text2}>Digital Renter</Text>
      </View>
      {/* <Image source={require("../../images/menu.png")} style={styles.menu} /> */}
      <Entypo name="dots-three-vertical" size={24} style={styles.menu} />
    </View>
  );
}

export default Header

