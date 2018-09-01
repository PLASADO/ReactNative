import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, FlatList, ScrollView, Alert} from 'react-native';

import {HeaderNavigation} from "../../../components/HeaderNavigation";
import OfferDetailsItem from "../../../components/OfferDetailsItem";
import Button from "../../../components/Button";

const deviceWidth = Dimensions.get('window').width

const offerDetailsList = [
    {
        index: 1,
        title: "STORE VALUE",   
        categoryImg: require('../../../resources/wedding_dress.png'),
        price: 400,
        youPay: 350,
        savePrice: 50
    },
    {
        index: 2,
        title: "STORE VALUE",   
        categoryImg: require('../../../resources/wedding_dress.png'),
        price: 700,
        youPay: 600,
        savePrice: 100
    },
    {
        index: 3,
        title: "STORE VALUE",   
        categoryImg: require('../../../resources/wedding_dress.png'),
        price: 1000,
        youPay: 700,
        savePrice: 300
    }

]

export default class OfferDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            offerDetailsList: offerDetailsList,
            selectionIndex: -1
        }
    }

    pushScreen = (item) => {
        this.setState({
            selectionIndex: item.index
        })
    }

    onHandledCallback() {
        this.props.navigation.navigate("PurchaseReview")
    }

    render() {

        const {goBack} = this.props.navigation;
        var listCnt = this.state.offerDetailsList.length;

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ImageBackground source={ require('../../../resources/example1.png') } style={{ resizeMode: 'stretch', height: 225, width: deviceWidth}} >
                    <HeaderNavigation title={"Offer Detail"} />

                    <View style={styles.header}>
                        <Text style={[styles.titleText, {position: 'absolute', left: 0, width: deviceWidth, fontSize: 16}]}>Offer Detail</Text>
                        <TouchableOpacity onPress={() => goBack()}>
                            <Image source={require('../../../resources/back.png')} style={{resizeMode: 'stretch', width: 10, height: 17, marginLeft: 12}}/>    
                        </TouchableOpacity>
                        <Image source={require('../../../resources/export.png')} style={{position: 'absolute', right: 20, resizeMode: 'stretch', width: 16, height: 21}}/>
                    </View>

                    <Image source={require('../../../resources/wedding_dress.png')} style={{resizeMode: 'stretch', width: 75, height: 75, marginLeft: 25, marginTop: 15}}/>    

                    <View style={{flexDirection: 'row', position: 'absolute', top: 140, right: 25, height: 30, width: 100}}>
                        <Image source={require('../../../resources/fb.png')} style={{resizeMode: 'stretch', width: 30, height: 30}}/>                            
                        <Image source={require('../../../resources/twitter.png')} style={{resizeMode: 'stretch', width: 30, height: 30}}/>                            
                        <Image source={require('../../../resources/instagram.png')} style={{resizeMode: 'stretch', width: 30, height: 30}}/>                            
                    </View>
                </ImageBackground>                

                <ScrollView>
                
                    <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20, height: 50, marginRight: 20}}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={{fontSize: 18}}>Wedding Dress</Text>
                            <Text style={{fontSize: 13, marginTop: 5}}>by Galia Lahav</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: 130, height: 30, borderRadius: 7, backgroundColor: '#f1f1f1', alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={require('../../../resources/red_heart.png')} style={{width: 25, height: 25}}/>
                            <Text style={{fontSize: 12, marginLeft: 5}}>Add to wishlist</Text>                                                    
                        </View>
                    </View>

                    <View style={{height: 72 * listCnt}}>
                        <FlatList
                            scrollEnabled={false}
                            data={this.state.offerDetailsList}
                            keyExtractor={(item, index) => item.index}
                            renderItem={({item}) => <TouchableOpacity
                                onPress={() => this.pushScreen(item)}>
                                <OfferDetailsItem title={item.title} categoryImg={item.categoryImg} price={item.price} youPay={item.youPay} savePrice={item.savePrice} selected={this.state.selectionIndex}/>
                            </TouchableOpacity>}
                        />
                    </View>

                    <View style={[{alignItems: 'center', justifyContent: 'center', marginTop: 10}]}>
                        <Button title={"Buy Offer"} hidden={true} callback={this.onHandledCallback.bind(this)} />
                    </View>

                    <View style={{height: .8, width: deviceWidth, backgroundColor: '#dddddd', marginTop: 20}} />

                    <Text style={{margin: 20}}>
                        Galia Lahav is a bridal and evening couture design house, which masters in the art of creating luxury dresses. Galia Lahav dresses are not modest rather extravagant and intricate in beautiful design.
                    </Text>
                </ScrollView>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    header: {
        position: 'absolute', 
        left: 0, 
        top: 25, 
        height: 35, 
        width: deviceWidth, 
        flexDirection: 'row',
        alignItems: 'center',         
    },
    titleText: {
        textAlign: 'center'
    },
});