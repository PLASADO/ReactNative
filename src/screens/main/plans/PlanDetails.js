import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';

import styles from "../styles/styles";
import {HeaderNavigation} from "../../../components/HeaderNavigation";
import PlanItem from "../../../components/PlanItem";

const deviceWidth = Dimensions.get('window').width

let planDetails = [
    {
        title: "Wedding Dress",
        price: 200,
        bgImgUri: require('../../../resources/example1.png'),
        subItem: [
            {
                name: "Shane Taylor",
                family: "Groom",
                price: 200,
                date: "11th Feb",
                personImgUri: require('../../../resources/man.png')
            }, 
            {
                name: "Mick Reid",
                family: "Bride's Father",
                price: 150,
                date: "10th Feb",
                personImgUri: require('../../../resources/man.png')
            },
            {
                name: "Becca Reid",
                family: "Bride",
                price: 50,
                date: "19th Jan",
                personImgUri: require('../../../resources/man.png')
            },
            {
                name: "Mick Reid",
                family: "Bride's Father",
                price: 150,
                date: "10th Feb",
                personImgUri: require('../../../resources/man.png')
            },
            {
                name: "Becca Reid",
                family: "Bride",
                price: 50,
                date: "19th Jan",
                personImgUri: require('../../../resources/man.png')
            }       
        ]
    },
    {
        title: "Wedding Dress",
        price: 200,
        bgImgUri: require('../../../resources/example2.png'),
        subItem: [
            {
                name: "Shane Taylor",
                family: "Groom",
                price: 200,
                date: "11th Feb",
                personImgUri: require('../../../resources/man.png')
            }, 
            {
                name: "Mick Reid",
                family: "Bride's Father",
                price: 150,
                date: "10th Feb",
                personImgUri: require('../../../resources/man.png')
            },
            {
                name: "Becca Reid",
                family: "Bride",
                price: 50,
                date: "19th Jan",
                personImgUri: require('../../../resources/man.png')
            },
            {
                name: "Mick Reid",
                family: "Bride's Father",
                price: 150,
                date: "10th Feb",
                personImgUri: require('../../../resources/man.png')
            },
            {
                name: "Becca Reid",
                family: "Bride",
                price: 50,
                date: "19th Jan",
                personImgUri: require('../../../resources/man.png')
            }       
        ]
    }
];

export default class Signup extends Component {

    constructor(props) {
        super(props);
    }

    renderItem(item, index) {
        return (
            <PlanItem data={item} />
        );
    }

    render() {

        const {goBack} = this.props.navigation;

        let listPages = planDetails.map((item, index) => {
            return this.renderItem(item, index);
        });

        return (
            <View style={styles.container}>
                <HeaderNavigation title={"My Wedding"} />

                <View style={styles.header}>
                    <Text style={[styles.titleText, {position: 'absolute', left: 0, width: deviceWidth, fontSize: 16}]}>My Wedding</Text>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Image source={require('../../../resources/back.png')} style={{resizeMode: 'stretch', width: 10, height: 17, marginLeft: 12}}/>    
                    </TouchableOpacity>
                    <Image source={require('../../../resources/setting.png')} style={{position: 'absolute', right: 20, resizeMode: 'stretch', width: 20, height: 20}}/>
                </View>

                <View style={styles.planDetails}>
                    <View style={styles.txtStyle}>
                        <Text style={{fontSize: 12}}>14th May 2019</Text>
                    </View>
                    <Image source={require('../../../resources/wedding.png')} style={{resizeMode: 'stretch', width: 70, height: 55, marginLeft: 20, marginRight: 20}}/>
                    <View style={styles.txtStyle}>
                        <Text style={{fontSize: 12}}>€25,000</Text>
                    </View>
                </View>

                <View style={{ height: 405, marginTop: 15, marginRight: 20}}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} >

                        {listPages}

                    </ScrollView>
                </View>
            </View>
        )
    }


}
