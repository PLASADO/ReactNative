import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, TouchableHighlight, Dimensions} from 'react-native';

import {HeaderNavigation} from "../../components/HeaderNavigation";
import ModalDropdown from "../../components/ModalDropdown";
import Button from "../../components/Button";

const deviceWidth = Dimensions.get('window').width

const city = ['Belfast', "Test1", "Test2"];
const country = ['Northern Ireland', "Test3", "Test4"];

export default class Where extends Component {


    constructor(props) {
        super(props);
    }

    dropdown_renderButtonText(rowData) {
        return rowData;
    }

    dropdown_renderRow(rowData, rowID, highlighted) {
        return (
          <TouchableHighlight underlayColor='cornflowerblue'>
            <View style={[styles.dropdown_2_row, {backgroundColor: '#f5f5f5'}]}>
              
              <Text style={[styles.dropdown_2_row_text, highlighted && {color: 'white'}]}>
                {`${rowData}`}
              </Text>
            </View>
          </TouchableHighlight>
        );
    }

    onActionPlan = () => {
        this.props.navigation.navigate("LetPlan")         
    }

    render() {

        return (
            <View style={styles.container}>
                <HeaderNavigation title={"Where do you live"}/>

                <View style={{alignItems: 'center', marginTop: 12}}>
                    <Image source={ require('../../resources/map.png')} style={{resizeMode: 'stretch', alignItems: 'center', width: 45, height: 60}}/>    
                </View>                

                <View style={[styles.user_infor, styles.viewSpace]}>
                    <Text style={styles.top_tip}>City</Text>

                    <ModalDropdown ref="dropdown_2"
                       defaultValue={"Belfast"}
                       style={styles.dropdown_2}
                       textStyle={styles.dropdown_2_text}
                       dropdownStyle={styles.dropdown_2_dropdown}
                       options={city}
                       renderButtonText={(rowData) => this.dropdown_renderButtonText(rowData)}
                       renderRow={this.dropdown_renderRow.bind(this)} />

                    <View style={styles.line}/>
                </View>

                <View style={[styles.user_infor, styles.viewSpace]}>
                    <Text style={styles.top_tip}>Country</Text>

                    <ModalDropdown ref="dropdown_2"
                        defaultValue={"Northern Ireland"}
                       style={styles.dropdown_2}
                       textStyle={styles.dropdown_2_text}
                       dropdownStyle={styles.dropdown_2_dropdown}
                       options={country}
                       renderButtonText={(rowData) => this.dropdown_renderButtonText(rowData)}
                       renderRow={this.dropdown_renderRow.bind(this)} />

                    <View style={styles.line}/>
                </View>

                <View style={styles.containerFooter}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 35}}>
                        <Text style={{fontSize: 11}}>
                            <Text style={{color: 'black'}}>By joining you agree to Plasado's </Text>
                            <Text style={{color: '#ed2a2d'}}>Terms of Service</Text>
                        </Text>

                        <Image source={ require('../../resources/check.png')} style={{width: 20, height: 20, marginLeft: 10}}/>    
                    </View>

                    <Button title={"Confirm"} callback={this.onActionPlan.bind(this)} />                    
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
    user_infor: {
        flexDirection: 'column',
        height: 50
    },
    text_input: {
        flex: 1, 
        height: 40, 
        color: 'black'
    },
    line: {
        backgroundColor: '#d0dada', 
        height: .3
    },
    top_tip: {
        color: '#7a7a7a', 
        fontSize: 12
    },
    viewSpace: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15
    },
    dropdown_2: {
        flex: 1,
        height: 35,
        backgroundColor: 'white',        
    },
    dropdown_2_text: {
        marginVertical: 10,
        fontSize: 13,
        color: 'black',
        textAlignVertical: 'center'
    },
    dropdown_2_dropdown: {
        height: 95,
        width: deviceWidth - 60,
    },
    dropdown_2_row: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
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