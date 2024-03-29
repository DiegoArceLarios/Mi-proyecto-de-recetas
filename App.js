import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Creador from './Pantallas/Creador';
import BottomTab from './Navegadores/BottomTab';
import {NavigationContainer} from '@react-navigation/native';


export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <BottomTab/>
      </NavigationContainer>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
