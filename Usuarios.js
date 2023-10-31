import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useContext } from 'react';

export default function Usuarios(props) {
  const {utils, setUtils} = useContext(UtilsContext);
  var index;
  for(var i = 0; i < length(utils.nome); i++)
  {
    // ajeita aqui!"!!!!!!!"
    if(utils.nome[i] == )
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Text style = {styles.title}>Usuarios</Text>
        </View>

        <View style = {styles.myContainer}>
            <Text>Nome: {utils.nome}</Text>
            <Text>Idade: {utils.idade}</Text>
            <Text>Sexo: {utils.sexo}</Text>
            <Text>Recebe Notificação: {utils.notfy == false ? "Não" : "Sim"}</Text>
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
  title: {
    marginBottom: "50px",
    fontSize: "50px",
    fontWeight: "500"
  },
});
