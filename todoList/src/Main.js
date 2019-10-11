import React from 'react';
import { View } from 'react-native';
import Styles from './Styles';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default Main = () => {
    const { main } = Styles;
    return (
        <View style={main}>
            <TodoForm />
            <TodoList />
        </View>
    )
}
