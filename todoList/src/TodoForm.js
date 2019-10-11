import React from 'react';
import { View, TextInput } from 'react-native';
import Styles from './Styles';

export default TodoForm = () => {
    const [value, onChangeText] = React.useState('input todo...');
    const { todoForm } = Styles;
    return (
        <View style={{ alignItems: 'center' }}>
            <TextInput
                style={todoForm}
                value={value}
                onChangeText={text => onChangeText(text)}
            ></TextInput>
        </View>
    )
}
