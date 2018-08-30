import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, ImageBackground } from 'react-native';
import propTypes from 'prop-types';

var deviceWidth = Dimensions.get('window').width;

let rect = require('../resources/itembg.png');

export default class Input extends Component {
    static propTypes = {
        placeholder: propTypes.string.isRequired,
        onChangeText: propTypes.func.isRequired,
        autoFocus: propTypes.bool,
        title: propTypes.string,
        type: propTypes.number,
        fontSize: propTypes.number,
    };

    static defaultProps = {
        placeholder: "type here",
        title: "",
        autoFocus: false,
        type: 0,
        fontSize: 40
    };

    constructor(props) {
        super(props);
        this.code1 = "";
        this.code2 = "";
        this.code3 = "";
        this.code4 = "";
        this.state = {
            text: "",
            type: props.type
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.type !== this.state.type) {
            this.setState({
                type: nextProps.type
            });
        }
        if (nextProps.text !== this.state.text) {
            this.setState({
                text: nextProps.text
            });
        }
    }
    onChangeText(value) {
        this.props.onChangeText(value);
        this.setState({
            text: value
        });
    }
    onChangeText1(value) {
        if (value.trim().length !== 0) {
            this.refs.TextInput2.focus();
        }
        this.code1 = value;
        this.checkValidCode();
    }
    onChangeText2(value) {
        if (value.trim().length !== 0) {
            this.refs.TextInput3.focus();
        }
        this.code2 = value;
        this.checkValidCode();
    }
    onChangeText3(value) {
        if (value.trim().length !== 0) {
            this.refs.TextInput4.focus();
        }
        this.code3 = value;
        this.checkValidCode();
    }
    onChangeText4(value) {
        this.code4 = value;
        this.checkValidCode();
    }
    checkValidCode() {
        if (this.code1 !== "" && this.code2 !== "" && this.code3 !== "" && this.code4 !== "") {
            if (this.props.checkValidCode) {
                this.props.checkValidCode(true);
            }
            return true;
        }
        if (this.props.checkValidCode) {
            this.props.checkValidCode(false);
        }
        return false;
    }
    
    render() {

        let padding = 5;
        let total = 4;
        let inputWidth = (deviceWidth - 80) / 4;
        let styleItem = {
            width: inputWidth,
            height: 100,
            justifyContent: 'center'
        };
        let styleInput = {
            fontSize: this.props.fontSize,
            textAlign: 'center',
            color: '#5B6F81',
            padding: 10,
            fontFamily: 'Helvetica'
        };

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f0f3f5' }}>
                <ImageBackground source={rect} style={styleItem} resizeMode="contain">
                    <TextInput style={styleInput} ref="TextInput1"
                        autoFocus={true}
                        maxLength={1}
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onChangeText1.bind(this)}
                        selectionColor={'#BF4E9A'} />
                </ImageBackground>

                <ImageBackground source={rect} style={styleItem} resizeMode="contain">
                    <TextInput style={styleInput} ref="TextInput2"
                        maxLength={1}
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onChangeText2.bind(this)}
                        selectionColor={'#BF4E9A'} />
                </ImageBackground>

                <ImageBackground source={rect} style={styleItem} resizeMode="contain">
                    <TextInput style={styleInput} ref="TextInput3"
                        maxLength={1}
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onChangeText3.bind(this)}
                        selectionColor={'#BF4E9A'} />
                </ImageBackground>
                <ImageBackground source={rect} style={styleItem} resizeMode="contain">
                    <TextInput style={styleInput} ref="TextInput4"
                        maxLength={1}
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onChangeText4.bind(this)}
                        selectionColor={'#BF4E9A'} />
                </ImageBackground>
            </View>
        );
    }
}