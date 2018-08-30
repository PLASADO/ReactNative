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
import PINVerification from "./src/screens/signup/PINVerification";
import Confirm from "./src/screens/signup/Confirm";
import Where from "./src/screens/signup/Where";
import LetPlan from "./src/screens/signup/LetPlan";


const Navigation = createStackNavigator({

    Onboard: { screen: Onboard },
    
    Login: { screen: Login },
    
    Signup: { screen: Signup },
    PINVerification: { screen: PINVerification },
    Confirm: { screen: Confirm },
    Where: { screen: Where },
    LetPlan: { screen: LetPlan }
    
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
