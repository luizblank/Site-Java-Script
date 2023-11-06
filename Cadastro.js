import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, TextInput, 
    Switch, TouchableOpacity, Button } from 'react-native';
import { UtilsContext } from './context';
import Modal from "react-native-modal";

export default function Cadastro(props) {
  const {utils, setUtils} = useContext(UtilsContext);

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [sexo, setSexo] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [notfy, setNotfy] = useState(false)

  function mySetUtils() {
    console.log(utils)
    if(nome != "" && idade != "" && sexo != "" && email != "" && senha != "")
      if(Object.keys(utils).length == 0)
      {
        if(utils.nome && utils.idade && utils.sexo && utils.email && utils.senha)
          setUtils({...utils, nome: [...utils.nome, nome], idade: [...utils.idade, idade], sexo: [...utils.sexo, sexo], email: [...utils.email, email], senha: [...utils.senha, senha], notfy: [...utils.notfy, notfy]})

        else
          setUtils({...utils, nome: [nome], idade: [idade], sexo: [sexo], email: [email], senha: [senha], notfy: [notfy]})
      }
      else
        handleModal()
    else
      handleModal()
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        <Image
            style = {{
            width: "150px",
            height: "150px",
            marginBottom: "15px"
            }}

            source = {{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/768px-Windows_10_Default_Profile_Picture.svg.png"
            }}
        />

        <View style = {styles.myContainer}>
            <Text style = {styles.text}>Nome:</Text>
            <TextInput style = {styles.textInput} onChangeText = {text => setNome(text)}/>
        </View>
        
        <View style = {styles.myContainer2}>
        <View style = {styles.innerContainer}>
            <Text style = {styles.text}>Idade:</Text>
            <TextInput style = {styles.textInput} onChangeText = {text => setIdade(text)}/>
        </View>
        <View style = {styles.innerContainer}>
            <Text style = {styles.text}>Sexo:</Text>
            <TextInput style = {styles.textInput} onChangeText = {text => setSexo(text)}/>
        </View>
        </View>

        <View style = {styles.myContainer}>
        <Text style = {styles.text}>Email:</Text>
        <TextInput style = {styles.textInput} onChangeText = {text => setEmail(text)}/>
        </View>

        <View style = {styles.myContainer}>
        <Text style = {styles.text}>Senha:</Text>
        <TextInput style = {styles.textInput}
            secureTextEntry = {true}
            onChangeText = {text => setSenha(text)}
        />
        </View>

        <View style = {styles.myContainer}>
        <Text style = {styles.text}>Confirmar senha:</Text>
        <TextInput style = {styles.textInput}
            secureTextEntry = {true}
        />
        </View>
      
        <View style = {styles.myContainer}>
        <Text style = {styles.text}>Deseja receber notificações?</Text>
        <Switch
            onValueChange = {() => setNotfy(!notfy)}
            value = {notfy}
            trackColor = {{false: "#767577", true: "#81b0ff"}}
            thumbColor = {notfy? "#f5dd4b" : "#f4f3f4"}
            activeThumbColor = {"#f4f3f4"}
        />
        </View>

        <View style = {styles.myContainer}>
        <TouchableOpacity style = {styles.touchable}
            onPress = {() => mySetUtils()}>
            <Text>Cadastro</Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.myContainer}>
        <TouchableOpacity style = {styles.touchable}
            onPress = {() => props.navigation.navigate("Login")}>
            <Text>Login</Text>
        </TouchableOpacity>
        </View>

        <Modal isVisible={isModalVisible}>
          <View style = {styles.modal}>
            <View style = {styles.modalBox}>
              <Text style = {{marginBottom: "10px", fontSize: "20px", fontWeight: "500"}}>Email ou senha incorretos!</Text>
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
    display: "flex",
    flexDirection: "row",
    marginBottom: "8px"
  },
  innerContainer: {
    marginRight: "5px",
    marginLeft: "5px",
    width: "100px"
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
