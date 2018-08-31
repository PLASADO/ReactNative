import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform
} from "react-native";

export default class Category extends Component {
    render() {
        return (
            <View style={[{ height: 80, width: 120, marginLeft: 20, borderColor: '#ec2727', borderRadius: 7, backgroundColor: 'white' }, styles.elevationLow1, (this.props.selection === 1) ? {borderWidth: 2} : null]}>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{textAlign: 'center', color: '#ec2727'}}>{this.props.title}</Text>
                </View>

                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image source={this.props.imageUri}
                        style={{ resizeMode: 'stretch', width: 40, height: 30, marginTop: 5}}
                    />
                </View>
                
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