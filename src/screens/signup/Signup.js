import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, Platform} from 'react-native';

import Button from '../../components/Button';

var deviceWidth = Dimensions.get('window').width;

export default class Signup extends Component {


    constructor(props) {
        super(props);
    }

    onActionLogin = () => {
        this.props.navigation.navigate("Login")
    }

    onActionFacebook = () => {
        this.props.navigation.navigate("Confirm")   
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <View style={[{alignItems: 'center', marginTop: 85}, (Platform.OS === 'android') ? {marginTop: 75} : null]}>
                    <Image source={ require('../../resources/logo.png') } style={{resizeMode: 'stretch', width: 145, height: 100}}/>
                </View>

                <TouchableOpacity onPress={() => this.onActionFacebook()}>
                    <View style={[{flexDirection: 'row', height: 50, marginTop: 70, marginLeft: 20, marginRight: 20}, (Platform.OS === 'android') ? {marginTop: 60} : null]}>
                        <View style={styles.social}> 
                            <Image source={ require('../../resources/facebook.png') } style={{resizeMode: 'stretch', width: 25, height: 25}}/>
                            <Text style={{color: '#7a7a7a', fontSize: 12, marginLeft: 15}}>FACEBOOK</Text> 
                        </View>
                        <View style={{width: 20}} />
                        <View style={styles.social}>
                            <Image source={ require('../../resources/google.png') } style={{resizeMode: 'stretch', width: 25, height: 25}}/>
                            <Text style={{color: '#7a7a7a', fontSize: 12, marginLeft: 15}}>GOOGLE</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <Text style={{color: '#616161', fontSize: 14, textAlign: 'center', marginTop: 25, marginBottom: 25}}>or sign up with email</Text>

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
                    <Button title={"Sign up"} />

                    <TouchableOpacity onPress={() => this.onActionLogin()}>
                        <Text style={{fontSize: 12, marginTop: 25}}>
                            <Text style={{color: '#7f7f7f'}}>Already have an account? </Text>
                            <Text style={{color: '#ed2a2d'}}>Login</Text>
                        </Text>
                    </TouchableOpacity>
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