import React from 'react';
import {Text, View, Image, StyleSheet, TextInput, Dimensions, Platform} from 'react-native';
import { Header } from 'react-navigation';
import Svg, {Circle} from 'react-native-svg';

const deviceWidth = Dimensions.get('window').width

export const HeaderNavigation = (props) => {

    return (
        <View style={{height: 100}}>
            <Svg height="100" width={deviceWidth}>
                <Circle
                    cx={(deviceWidth) / 2}
                    cy={`-${895 - Header.HEIGHT + 2}`}
                    r="920.5"
                    fill="#EFF2F3"
                    stroke="#ec2727"
                    strokeWidth="1.5"
                />

                <Circle
                    cx={(deviceWidth) / 2}
                    cy={`-${895 - Header.HEIGHT + 2}`}
                    r="912.5"
                    fill="white" />
            </Svg>

            <View style={styles.header}>
                <Text style={[styles.titleText, {position: 'absolute', left: 0, width: deviceWidth, fontSize: 16}]}>{props.title}</Text>
                <Image style={{resizeMode: 'stretch', width: 10, height: 18, marginLeft: 12}}/>    
                { (props.right) ? <Text style={[styles.titleText, {position: 'absolute', right: 10, fontSize: 14, marginRight: 20, color: '#ec2727'}]}>Skip</Text> : null }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        position: 'absolute', 
        left: 0, 
        top: 25, 
        height: 35, 
        width: deviceWidth, 
        flexDirection: 'row',
        alignItems: 'center', 
        
    },
    titleText: {
        textAlign: 'center'
    },
    elevationLow1: {
      ...Platform.select({
        ios: {
          shadowColor: 'white',
          shadowOffset: { width: 5, height: -5 },
          shadowOpacity: 5,
        },
        android: {
          elevation: 5,
        },
      }),
    },
});

