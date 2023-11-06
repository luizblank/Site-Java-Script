import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import { UtilsContext, UtilsContextLogin } from './context';

export default function Usuarios(props) {
  const {utils, setUtils} = useContext(UtilsContext);
  const {utilsLogin, setUtilsLogin} = useContext(UtilsContextLogin);
  var index;
  for(var i = 0; i < utils.nome.length; i++)
  {
    if(utils.email[i] == utilsLogin.email)
      index = i;
  }

  function deleteUser(){
    utils.nome.splice(index, 1)
    utils.idade.splice(index, 1)
    utils.sexo.splice(index, 1)
    utils.email.splice(index, 1)
    utils.senha.splice(index, 1)
    utils.notfy.splice(index, 1)

    props.navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Text style = {styles.title}>Usuarios</Text>
        </View>

        <View style = {styles.myContainer}>
            <Text>Nome: {utils.nome[index]}</Text>
            <Text>Idade: {utils.idade[index]}</Text>
            <Text>Sexo: {utils.sexo[index]}</Text>
            <Text>Recebe Notificação: {utils.notfy[index] == false ? "Não" : "Sim"}</Text>
        </View>

        <View style = {styles.myContainer2}>
          <TouchableOpacity style = {styles.touchable}
            onPress = {() => deleteUser()}>
            <Text>Deletar usuário</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: "8px",
    border: "solid 1px black",
    borderRadius: "15px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  myContainer2: {
    width: "210px",
    marginBottom: "200px"
  },
  title: {
    marginBottom: "50px",
    fontSize: "50px",
    fontWeight: "500"
  },
  touchable: {
    width: '210px',
    innerHeight: '40px',
    backgroundColor: '#e83b31',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
    borderRadius: "5px",
  },
});
