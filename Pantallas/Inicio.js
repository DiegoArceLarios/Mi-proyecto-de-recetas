import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView } from "react-native";

export default class Creador extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <KeyboardAvoidingView style={{flex: 1}}>
                <ImageBackground source={{uri: '../assets/fondoCocteles.png'}} style={styles.contenedor}>
                    <Text>
                        Creador
                    </Text>
                </ImageBackground>
            </KeyboardAvoidingView>
            
            
        )
    }
}

const styles= StyleSheet.create({
    contenedor:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
        height: 800,
        width: 360,
    }

})