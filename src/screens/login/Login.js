import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, Platform} from 'react-native';

import Button from '../../components/Button';

var deviceWidth = Dimensions.get('window').width;

export default class Login extends Component {


    constructor(props) {
        super(props);
    }

    onActionLogin = () => {
        this.props.navigation.navigate("Signup")
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <View style={[{alignItems: 'center', marginTop: 85}, (Platform.OS === 'android') ? {marginTop: 75} : null]}>
                    <Image source={ require('../../resources/logo.png') } style={{resizeMode: 'stretch', width: 145, height: 100}}/>
                </View>

                <Text style={{color: '#616161', fontSize: 14, textAlign: 'center', marginTop: 40, marginBottom: 25}}>Login with email</Text>

                <View style={styles.user_infor}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Email Address"
                        placeholderTextColor = "#7a7a7a"
                        autoCapitalize = "none" />
                </View>
                <View style={[{backgroundColor: '#7a7a7a', height: .5}, styles.viewSpace]}/>

                <View style={[styles.user_infor, {marginTop: 8}]}>
                    <TextInput style={[styles.text_input, styles.viewSpace]}
                        underlineColorAndroid = "transparent"
                        placeholder = "Password"
                        placeholderTextColor = "#7a7a7a"
                        autoCapitalize = "none" />
                </View>
                <View style={[{backgroundColor: '#7a7a7a', height: .5}, styles.viewSpace]}/>

                <View style={[{alignItems: 'center', justifyContent: 'center', marginTop: 75 }, (Platform.OS === 'android') ? {marginTop: 50} : null]}>
                    <Button title={"Login"} />
                </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    social: {
        flexDirection: 'row', 
        width: deviceWidth / 2 - 30, 
        backgroundColor: 'white', 
        borderRadius: 7, 
        borderWidth: 1, 
        borderColor: '#dedddd', 
        alignItems: 'center', 
        paddingLeft: 15
    },
    text_input: {
        flex: 1, 
        height: 40, 
        marginLeft: 16, 
        color: 'white'
    },
    user_infor: {
        height: 45,
        flexDirection: 'row', 
        alignItems: 'center'
    },
    viewSpace: {
        marginLeft: 30,
        marginRight: 30
    }
});