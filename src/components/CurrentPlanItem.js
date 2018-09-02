import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform
} from "react-native";

import styles from "../screens/main/styles/styles";

export default class CurrentPlanItem extends Component {
    render() {
        return (
            <View style={[{height: 300, width: 250, marginLeft: 20, borderRadius: 8, backgroundColor: 'white'}, styles.elevationLow1]}>
                <View style={{height: 190, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', color: '#ec2727', fontSize: 25}}>{this.props.title}</Text>
                    <Image source={this.props.imageUri} style={{ marginTop: 12}} />
                </View>

                <View style={{ flexDirection: 'column', height: 110, backgroundColor: '#f6f6f6', borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column', marginTop: 13, marginLeft: 15}}>
                           <Text style={{fontSize: 13}}>{this.props.sub}</Text>
                           <Text style={[styles.textStyle, {marginTop: 5, color: '#8e8e8e', marginLeft: 0}]}>{this.props.date}</Text>
                           <Text style={[styles.textStyle, {marginTop: 2, color: '#8e8e8e', marginLeft: 0}]}>{this.props.merchantCnt} Merchants</Text> 
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15, marginLeft: 25}}>
                            <Image source={require('../resources/man.png')} style={{ width: 40, height: 40}} />
                            <Image source={require('../resources/man.png')} style={{ width: 40, height: 40, position: 'absolute', left: 25}} />
                            <Image source={require('../resources/man.png')} style={{ width: 40, height: 40, position: 'absolute', left: 50}} />
                        </View>
                    </View>
                    <View></View>
                </View>
            </View>
        );
    }
}

