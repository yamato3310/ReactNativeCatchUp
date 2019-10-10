import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Styles from './Styles';
import Header from './Header';

export default App = () => {
    const { parentComponent } = Styles;
    return (
        <KeyboardAvoidingView style={parentComponent} behavior="padding" enabled>
            <Header />
        </KeyboardAvoidingView>
    );
}
