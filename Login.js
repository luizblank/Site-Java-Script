import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login(props) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Text style = {styles.title}>LOGIN</Text>
        </View>

        <View style = {styles.myContainer}>
            <Text style = {styles.text}>Email:</Text>
            <TextInput style = {styles.textInput}/>
        </View>

        <View style = {styles.myContainer}>
            <Text style = {styles.text}>Senha:</Text>
            <TextInput style = {styles.textInput}
            secureTextEntry = {true}
            />
        </View>

        <View style = {styles.myContainer}>
            <TouchableOpacity style = {styles.touchable}
            onPress = {() => props.navigation.navigate("Usuarios")}>
            <Text>Login</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.myContainer}>
            <TouchableOpacity style = {styles.touchable}>
            <Text>Cadastro</Text>
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
    marginBottom: "8px"
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
  }
});
