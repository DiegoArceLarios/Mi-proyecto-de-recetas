import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView} from "react-native";


const bgImage= require('../assets/fondoCocteles.png')
export default class Menu extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <Text>
                    Creador
                </Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    caja:{
        flex: 0.2,
    },

    fondo:{
        flex: 1,
        resizeMode: "cover",
        height: 800,
        width: 360,
        justifyContent: "center",
        alignItems: "center",

    },

})