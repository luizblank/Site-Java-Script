import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { UtilsContext, UtilsContextLogin } from './context';
import Modal from "react-native-modal";

export default function Login(props) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const {utilsLogin, setUtilsLogin } = useContext(UtilsContextLogin);
  const {utils, setUtils} = useContext(UtilsContext);

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  function setAndNavigate(){
    console.log(utils)
    var verify = 0
    for(var i = 0; i < utils.nome.length; i++)
    {
      if(email == "Administrador" && senha == "adm")
      {
        verify = 1
        props.navigation.navigate("UsuariosADM")
      }
      else if(email == utils.email[i] && senha == utils.senha[i])
      {
        setUtilsLogin({...utils, email: email, senha: senha})
        verify = 1
        props.navigation.navigate("Usuarios")
      }
    }
    if(verify == 0)
      handleModal()
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Text style = {styles.title}>Login</Text>
        </View>

        <View style = {styles.myContainer}>
            <Text style = {styles.text}>Email:</Text>
            <TextInput style = {styles.textInput} onChangeText = {text => setEmail(text)}/>
        </View>

        <View style = {styles.myContainer3}>
            <Text style = {styles.text}>Senha:</Text>
            <TextInput style = {styles.textInput}
            secureTextEntry = {true}
            onChangeText = {text => setSenha(text)}
            />
        </View>

        <View style = {styles.contentDown}>
          <View style = {styles.myContainer3}>
              <TouchableOpacity style = {styles.touchable}
                onPress = {() => setAndNavigate()}>
                <Text>Login</Text>
              </TouchableOpacity>
          </View>
        </View>

        <Modal isVisible={isModalVisible}>
          <View style = {styles.modal}>
            <View style = {styles.modalBox}>
              <Text style = {{marginBottom: "10px", fontSize: "20px"}}>Email ou senha incorretos!</Text>
              <Button title="Ok" onPress={handleModal} />
            </View>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myContainer: {
    width: "210px",
    marginBottom: "8px"
  },
  myContainer2: {
    width: "210px",
    marginBottom: "70px"
  },
  myContainer3: {
    width: "210px",
    marginBottom: "200px"
  },
  text: {
    alignItems: "flex-start"
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "3px"
  },
  touchable: {
    width: '210px',
    innerHeight: '40px',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
    borderRadius: "5px",
  },
  title: {
    margin: "50px",
    fontSize: "50px",
    fontWeight: "500"
  },
  contentDown: {
    position: "absolute",
    bottom: "0"
  },
  modal: {
    flex: 1,
    alignItems: "center"
  },
  modalBox: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px"
  }
});
