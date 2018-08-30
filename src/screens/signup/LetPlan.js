import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {HeaderNavigation} from "../../components/HeaderNavigation";
import {Input} from "../../components/Input";
import Button from "../../components/Button";

export default class LetPlan extends Component {


    constructor(props) {
        super(props);
    }

    onActionContinue = () => {
         
    }

    render() {

        return (
            <View style={styles.container}>
                <HeaderNavigation title={"Lets Plan Together"} right={true}/>

                <View style={{alignItems: 'center', marginTop: 12}}>
                    <Image source={ require('../../resources/appicon.png')} style={{width: 94, height: 68}}/>    
                </View> 

                <Input title={"Budget"} title1={"Date"} value={"€25,000"} value1={"17 / 05 / 19"} index={1} />

                <View style={{flex: 1, marginLeft: 30, marginTop: 25, marginRight: 30, marginBottom: 85}}>
                    <Text style={{color: '#7a7a7a', fontSize: 12}}>Tell me more about you</Text>
                    <View style={{flex: 1, marginTop: 20}}>
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
        backgroundColor: 'white'
    },
    containerFooter: {
        position: 'absolute',
        bottom: 35,
        left: 25,
        alignItems: 'center',
        backgroundColor: '#fafafa',
        justifyContent: 'center'
    }
});