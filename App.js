import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import {createStackNavigator} from 'react-navigation'

import Onboard from "./src/screens/onboard/Onboard";
import Login from "./src/screens/login/Login";

import Signup from "./src/screens/signup/Signup";



const Navigation = createStackNavigator({

    Login: { screen: Login },
    Signup: { screen: Signup },
    Onboard: { screen: Onboard }
    
}, {
    initialRouteName: 'Onboard',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#fbf1dc'
        },
        header: null, 
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    },
});

export default class App extends Component {
    render() {
        return (
            <Navigation/>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
