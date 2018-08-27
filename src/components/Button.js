import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
// import styles from './styles';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            hidden: props.hidden,
            customStyleBtn: props.customStyleBtn,
            customStyleText: props.customStyleText,
            customContainer: props.customContainer
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.hidden !== this.state.hidden) {
            this.setState({
                hidden: nextProps.hidden
            });
        }
        if (nextProps.title !== this.state.title) {
            this.setState({
                title: nextProps.title
            });
        }
    }
    onPress() {
        if (this.props.callback) {
            this.props.callback();
        }
    }
    render() {
        let { title, hidden } = this.state;
        return (<View style={[styles.container, this.state.customContainer ? this.state.customContainer : null]}>
            {
                !this.state.hidden
                    ?
                    <TouchableOpacity style={[styles.button, this.state.customStyleBtn ? this.state.customStyleBtn : null]} onPress={this.onPress.bind(this)}>
                        <Text style={[styles.title, this.state.customStyleText ? this.state.customStyleText : null]}>{title}</Text>
                    </TouchableOpacity>
                    :
                    null
            }
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 2 * 25,
        height: 40
    },
    button: {
        flex: 1,
        backgroundColor: '#ec2727',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    title: {
        textAlign: 'center',
        color: 'white'
    }
});