import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { UtilsContext } from './context';

export default function Login(props) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const {utils, setUtils} = useContext(UtilsContext);

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
              onPress = {() => email == utils.email && senha == utils.senha ? props.navigation.navigate("Usuarios") : 0}>
              <Text>Login</Text>
              </TouchableOpacity>
          </View>
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
  }
});
