import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useState, useContext } from 'react';
import { UtilsContext, UtilsContextLogin } from './context';
import Modal from "react-native-modal";

export default function Usuarios(props) {
  const {utils, setUtils} = useContext(UtilsContext);
  const {utilsLogin, setUtilsLogin} = useContext(UtilsContextLogin);
  var index;
  for(var i = 0; i < utils.nome.length; i++)
  {
    if(utils.email[i] == utilsLogin.email)
      index = i;
  }

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

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
            <Text style = {styles.title}>Usuário</Text>
        </View>

        <View style = {styles.myContainer}>
          <View>
            <Text>Usuário (e-mail):</Text>
            <Text style = {{fontSize: "20px", fontWeight: "500"}}>{utils.email[index]}</Text>
          </View>
            
          <View>
            <TouchableOpacity style = {styles.showinfo}
              onPress = {() => handleModal()}>
              <Text>Mostrar informações</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.delete}
              onPress = {() => deleteUser()}>
              <Text>Deletar usuário</Text>
            </TouchableOpacity>
          </View>

          <Modal isVisible={isModalVisible}>
            <View style = {styles.modal}>
              <View style = {styles.modalBox}>
                <View>
                  <Text style = {{fontSize: "18px", fontWeight: "500", marginBottom: "10px"}}>Informações do usuário</Text>
                  <Text style = {styles.modalText}>Nome: {utils.nome[index]}</Text>
                  <Text style = {styles.modalText}>Idade: {utils.idade[index]}</Text>
                  <Text style = {styles.modalText}>Sexo: {utils.sexo[index]}</Text>
                  <Text style = {styles.modalText}>Recebe Notificação: {utils.notfy[index] == false ? "Não" : "Sim"}</Text>
                  <Button title="Ok" onPress={handleModal} />
                </View>
              </View>
            </View>
          </Modal>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "410px",
    marginBottom: "8px",
    border: "solid 1px black",
    borderRadius: "15px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  title: {
    marginBottom: "50px",
    fontSize: "50px",
    fontWeight: "500"
  },
  delete: {
    width: '150px',
    innerHeight: '40px',
    backgroundColor: '#e83b31',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "5px"
  },
  showinfo: {
    width: '150px',
    innerHeight: '40px',
    backgroundColor: '#90ee90',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "5px"
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modalBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "220px",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
  },
  modalText: {
    fontSize: "15px",
    marginBottom: "5px"
  }
});
