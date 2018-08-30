import React, { Component } from "react";
import { View, Text, Image, StatusBar, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
// import styles from './styles';
import Swiper from '../../components/Swiper';
import Button from '../../components/Button';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

let dataOnboarding = [
    {
        title: "Plasado Step 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Plasado Step 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Plasado Step 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];
export default class QallupOnboarding extends Component {
    constructor() {
        super();
        
        this.state = {
            index: 0
        };
    }
    static navigationOptions = {
        header: null
    }

    onActionLogin = () => {
        this.props.navigation.navigate("Login")
    }

    onHandledCallback() {
        let { index } = this.state;
        if (index === dataOnboarding.length - 1) {
            this.props.navigation.navigate("Signup")
        } else {
            this.refs.Swiper.scrollBy(1);
        }
    }
    renderItem(item) {
        return (
            <View key={item.title} style={styles.slide}>
                <View style={styles.roundImg}>
                </View>
                <Text style={{color: '#190310', fontWeight: 'bold', fontSize: 15, marginTop: 50}}>{item.title}</Text>
                <Text style={{width: 300, textAlign: 'center', marginTop: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </View>
        );
    }
    onMomentumScrollEnd(e, state, content) {
        this.setState({
            index: state.index
        })
    }
    render() {
        let listPages = dataOnboarding.map((item) => {
            return this.renderItem(item);
        });
        let { index } = this.state;
        console.log("index === " + index);
        return (<View style={styles.container}>
            <Swiper
                activeDotColor={"#ec2727"}
                style={styles.wrapper}
                showsButtons={false}
                onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                ref="Swiper" >
                {listPages}
            </Swiper>
            <View style={styles.containerFooter}>
                <Button title={(index === (dataOnboarding.length - 1)) ? "Join" : "Continue"} callback={this.onHandledCallback.bind(this)} />

                <TouchableOpacity onPress={() => this.onActionLogin()}>
                    <Text style={{fontSize: 12, alignItems: 'center', marginTop: 25}}>
                        <Text style={{color: '#7f7f7f'}}>Already have an account? </Text>
                        <Text style={{color: '#ed2a2d'}}>Login</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    roundImg: {
        width: 210, height: 210, backgroundColor: 'white', borderRadius: 105
    },
    backgroundImg: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa'
    },
    textColor: {
        color: '#4D4D4D'
    },
    containerFooter: {
        paddingTop: 40,
        paddingBottom: 35,
        alignItems: 'center',
        backgroundColor: '#fafafa'
    }

});