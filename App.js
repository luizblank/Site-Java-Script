import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastro';
import Login from './Login';
import Usuarios from './Usuarios';
import { UtilsContext, UtilsContextLogin } from './context';
import { useState, useContext } from 'react';

export default function App() {
  const [utils, setUtils] = useState({});
  const [utilsLogin, setUtilsLogin] = useState({});
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <UtilsContext.Provider value = {{utils, setUtils}}>
        <UtilsContextLogin.Provider value = {{utilsLogin, setUtilsLogin}}>
            <Stack.Navigator>
              <Stack.Screen name = "Cadastro" component = {Cadastro} />
                <Stack.Screen name = "Login" component = {Login} />
                <Stack.Screen name = "Usuarios" component = {Usuarios} />
            </Stack.Navigator>
          </UtilsContextLogin.Provider>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}
