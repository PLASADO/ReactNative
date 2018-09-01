import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';

import {HeaderNavigation} from "../../../components/HeaderNavigation";
import OfferItem from "../../../components/OfferItem";

const purchasedList = [
    {
        index: 1,
        title: "Helicopter Ride",   
        sub: "by United Flights",
        btnText: "Redeem",
        bgImg: require('../../../resources/purchase1.png'),
        categoryImg: require('../../../resources/helicopter.png'),
        statusImg: require('../../../resources/star.png'),
    },
    {
        index: 2,
        title: "Wedding Rings",   
        sub: "by Abuhi Jewels",
        btnText: "Redeem",
        bgImg: require('../../../resources/wishlist2.png'),
        categoryImg: require('../../../resources/jewels.png'),
        statusImg: require('../../../resources/star.png'),
    } 

]

const wishList = [
    {
        index: 1,
        title: "Flower swing",   
        sub: "by Alice in Bohemia",
        btnText: "Buy now",
        bgImg: require('../../../resources/wishlist1.png'),
        categoryImg: require('../../../resources/flowers.png'),
        statusImg: require('../../../resources/follow.png'),
    },
    {
        index: 2,
        title: "Wedding Rings",   
        sub: "by Abuhi Jewels",
        btnText: "Buy now",
        bgImg: require('../../../resources/wishlist2.png'),
        categoryImg: require('../../../resources/jewels.png'),
        statusImg: require('../../../resources/follow.png'),
    },
    {
        index: 3,
        title: "Helicopter Ride",   
        sub: "by United Flights",
        btnText: "Buy now",
        bgImg: require('../../../resources/purchase1.png'),
        categoryImg: require('../../../resources/helicopter.png'),
        statusImg: require('../../../resources/follow.png'),
    }
]
export default class Offers extends Component {


    constructor(props) {
        super(props);

        this.state = {
            purchaseList: purchasedList,
            wishList: wishList
        }
    }

    pushScreen = (item) => {
        this.props.navigation.navigate("OfferVoucher")
    }

    render() {

        var purchasedCnt = this.state.purchaseList.length;
        var wishListCnt = this.state.wishList.length;

        return (
            <View style={{flex: 1}}>
                <HeaderNavigation title={"Offers"} />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.textlabel}>Purchased</Text>

                    <View style={{height: 175 * purchasedCnt}}>
                        <FlatList
                            data={this.state.purchaseList}
                            keyExtractor={(item, index) => item.index}
                            renderItem={({item}) => <TouchableOpacity
                                onPress={() => this.pushScreen(item)}>
                                <OfferItem title={item.title} sub={item.sub} btnText={item.btnText} bgImg={item.bgImg} categoryImg={item.categoryImg} statusImg={item.statusImg} border={true} />
                            </TouchableOpacity>}
                        />
                    </View>

                    <Text style={styles.textlabel}>WishList</Text>

                    <View style={{height: 175 * wishListCnt}}>
                        <FlatList
                            scrollEnabled={false}
                            data={this.state.wishList}
                            keyExtractor={(item, index) => item.index}
                            renderItem={({item}) => <TouchableOpacity
                                onPress={() => this.pushScreen(item)}>
                                <OfferItem title={item.title} sub={item.sub} btnText={item.btnText} bgImg={item.bgImg} categoryImg={item.categoryImg} statusImg={item.statusImg} border={true} />
                            </TouchableOpacity>}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    textlabel: {
        color : 'black', 
        fontSize: 12, 
        marginLeft: 15, 
        marginTop: 20
    }
});