import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import TextInput from '../../components/TextInput';
import {HeaderNavigation} from "../../components/HeaderNavigation";
import Button from '../../components/Button';


export default class PINVerification extends Component {
    constructor(props) {
        super(props);
        
        this.text = "";
    }

    onHandleBtnConfirm() {
        this.props.navigation.navigate("Confirm");
    }

    onChangeText(value) {
        this.text = value;
    }

    onResendCode() {
        this.title = "We have re-sent verification code to \n" + this.props.phoneNumber;
        this.setState({
            resendCode: true
        });
    }

    checkValidCode(valid) {
        console.log("is valid ==== " + valid);
        if (valid) {
            
        }
    }

    render() {
        
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <HeaderNavigation title={"PIN Verification"} />

                <View style={{ padding: 20 }}>
                    <TextInput
                        keyboardType={"numeric"}
                        checkValidCode={this.checkValidCode.bind(this)}
                        type={this.type}
                        title={this.titleInput}
                        autoFocus={true}
                        onChangeText={this.onChangeText.bind(this)}
                        styles={{ fontSize: 28, textAlign: "center" }} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                    <Button ref="button"
                        title={"Confirm"}
                        callback={this.onHandleBtnConfirm.bind(this)} />
                </View>

                <TouchableOpacity onPress={this.onResendCode.bind(this)}
                    style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                    <Text style={{ color: '#ed2a2d', fontFamily: 'Helvetica' }}>I did not receive. Please resend code</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}
