import React from "react"
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

const Crear_Cuenta = () => {

  const navegation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('./imageLog.png')} style={styles.img_Apli} />

      <Text style={styles.txtBienvenido}>Crear Cuenta</Text>
      <Text style={styles.titulo}>Ingrese los datos solicitados:</Text>

      <TextInput placeholder='Nombre completo' style={styles.txtInput} />
      <TextInput placeholder='Correo electrónico' style={styles.txtInput} />
      <TextInput placeholder='Contraseña' style={styles.txtInput} />

      <TouchableOpacity onPress={() => navegation.navigate("Bienvenido")}>
        <Text style={styles.txtOlvido}>Iniciar Sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navegation.navigate("Bienvenido")}>
        <LinearGradient
          colors={['#00C1BB', '#005B58']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnGradient}
        >
          <Text style={styles.btnLogin}>Registrate</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txtCrear_Cuenta}>
          Ya tiene cuenta
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navegation.navigate("Rec_Cuenta")}>

        <Text style={styles.txtRigistro}>¿Has olvidado su contraseña?</Text>

      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default Crear_Cuenta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBienvenido: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#34434D',
    paddingLeft: 2,
    textAlign: 'left',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '300',
    color: 'gray',
    textAlign: 'left',
    paddingLeft: 2,
  },
  txtInput: {
    width: '80%',
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: 30,
    marginTop: 20,
    marginLeft: 20,
    borderColor: 'grey',
    color: 'grey',
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  txtOlvido: {
    fontSize: 18,
    color: "#00c1bb",
    marginTop: 3,
    textAlign: 'right',
    
  },
  txtCrear_Cuenta: {
    fontSize: 18,
    color: "#00c1bb",
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',

  },
  txtRigistro: {
    color: "#00c1bb",
    fontWeight: "bold",
    textAlign: 'left',
  },
  img_Apli: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
},
  btnGradient: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogin: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  },
});