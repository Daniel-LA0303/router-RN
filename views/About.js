import React from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'


const About = ({navigation}) => {
    const routeHome = () => {
        navigation.navigate('Home'); //PASAMOS EL OBJETO "iinformacion"
    }
  return (
    <View style={styles.contenedor}>
        <Text>About</Text>
        <Button 
            title='Home'
            onPress={() => routeHome()}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});
export default About