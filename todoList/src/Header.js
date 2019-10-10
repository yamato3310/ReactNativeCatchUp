import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default Header = () => {
    const { header, headerText } = Styles;
    return (
        <View style={header}>
            <Text style={headerText}>todo list</Text>
        </View>
    )
}