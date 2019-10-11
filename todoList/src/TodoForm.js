import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'native-base';
import Styles from './Styles';

export default TodoForm = () => {
    const [value, onChangeText] = React.useState('input todo...');
    const { todoForm } = Styles;
    return (
        <View style={{ alignItems: 'center' }}>
            <TextInput
                style={todoForm}
                value={value}
                clearTextOnFocus={true}
                onChangeText={text => onChangeText(text)}
            ></TextInput>
            <Icon type="Feather" name='plus' onPress={}></Icon>
        </View>
    )
}
