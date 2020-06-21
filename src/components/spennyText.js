import React, { Component } from 'react'
import { View, Text } from 'react-native'
import * as Font from 'expo-font';

class SpennyText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            'Avenir-Black': require('../../assets/fonts/Avenir-Black.otf'),
            'Avenir-Heavy': require('../../assets/fonts/Avenir-Heavy.otf'),
            'Avenir-Roman': require('../../assets/fonts/Avenir-Roman.otf'),
            'Avenir-Medium': require('../../assets/fonts/Avenir-Medium.otf')
        })
        this.setState({ fontLoaded: true });
    }
    
    render() {
        if (this.state.fontLoaded) return <Text {...this.props}>{this.props.children}</Text>
        else return <Text>{this.props.children}</Text> 
    }
}

export default SpennyText;
