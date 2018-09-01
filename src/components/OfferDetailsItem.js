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

export default class OfferDetailsItem extends Component {
    render() {
        
        return (
            <View style={[styles.offerDetails, styles.elevationLow1]}>
                <Image source={ this.props.categoryImg } style={{ left: 10, height: 40, width: 40 }} />
                <View style={{flex: 1, flexDirection: 'column', height: 60, marginLeft: 20, justifyContent: 'center'}}> 
                    <Text style={styles.label}>{this.props.title}</Text>
                    <Text style={{marginTop: 3}}>€{this.props.price}</Text>
                </View>
                <View style={{flexDirection: 'column', width: 120, height: 60, justifyContent: 'center', alignItems: 'flex-end', marginRight: 15}}> 
                    <View style={{width: 80, height: 22, borderRadius: 7, borderColor: '#52cbb1', borderWidth: 1.5, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: '#52cbb1', fontSize: 11}}>SAVE €{ this.props.savePrice }</Text>
                    </View>
                    <Text style={{marginTop: 3}}>
                        <Text style={styles.label}>YOU PAY  </Text>
                        <Text>€{this.props.youPay}</Text>
                    </Text>
                </View>
            </View>
        );
    }
}
