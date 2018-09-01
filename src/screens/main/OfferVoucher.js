import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

import styles from "./styles/styles";
import {HeaderNavigation} from "../../components/HeaderNavigation";
import Button from "../../components/Button";
import OfferItem from "../../components/OfferItem";

var deviceWidth = Dimensions.get('window').width;

export default class OfferVoucher extends Component {


    constructor(props) {
        super(props);
    }

    onHandledCallback = () => {

    }

    render() {

        const {goBack} = this.props.navigation;

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <HeaderNavigation />

                <View style={styles.header}>
                    <Text style={[styles.titleText, {position: 'absolute', left: 0, width: deviceWidth, fontSize: 16}]}>Offer Voucher</Text>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Image source={require('../../resources/back.png')} style={{resizeMode: 'stretch', width: 10, height: 17, marginLeft: 12}}/>    
                    </TouchableOpacity>
                </View>

                <OfferItem title={"Helicopter Ride"} sub={"by United Flights"} btnText={"€500"} bgImg={require('../../resources/purchase1.png')} categoryImg={require('../../resources/helicopter.png')} border={false} />

                <Text style={{margin: 20}}>To redeem voucher visit a Galia Lahav store and present at point of sale.</Text>

                <View style={{height: 125, alignItems: 'center', marginTop: 10}}>
                    <View style={{height: 125, width: 125, borderWidth: 3, borderColor: '#ec2727'}}>
                        <Image source={require('../../resources/qrcode.png')} style={{resizeMode: 'stretch', width: 122, height: 122}}/>    
                    </View>
                </View>

                <View style={{flexDirection: 'row', height: 40, marginTop: 25, width: deviceWidth - 40, marginLeft: 20, justifyContent: 'center'}}>
                    <Image source={require('../../resources/wallet.png')} style={{resizeMode: 'stretch', width: 125, height: 40}}/>    
                    <View style={{width: 125, backgroundColor: '#ec2727', borderRadius: 7, alignItems: 'center', justifyContent: 'center', marginLeft: 25}}>
                        <Text style={{color: 'white'}}>Save</Text>
                    </View>
                </View>
            </View>
        )
    }


}
