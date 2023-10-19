import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, 
    Switch, TouchableOpacity } from 'react-native';

export default function Cadastro(props) {
  const [inicio, setInicio] = useState(false)

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
            <TextInput style = {styles.textInput}/>
        </View>
        
        <View style = {styles.myContainer2}>
        <View style = {styles.innerContainer}>
            <Text style = {styles.text}>Idade:</Text>
            <TextInput style = {styles.textInput}/>
        </View>
        <View style = {styles.innerContainer}>
            <Text style = {styles.text}>Sexo:</Text>
            <TextInput style = {styles.textInput}/>
        </View>
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
        <Text style = {styles.text}>Confirmar senha:</Text>
        <TextInput style = {styles.textInput}
            secureTextEntry = {true}
        />
        </View>

        <View style = {styles.myContainer}>
        <Text style = {styles.text}>Deseja receber notificações?</Text>
        <Switch
            onValueChange = {() => setInicio(!inicio)}
            value = {inicio}
            trackColor = {{false: "#767577", true: "#81b0ff"}}
            thumbColor = {inicio? "#f5dd4b" : "#f4f3f4"}
            activeThumbColor = {"#f4f3f4"}
        />
        </View>

        <View style = {styles.myContainer}>
        <TouchableOpacity style = {styles.touchable}
            onPress = {() => props.navigation.navigate("Login")}>
            <Text>Cadastro</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.myContainer}>
        <TouchableOpacity style = {styles.touchable}>
            <Text>Cancelar</Text>
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
});
