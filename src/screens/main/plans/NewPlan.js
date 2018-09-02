import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

import styles from "../styles/styles";
import {HeaderNavigation} from "../../../components/HeaderNavigation";
import {Input} from "../../../components/Input";
import Button from "../../../components/Button";
import Category from '../../../components/Category'

const deviceWidth = Dimensions.get('window').width

let dataCategory = [
    {
        title: "Engagement",
        imgUri: require('../../../resources/engagement.png')
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
        title: "Wedding",
        imgUri: require('../../../resources/wedding.png')
    },
    {
        title: "Honeymoon",
        imgUri: require('../../../resources/honeymoon.png')
    }
];

export default class NewPlan extends Component {


    constructor(props) {
        super(props);
    }

    onActionContinue = () => {
         
    }

    renderItem(item, index) {
        return (
            <Category imageUri={item.imgUri} title={item.title} selection={index} />
        );
    }

    render() {

        const {goBack} = this.props.navigation;

        let listPages = dataCategory.map((item, index) => {
            return this.renderItem(item, index);
        });

        return (
            <View style={styles.container}>
                <HeaderNavigation title={"New Plan"}/>

                <View style={styles.header}>
                    <Text style={[styles.titleText, {position: 'absolute', left: 0, width: deviceWidth, fontSize: 16}]}>New Plan</Text>
                    <TouchableOpacity onPress={() => goBack()}>
                        <Image source={require('../../../resources/back.png')} style={{resizeMode: 'stretch', width: 10, height: 17, marginLeft: 12}}/>    
                    </TouchableOpacity>
                </View>

                <View style={{alignItems: 'center', marginTop: 12}}>
                    <Image source={ require('../../../resources/appicon.png')} style={{width: 94, height: 68}}/>    
                </View> 

                <View style={{ height: 90, marginTop: 30 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} >

                        {listPages}

                    </ScrollView>
                </View>

                <Input title={"Budget"} title1={"Date"} value={"€25,000"} value1={"17 / 05 / 19"} index={1} />

                <View style={styles.containerFooter}>
                    <Button title={"Continue"} callback={this.onActionContinue.bind(this)} />                    
                </View>
            </View>
        )
    }


}
