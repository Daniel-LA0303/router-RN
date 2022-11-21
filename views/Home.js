import React from 'react'
import { Text, Button, StyleSheet, View} from 'react-native'

const Home = ({navigation}) => {

    const routeAbout = () => {
        navigation.navigate('About'); //PASAMOS EL OBJETO "iinformacion"
    }
  return (
    <View style={styles.contenedor}>
        <Text>Home</Text>
        <Button 
            title='About'
            onPress={() => routeAbout()}
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

export default Home