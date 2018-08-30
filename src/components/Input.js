import React from 'react';
import {Text, View, StyleSheet, TextInput, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width

export const Input = (props) => {

    return (
        (props.index === 0) ? 
        <View style={[styles.user_infor, styles.viewSpace]}>
            <Text style={styles.top_tip}>{props.title}</Text>
            <TextInput style={[styles.text_input]}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#7a7a7a"
                autoCapitalize = "none"
                value={props.value} />

            <View style={styles.line}/>
        </View> :
                
        <View style={[styles.user_infor, styles.viewSpace, {flexDirection: 'row'}]}>
            <View style={{width: deviceWidth / 2 - 40}}>
                <Text style={{color: '#7a7a7a', fontSize: 12}}>{props.title}</Text>
                <TextInput style={[styles.text_input]}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "#7a7a7a"
                    autoCapitalize = "none"
                    value={props.value} />

                <View style={[{backgroundColor: '#7a7a7a', height: 0.3}]}/> 
            </View>
            <View style={{width: 20}} />
            <View style={{width: deviceWidth / 2 - 40}}>
                <Text style={{color: '#7a7a7a', fontSize: 12}}>{props.title1}</Text>
                <TextInput style={[styles.text_input]}
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "#7a7a7a"
                    autoCapitalize = "none"
                    value={props.value1} />

                <View style={[{backgroundColor: '#7a7a7a', height: 0.3}]}/> 
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    user_infor: {
        flexDirection: 'column',
        height: 60
    },
    text_input: {
        flex: 1, 
        height: 40, 
        color: 'black'
    },
    line: {
        backgroundColor: '#7a7a7a', 
        height: 0.3
    },
    top_tip: {
        color: '#7a7a7a', 
        fontSize: 12
    },
    viewSpace: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15
    }
});

