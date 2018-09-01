import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

import styles from "../styles/styles";
import {HeaderNavigation} from "../../../components/HeaderNavigation";
import Button from "../../../components/Button";

var deviceWidth = Dimensions.get('window').width;

export default class PurchaseReview extends Component {


    constructor(props) {
        super(props);
    }

    onHandledCallback() {
        this.props.navigation.navigate("OfferVoucher")
    }

    render() {

        const {goBack} = this.props.navigation;

        return (
            <View style={styles.container}>
                <HeaderNavigation />

                <View style={styles.header}>
                    <Text style={[styles.titleText, {position: 'absolute', left: 0, width: deviceWidth, fontSize: 16}]}>Review Your Purchase</Text>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Image source={require('../../../resources/back.png')} style={{resizeMode: 'stretch', width: 10, height: 17, marginLeft: 12}}/>    
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', height: 130, marginTop: 25, marginRight: 25, marginLeft: 25}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={{fontSize: 16}}>Wedding Dress by Galia</Text>
                        <Text style={{fontSize: 12, marginTop: 10, color: '#9e9e9e'}}>1 dress and fitting to be choosen in store</Text>
                    </View>

                    <Image source={require('../../../resources/example1.png')} style={{width: 80, height: 120, marginRight: 15, borderRadius: 7}}/>    
                </View>

                <View style={styles.line} />

                <View style={{flexDirection: 'row', height: 30, alignItems: 'center', marginLeft: 25, marginRight: 25, marginTop: 10}}>
                    <Text style={{flex: 1}}>Use piggybank</Text>
                    <Image source={require('../../../resources/arrow_right1.png')} style={{width: 7, height: 12, marginRight: 5}}/>    
                </View>
                <View style={styles.line} />

                <View style={{flexDirection: 'column', marginLeft: 25, marginRight: 25, marginTop: 15}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{flex: 1}}>€700 Store Voucher</Text>
                        <Text style={{}}>€600</Text>
                    </View>

                    <Text style={{marginTop: 15, color: '#ec2727'}}>Add Coupon</Text>
                </View>

                <View style={styles.line} />

                <View style={{flexDirection: 'row', marginLeft: 25, marginRight: 25, marginTop: 15}}>
                    <Text style={{flex: 1}}>Total (EUR)</Text>
                    <Text style={{}}>€600</Text>
                </View>

                <View style={[styles.line, {marginTop: 60}]} />

                <View style={[{alignItems: 'center', justifyContent: 'center', marginTop: 25}]}>
                    <Button title={"Confirm Payment: €600"} callback={this.onHandledCallback.bind(this)} />
                </View>
            </View>
        )
    }


}
