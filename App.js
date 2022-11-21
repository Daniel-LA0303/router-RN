import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import About from './views/About';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Inicio"
        // screenOptions={{
        //   title: 'Componente Principal',
        //   headerTitleAlign: 'center',
        //   headerStyle: {
        //     backgroundColor: '#f4511e'
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle:{
        //     fontWeight: 'bold'
        //   }
        // }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
