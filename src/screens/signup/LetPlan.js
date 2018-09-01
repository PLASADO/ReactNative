import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import {HeaderNavigation} from "../../components/HeaderNavigation";
import {Input} from "../../components/Input";
import Button from "../../components/Button";
import Category from '../../components/Category'

import MultiSelectView from 'react-native-multiselect-view';

let dataCategory = [
    {
        title: "Engagement",
        imgUri: require('../../resources/engagement.png')
    },
    {
        title: "Wedding",
        imgUri: require('../../resources/wedding.png')
    },
    {
        title: "Honeymoon",
        imgUri: require('../../resources/honeymoon.png')
    },
    {
        title: "Wedding",
        imgUri: require('../../resources/wedding.png')
    },
    {
        title: "Honeymoon",
        imgUri: require('../../resources/honeymoon.png')
    }
];

var interest = [
  'Frank', 'Playful', 'Traditional', 'Diligent', 'Fun', 'Adventurous'
];

export default class LetPlan extends Component {


    constructor(props) {
        super(props);
    }

    onActionContinue = () => {
         this.props.navigation.navigate("MainTabBased");
    }

    renderItem(item, index) {
        return (
            <Category imageUri={item.imgUri} title={item.title} selection={index} />
        );
    }

    render() {

        let listPages = dataCategory.map((item, index) => {
            return this.renderItem(item, index);
        });

        return (
            <View style={styles.container}>
                <HeaderNavigation title={"Lets Plan Together"} right={true}/>

                <View style={{alignItems: 'center', marginTop: 12}}>
                    <Image source={ require('../../resources/appicon.png')} style={{width: 94, height: 68}}/>    
                </View> 

                <View style={{ height: 90, marginTop: 30 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} >

                        {listPages}

                    </ScrollView>
                </View>

                <Input title={"Budget"} title1={"Date"} value={"€25,000"} value1={"17 / 05 / 19"} index={1} />

                <View style={{flex: 1, marginLeft: 30, marginTop: 25, marginRight: 30, marginBottom: 85}}>
                    <Text style={{color: '#7a7a7a', fontSize: 12}}>Tell me more about you</Text>
                    <View style={{flex: 1}}>
                        <MultiSelectView
                            ref='list2'
                            data={interest}
                            activeContainerStyle={styles.activeCom}
                            inactiveContainerStyle={styles.inactiveCom}
                            activeTextStyle={styles.activeText}
                            inactiveTextStyle={styles.inactiveText}
                          />
                    </View>
                </View>

                <View style={styles.containerFooter}>
                    <Button title={"Continue"} callback={this.onActionContinue.bind(this)} />                    
                </View>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    containerFooter: {
        position: 'absolute',
        bottom: 35,
        left: 25,
        alignItems: 'center',
        backgroundColor: '#fafafa',
        justifyContent: 'center'
    },
    activeCom: {
        backgroundColor: 'white',
    },
    inactiveCom: {
        backgroundColor: 'white',
    },
    activeText: {
        color: '#ed2a2d',
    },
    inactiveText: {
        color: '#ed2a2d',
    },
});