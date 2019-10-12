import React, { memo } from 'react';
import { View, TextInput, Image, TouchableOpacity, } from 'react-native';
import Styles from './Styles';

export default TodoForm = memo((props) => {
    //const [value, onChangeText] = React.useState('input todo...');
    const { todoForm, todoFormIcon, inputForm } = Styles;
    const { inputValue, changeInput, onIconPress } = props;
    return (
        <View style={todoForm}>
            <TextInput
                style={inputForm}
                placeholder='input your task...'
                placeholderTextColor='#BBBBBB'
                value={inputValue}
                onChange={changeInput}
                onChangeText={props.onInputKeyPress}
            ></TextInput>
            <TouchableOpacity accessible={true} onPress={onIconPress}>
                <Image
                    style={todoFormIcon}
                    source={require('../img/plus.png')}
                />
            </TouchableOpacity>
        </View>
    )
})
