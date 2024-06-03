import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

const Home = () =>{
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hola Mundo</Text>

      <TouchableOpacity >
      <LinearGradient
        colors={['#00C1BB', '#005B58']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.btnNext}
        >
        <Text style={styles.txtNext} >Continuar</Text>
      </LinearGradient>     
      </TouchableOpacity>

    </View>
  );
   

}

export default Home;


const styles = StyleSheet.create({
  container: {
      backgroundColor: '#ffffff',
      alignItems: 'center',
    },
    txtTitulo: {
      fontSize: 80,
      fontWeight: 'bold',
      color: '#34434D',
  
    },

    txtNext:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
    },

    btnNext: {
      borderRadius: 30,
      width: 219,
      height: 53,
      textAlign: 'center',
      padding:10,
      
      
    },
  });