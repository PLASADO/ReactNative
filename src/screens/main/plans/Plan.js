import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, Image, ScrollView} from 'react-native';

import { Header } from 'react-navigation';
import Svg, {Circle} from 'react-native-svg';

import styles from "../styles/styles";
import CurrentPlanItem from '../../../components/CurrentPlanItem'
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
    }

    renderItem(item, index) {
        return (
            <CurrentPlanItem imageUri={item.imgUri} title={item.title} sub={item.sub} date={item.date} merchantCnt={item.merchantCnt} />
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
                    <Image source={require('../../../resources/plus.png')} style={{width: 18, height: 18, position: 'absolute', left: 15}}/>    
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

                <View style={[{flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 65, marginLeft: 30, marginRight: 30, backgroundColor: '#ec2727', borderRadius: 7}, (Platform.OS === 'android') ? {marginTop: 40} : null]}>
                    <Image source={require('../../../resources/plan2.png')} style={{width: 35, height: 25}}/>    
                    <Text style={[{color: 'white', fontSize: 14, marginLeft: 30}]}>Add new plan</Text>
                </View> 

            </View>
        )
    }
}
