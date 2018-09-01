
import {Dimensions, Platform} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default {
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
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
    line: {
        height: .8, 
        width: deviceWidth - 50, 
        backgroundColor: '#dddddd',
        marginTop: 10, 
        marginLeft: 25,
        marginRight: 25,
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
    offerDetails: {
        flexDirection: 'row',
        height: 60, 
        marginLeft: 25, 
        marginRight: 25, 
        borderRadius: 7, 
        backgroundColor: 'white', 
        marginBottom: 12,
        alignItems: 'center'
    },
    label: {
        color: '#8a8a8a', 
        fontSize: 11
    },
    selectedBorder: {
        borderColor: '#ec2727',
        borderWidth: 2
    },
}