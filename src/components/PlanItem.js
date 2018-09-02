import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, FlatList} from 'react-native';

import styles from "../screens/main/styles/styles";
import OfferDetailsItem from "./OfferDetailsItem";

var deviceWidth = Dimensions.get('window').width;

export default class PlanItem extends Component {


    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={[{height: 400, width: 250, marginLeft: 20, borderRadius: 8, backgroundColor: '#fafafa'}, styles.elevationLow1]}>
                <ImageBackground source={ this.props.data.bgImgUri } style={{resizeMode: 'stretch', height: 70, borderTopLeftRadius: 7, borderTopRightRadius: 7}} imageStyle={{borderRadius: 7}}>
                    <View style={{flex: 1, backgroundColor: '#ec2727bd', justifyContent: 'center', borderRadius: 7}}>
                        <Text style={{fontSize: 18, color: 'white', marginLeft: 15}}>Wedding Dress</Text>
                    </View>                
                </ImageBackground>
                <View style={{height: 55, flexDirection: 'row', marginTop: 15}}>
                    <View style={{flexDirection: 'column', width: 80, justifyContent: 'center', marginLeft: 15}}>
                        <Text style={{fontSize: 12, color: '#747474'}}>Balance</Text>
                        <Text style={{fontSize: 22, marginTop: 2}}>€{this.props.data.price}</Text>
                    </View>
                    
                    <View style={{ flex: 1, flexDirection: 'column', width: 100, marginLeft: 15, backgroundColor: 'white', marginRight: 15, justifyContent: 'center', alignItems: 'center', borderRadius: 7}}>
                        <Text style={{fontSize: 12, color: '#747474'}}>Total Saved: €850</Text>
                        <Text style={{fontSize: 22, marginTop: 2}}></Text>
                    </View>
                </View>                

                <View style={{height: 200, marginLeft: -10, marginRight: -10}}>
                    <FlatList
                        data={this.props.data.subItem}
                        keyExtractor={(item, index) => item.index}
                        renderItem={({item}) => <TouchableOpacity
                            onPress={() => this.pushScreen(item)}>
                            <OfferDetailsItem title={item.name} categoryImg={item.personImgUri} price={item.price} youPay={item.date} savePrice={item.price}/>
                        </TouchableOpacity>}
                    />
                </View>
            </View>
        )
    }


}
