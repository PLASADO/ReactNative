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

export default class OfferDetailsItem1 extends Component {
    render() {
        
        return (
            <View style={[styles.offerDetails, styles.elevationLow1]}>
                <Image source={ this.props.categoryImg } style={{ left: 10, height: 40, width: 40 }} />
                <View style={{flex: 1, flexDirection: 'column', height: 60, marginLeft: 20, justifyContent: 'center'}}> 
                    <Text style={{fontSize: 14}}>{this.props.title}</Text>
                    <Text style={{color: '#8a8a8a', marginTop: 3, fontSize: 11}}>{this.props.family}</Text>
                </View>
                <View style={{flexDirection: 'column', width: 60, height: 60, justifyContent: 'center', alignItems: 'flex-end', marginRight: 12}}> 
                    <Text style={{color: '#52cbb1', fontSize: 13}}>€{ this.props.price }</Text>
                    <Text style={[styles.label, {marginTop: 3}]}>{this.props.date}</Text>
                </View>
            </View>
        );
    }
}
