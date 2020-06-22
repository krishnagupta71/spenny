import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from '../utilities/fontScaling';
import Text from '../components/spennyText'
let appConfig = require('../../appConfig');
import { Ionicons } from '@expo/vector-icons';

class SpennyPicker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View elevation={5} style={[styles.container, styles.boxWithShadow]}>
                <Text style={styles.smallText}>Monthly</Text>
                <Ionicons name="ios-arrow-down" size={moderateScale(12)} color={appConfig.LIGHT_GRAY_TEXT_COLOR} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    smallText: {
        fontFamily: 'Avenir-Heavy',
        fontSize: moderateScale(12),
        letterSpacing: moderateScale(0.1),
        color: appConfig.LIGHT_GRAY_TEXT_COLOR
    },
    boxWithShadow: {
        shadowColor: "rgba(120,120,120,0.37)",
        shadowOffset: { width: moderateScale(0), height: moderateScale(0) },
        shadowOpacity: moderateScale(12), //blur
        shadowRadius: moderateScale(0), //spread
    },
    container: {
        backgroundColor: 'white',
        height: "70%",
        width: "100%",
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(20),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: moderateScale(10)
    },
});

export default SpennyPicker;
