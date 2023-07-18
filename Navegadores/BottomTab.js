import React, {Component} from 'react';
import {createButtomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';

import Menu from '../Pantallas/Menu';
import Creador from '../Pantallas/Creador';

const Tab= createButtomTabNavigator();

const BottomTab =()=>{
    /*constructor(props){
        super(props);
        this.state={

        }
    }*/
    //barStyle={styles.navegador} initialRouteName='Menu'
    
        return(
            <Tab.Navigator>                                             
                <Tab.Screen name='Menu' component={Menu} />
                <Tab.Screen name='Creador' component={Creador} />
            </Tab.Navigator>
                

        );
        
    

}

const styles= StyleSheet.create({
    navegador:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#548235',
        heigth: '%10',
        overflow: "hidden",
        position: 'absolute',

    }
})


export default BottomTab;