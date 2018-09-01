import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Platform,
    Dimensions
} from "react-native";

import styles from "../screens/main/styles/styles";

var deviceWidth = Dimensions.get('window').width;

export default class OfferItem extends Component {
    render() {
        return (
            <View style={[{height: 160, marginLeft: 20, marginRight: 20, borderRadius: 7, marginTop: 15}]}>
                <ImageBackground source={ this.props.bgImg } style={{flex: 1, resizeMode: 'stretch', borderRadius: 7}} imageStyle={{borderRadius: 7}}>
                    <View style={{position: 'absolute', top: 105, left: 0, height: 55, width: deviceWidth - 40, backgroundColor: '#ec2727bd', borderBottomLeftRadius: 7, borderBottomRightRadius: 7, justifyContent: 'center'}}>
                        <Text style={[{fontSize: 16}, styles.textStyle]}>{this.props.title}</Text>
                        <Text style={[{fontSize: 12, marginTop: 3}, styles.textStyle]}>{this.props.sub}</Text>
                        <View style={[{position: 'absolute', right: 25, width: 100, height: 34, alignItems: 'center', justifyContent: 'center'}, (!this.props.border) ? null : {borderRadius: 7, borderColor: 'white', borderWidth: 1.5}]}>
                            <Text style={{color: 'white', fontSize: 16}}>{ this.props.btnText }</Text>
                        </View>
                    </View>

                    <Image source={ this.props.categoryImg } style={{ position: 'absolute', top: 10, left: 10, height: 50, width: 50 }} />
                    <Image source={ this.props.statusImg } style={{ position: 'absolute', top: 10, right: 15, height: 45, width: 45 }} />
                </ImageBackground>
            </View>
        );
    }
}

