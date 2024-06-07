import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
 
const Home = () => {
  const navigation = useNavigation();

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home 1: Hola Equipo!</Text>
    </View>
    );
}
 
export default Home;