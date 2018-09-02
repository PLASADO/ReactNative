import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Alert, Dimensions} from 'react-native';

import styles from "../styles/styles";
import {HeaderNavigation} from "../../../components/HeaderNavigation";
import OffersItem from '../../../components/OffersItem'
import Category from '../../../components/Category'

const deviceWidth = Dimensions.get('window').width

let dataOffer = [
    {
        title: "Wedding Dress",
        sub: "by Galia Lahav",
        price: 300,
        bgImg: require('../../../resources/example1.png'),
        imgUri: require('../../../resources/wedding_dress.png')
    },
    {
        title: "Flowers",
        sub: "by Alice in Bohemia",
        price: 200,
        bgImg: require('../../../resources/example2.png'),
        imgUri: require('../../../resources/flowers.png')
    },
    {
        title: "Jewels",
        sub: "by Galia Lahav",
        price: 150,
        bgImg: require('../../../resources/example3.png'),
        imgUri: require('../../../resources/jewels.png')
    },
    {
        title: "Flowers",
        sub: "by Alice in Bohemia",
        price: 200,
        bgImg: require('../../../resources/example2.png'),
        imgUri: require('../../../resources/flowers.png')
    },
    {
        title: "Jewels",
        sub: "by Galia Lahav",
        price: 150,
        bgImg: require('../../../resources/example3.png'),
        imgUri: require('../../../resources/jewels.png')
    }
];

let dataCategory = [
    {
        title: "Wedding",
        imgUri: require('../../../resources/wedding.png')
    },
    {
        title: "Honeymoon",
        imgUri: require('../../../resources/honeymoon.png')        
    },
    {
        title: "Wedding",
        imgUri: require('../../../resources/wedding.png')
    },
    {
        title: "Honeymoon",
        imgUri: require('../../../resources/honeymoon.png')        
    },
    {
        title: "New Plan",
        imgUri: require('../../../resources/new_plan.png')
    }
];


export default class Home extends Component {


    constructor(props) {
        super(props);
    }

    onActionOfferDetails = () => {
        this.props.navigation.navigate("OfferDetails")
    }

    onActionNewPlan = () => {
        this.props.navigation.navigate("NewPlan")   
    }

    renderItem(item, index) {
        return (
            <TouchableOpacity onPress={() => this.onActionOfferDetails()}>
                <OffersItem bgImg={item.bgImg} imageUri={item.imgUri} title={item.title} sub={item.sub} price={item.price} selection={index} />
            </TouchableOpacity>
        );
    }

    renderPlanItem(item, index) {
        return (
            (index != 4) ?  
                <Category imageUri={item.imgUri} title={item.title} /> :

                <TouchableOpacity onPress={() => this.onActionNewPlan()}>
                    <View style={[{height: 80, width: 120, marginLeft: 20, borderStyle: 'dotted', borderColor: '#bebebe', borderWidth: 2.5, borderRadius: 7, backgroundColor: 'white' }]}>
                        
                        <View style={{ flex: 1, alignItems: 'center', marginTop: 8 }}>
                            <Image source={item.imgUri}
                                style={{ resizeMode: 'stretch', width: 40, height: 30, marginTop: 5}}
                            />
                        </View>

                        <View style={{ flex: 1, paddingLeft: 10 }}>
                            <Text style={{textAlign: 'center', color: '#909090'}}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
        );
    }

    render() {

        let listPages = dataOffer.map((item, index) => {
            return this.renderItem(item, index);
        });

        let planPages = dataCategory.map((item, index) => {
            return this.renderPlanItem(item, index);
        });

        return (
            <View style={styles.container}>
                <HeaderNavigation />

                <View style={styles.header}>
                    <Text style={[styles.titleText, {position: 'absolute', left: 0, width: deviceWidth, fontSize: 16}]}>Home</Text>
                    <Image source={require('../../../resources/setting.png')} style={{position: 'absolute', right: 20, width: 20, height: 20}}/>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={{color : 'black', fontSize: 12, marginLeft: 15}}>Offers for you</Text>
                    <View style={{ height: 200, marginTop: 15, marginRight: 20 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false} >

                            {listPages}

                        </ScrollView>
                    </View>

                    <Text style={{color : 'black', fontSize: 12, marginLeft: 15, marginTop: 20}}>Your plans</Text>

                    <View style={{ height: 90, marginTop: 15 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false} >

                            {planPages}

                        </ScrollView>
                    </View>

                    <Text style={{color : 'black', fontSize: 12, marginLeft: 15, marginTop: 15}}>Blog</Text>

                    <ImageBackground source={ require('../../../resources/blog.png') } style={{resizeMode: 'stretch', height: 150,  margin: 15}} imageStyle={{borderRadius: 7}}>
                    </ImageBackground>
                </ScrollView>
            </View>
        )
    }
}
