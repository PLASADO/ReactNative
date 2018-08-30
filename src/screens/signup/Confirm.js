import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, TextInput} from 'react-native';

import {HeaderNavigation} from "../../components/HeaderNavigation";
import {Input} from "../../components/Input";
import Button from '../../components/Button';

const deviceWidth = Dimensions.get('window').width

export default class Confirm extends Component {


    constructor(props) {
        super(props);
    }

    onActionConfirm = () => {
        this.props.navigation.navigate("Where")   
    }

    render() {

        return (
            <View style={styles.container}>
                <HeaderNavigation title={"Confirm"} />
                
                <View style={[{flex: 1, flexDirection: 'column'}, styles.elevationLow1]}>
                    <Text style={{marginTop: 10, marginBottom: 10, textAlign: 'center'}}>Confirm your Facebook details</Text>

                    <Input title={"Email address"} value={"hello@gmail.com"} index={0} />   
                    <Input title={"First name"} title1={"Last name"} value={"John"} value1={"Doe"} index={1} />
                    <Input title={"Date of birth DD / MM / YYYY"} value={"11 / 07 / 92"} index={0} />
                    
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 75 }}>
                        <Button title={"Confirm"} callback={this.onActionConfirm.bind(this)} />
                    </View>    
                    
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
    elevationLow1: {
      ...Platform.select({
        ios: {
          shadowColor: 'white',
          shadowOffset: { width: 5, height: -5 },
          shadowOpacity: 5,
        },
        android: {
          elevation: 5,
        },
      }),
    },
});