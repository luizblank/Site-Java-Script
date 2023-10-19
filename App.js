import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastro';
import Login from './Login';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Cadastro" component = {Cadastro} />
        <Stack.Screen name = "Login" component = {Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
