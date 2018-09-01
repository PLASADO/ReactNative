import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import Offers from "./Offers";
import OfferVoucher from "../OfferVoucher";

const Navigation = createStackNavigator({
    
    Offers: {screen: Offers},
    OfferVoucher: {screen: OfferVoucher},

}, {
    initialRouteName: 'Offers',
    /* The header config from FirstScreen is now here */
    navigationOptions: {

        headerStyle: {
            backgroundColor: '#fbf1dc',
        },
        header: null,
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});

export default class TabStack extends Component {
    render() {
        return (
            <Navigation/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
