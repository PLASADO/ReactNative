import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {createStackNavigator} from 'react-navigation'

import Home from "./Home";
import OfferDetails from "./OfferDetails";
import PurchaseReview from "./PurchaseReview";
import OfferVoucher from "../OfferVoucher";
import NewPlan from "../plans/NewPlan";

const Navigation = createStackNavigator({
    
    Home: {screen: Home},
    OfferDetails: { screen: OfferDetails },
    PurchaseReview: { screen: PurchaseReview },
    OfferVoucher: { screen: OfferVoucher },
    NewPlan: {screen: NewPlan},

}, {
    initialRouteName: 'Home',
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
