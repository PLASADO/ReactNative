import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'

import Home from "./home/TabStack";
import Plans from "./plans/TabStack";
import Offer from "./offer/TabStack";


const Nav = createBottomTabNavigator({
    
    Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../../resources/home_tab.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
          )
        }
    },
    Plans: {
        screen: Plans,
        navigationOptions: {
          tabBarLabel: 'Plans',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../../resources/plan_tab.png')} style={{ height: 24, width: 34, tintColor: tintColor }} />
          )
        }
    },
    Offer: {
        screen: Offer,
        navigationOptions: {
          tabBarLabel: 'Offer',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../../resources/other_tab.png')} style={{ height: 22, width: 26, tintColor: tintColor }} />
          )
        }
    }
}, {    
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        height:60,
        style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
        }
    }
});

export default class AppTabBased extends Component {
    render() {
        return (
            <Nav/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
