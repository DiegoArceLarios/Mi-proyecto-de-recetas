import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, ScrollView} from "react-native";


const bgImage= require('../assets/fondoCocteles.png');

export default class Creador extends Component{
    constructor(props){
        super(props);
        this.state={

        }
        
    }
    /*return(
        <KeyboardAvoidingView style={styles.caja}>
            <ImageBackground source={bgImage} style={styles.contenedor}>
                <View style={{flex: 1}}>
                    <Text>
                        oooooooooooooooooooooooooooooooooooooooooooo
                    </Text>
                </View>
                <View style={styles.cajaTitulo}>
                    <Text style={styles.titulo}>
                        Creador
                    </Text>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
        
        
    )*/
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    fondo:{
        flex: 1,
        resizeMode: "cover",
        height: 800,
        width: 360,
        justifyContent: "center",
        alignItems: "center",

    },

    titulo:{
        alignSelf: 'center',
        bottom: 400,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    cajaTitulo:{
        justifyContent: 'center',
        
    }

})