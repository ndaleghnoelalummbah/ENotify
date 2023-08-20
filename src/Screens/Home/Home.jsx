import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Home = () => {
    const navigation = useNavigation();

    const login =()=>{
        navigation.replace("Login");
    }
  return (
    <View>
      <Text>welcome</Text>
      <TouchableOpacity onPress={login}>
        <Text >
            login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})