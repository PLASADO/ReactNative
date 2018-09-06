import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, FlatList} from 'react-native';

import styles from "../screens/main/styles/styles";
import OfferDetailsItem from "./OfferDetailsItem1";

import CustomProgressBar from "./CustomProgressBar";

const TO_VALUE = 85;
const DURATION = 5000;
var deviceWidth = Dimensions.get('window').width;

export default class PlanItem extends Component {


    constructor(props) {
        super(props);
    }

    pushScreen = () => {

    }

    render() {

        return (
            <View style={[{height: 380, width: 250, marginLeft: 20, borderRadius: 8, backgroundColor: '#fafafa'}, styles.elevationLow1]}>
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
                        <View style={{alignItems: 'center', marginTop: 9}}>
                            <CustomProgressBar
                                width={100}
                                height={20}
                                toValue={TO_VALUE}
                                barAnimationDuration={DURATION}
                                borderWidth={1}
                                borderRadius={20}
                              />
                        </View>
                    </View>
                </View>                

                <View style={{height: 180, marginLeft: -10, marginRight: -10}}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.props.data.subItem}
                        keyExtractor={(item, index) => item.index}
                        renderItem={({item}) => <TouchableOpacity
                            onPress={() => this.pushScreen(item)}>
                            <OfferDetailsItem title={item.name} family={item.family} date={item.date} categoryImg={item.personImgUri} price={item.price}/>
                        </TouchableOpacity>}
                    />
                </View>

                <View style={{height: 35, borderRadius: 7, backgroundColor: '#ec2727', marginLeft: 50, marginRight: 50, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../resources/plus1.png')} style={{width: 20, height: 20}}/>    
                </View>
            </View>
        )
    }


}
