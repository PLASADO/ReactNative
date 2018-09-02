import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, Image, ScrollView, Modal, TextInput, Alert} from 'react-native';

import { Header } from 'react-navigation';
import Svg, {Circle} from 'react-native-svg';

import styles from "../styles/styles";
import CurrentPlanItem from '../../../components/CurrentPlanItem';
import Button from '../../../components/Button';

const deviceWidth = Dimensions.get('window').width

let currentPlans = [
    {
        title: "Wedding",
        sub: "My Wedding",
        date: "14th May 2019",
        merchantCnt: 3,
        imgUri: require('../../../resources/wedding.png')
    },
    {
        title: "Honeymoon",
        sub: "My Honeymoon",
        date: "14th May 2019",
        merchantCnt: 15,
        imgUri: require('../../../resources/honeymoon.png')
    }
];

export default class Plan extends Component {


    constructor(props) {
        super(props);

        this.state = {
            modalAddActivity: false
        }
    }

    setModalVisible = (visible) => {
        this.setState({ 
            modalAddActivity: visible 
        });
    }

    modalDidClose = () => {
        this.setState({ 
            modalAddActivity: false   
        });
    }

    onActionSetting = () => {

    }

    onActionPlanDetails = () => {
        this.props.navigation.navigate("PlanDetails")   
    }

    onActionNewPlan = () => {
        this.props.navigation.navigate("NewPlan");
    }

    renderItem(item, index) {
        return (
            <TouchableOpacity onPress={() => this.onActionPlanDetails()}>
                <CurrentPlanItem imageUri={item.imgUri} title={item.title} sub={item.sub} date={item.date} merchantCnt={item.merchantCnt} />
            </TouchableOpacity>
        );
    }

    render() {

        let listPages = currentPlans.map((item, index) => {
            return this.renderItem(item, index);
        });

        return (
            <View style={[styles.container, {backgroundColor: '#fafafa'}]}>
                <Svg height="120" width={deviceWidth}>
                    <Circle
                        cx={(deviceWidth) / 2}
                        cy={`-${895 - Header.HEIGHT + 2}`}
                        r="945.5"
                        fill="#EFF2F3"
                        stroke="#ec2727"
                        strokeWidth="1.5"
                    />

                    <Circle
                        cx={(deviceWidth) / 2}
                        cy={`-${895 - Header.HEIGHT + 2}`}
                        r="937.5"
                        fill="white" />
                </Svg>

                <View style={styles.header}>
                    <View style={{flexDirection: 'column', position: 'absolute', left: 0, width: deviceWidth, height: 110, alignItems: 'center', justifyContent: 'center'}}> 
                        <Text style={[styles.titleText, {fontSize: 12, marginTop: 30}]}>Piggybank</Text>
                        <Text style={[styles.titleText, {color: 'black', fontSize: 20, marginTop: 7}]}>€1,3000</Text>
                        <Text style={[styles.titleText, {color: '#8e8e8e', fontSize: 11, marginTop: 12}]}>Rewards Received: €23</Text>
                    </View>

                    <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                        <Image source={require('../../../resources/plus.png')} style={{width: 18, height: 18, position: 'absolute', left: 15, top: -10}}/>    
                    </TouchableOpacity>

                    <Image source={require('../../../resources/setting.png')} style={{width: 18, height: 18, position: 'absolute', right: 15}}/>    
                </View>

                <Text style={{color : 'black', fontSize: 12, marginLeft: 15, marginTop: 20}}>Current Plans</Text>

                <View style={{ height: 305, marginTop: 15, marginRight: 20}}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} >

                        {listPages}

                    </ScrollView>
                </View>

                <TouchableOpacity onPress={() => this.onActionNewPlan()}>
                    <View style={[{flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 65, marginLeft: 30, marginRight: 30, backgroundColor: '#ec2727', borderRadius: 7}, (Platform.OS === 'android') ? {marginTop: 40} : null]}>
                        <Image source={require('../../../resources/plan2.png')} style={{width: 35, height: 25}}/>    
                        <Text style={[{color: 'white', fontSize: 14, marginLeft: 30}]}>Add new plan</Text>
                    </View> 
                </TouchableOpacity>

                <Modal animationType='fade' transparent={true} modalDidClose={this.modalDidClose} visible={this.state.modalAddActivity} onRequestClose={() => this.setModalVisible(false)} style={{  }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.65)'}}>
                        <TouchableOpacity onPress={() => this.modalDidClose()}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', width: deviceWidth - 60, height: 350, backgroundColor: 'white', borderRadius: 7}}>
                                <Text style={{marginTop: 20, fontSize: 15}}>Add money</Text>
                                <Text style={{color: '#888888', marginTop: 10, marginLeft: 25, marginRight: 25, textAlign: 'center', fontSize: 12}}>Select how much you would like to top up using the buttons</Text>

                                <View style={{flexDirection: 'row', marginTop: 20}}>
                                    <Image source={require('../../../resources/decrease.png')} style={{width: 60, height: 60, marginTop: 20}}/>    
                                    <View style={{ backgroundColor: '#f5f5f5', borderRadius: 7 }}>
                                        <TextInput style={styles.styleInput} ref="TextInput2"
                                            maxLength={1}
                                            underlineColorAndroid={'transparent'}
                                            selectionColor={'#BF4E9A'}
                                            value={"€50"} />
                                    </View>
                                    <Image source={require('../../../resources/increase.png')} style={{width: 60, height: 60, marginTop: 20}}/>    
                                </View>

                                <Text style={{color: '#888888', marginTop: 15, marginBottom: 15}}>Your new balance will be 1,350</Text>

                                <Button title={"Add Money Via Bank Transfer"} customContainer={{width: deviceWidth - 100}} />
                                <View style={{ flexDirection: 'row', width: deviceWidth - 100, height: 40, backgroundColor: 'black', borderRadius: 7, marginTop: 12, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={require('../../../resources/download.png')} style={{resizeMode: 'stretch', width: 55, height: 25}}/>    
                                </View>

                                <Image source={require('../../../resources/close.png')} style={{width: 15, height: 15, position: 'absolute', right: 15, top: 12}}/>    
                                
                            </View>
                        </TouchableOpacity>
                    </View>                    
                </Modal>
            </View>
        )
    }
}
