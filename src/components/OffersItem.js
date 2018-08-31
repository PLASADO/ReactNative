import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Platform
} from "react-native";

export default class OffersItem extends Component {
    render() {
        return (
            <View style={[{height: 200, width: 135, marginLeft: 20, borderRadius: 7}, styles.elevationLow1]}>
                <ImageBackground source={ this.props.bgImg } style={{flex: 1, resizeMode: 'stretch', borderRadius: 7}} imageStyle={{borderRadius: 7}}>
                    <View style={{position: 'absolute', top: 90, left: 0, width: 135, height: 110, backgroundColor: '#ec2727bd', borderRadius: 7}}>
                        <Text style={[{fontSize: 13, marginTop: 35}, styles.textStyle]}>{this.props.title}</Text>
                        <Text style={[{fontSize: 11}, styles.textStyle]}>{this.props.sub}</Text>
                        <Text style={[{fontSize: 13, marginTop: 15}, styles.textStyle]}>Save up to €{this.props.price}</Text>
                    </View>

                    <Image source={ this.props.imageUri } style={{ position: 'absolute', top: 70, left: 10, height: 40, width: 40 }} />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white', 
        marginLeft: 10
    },
    elevationLow1: {
      ...Platform.select({
        ios: {
          shadowColor: 'lightgrey',
          shadowOffset: { width: 1, height: 3 },
          shadowOpacity: 5,
        },
        android: {
          elevation: 5,
        },
      }),
    },
});