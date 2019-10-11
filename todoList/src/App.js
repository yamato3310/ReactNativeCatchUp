import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Styles from './Styles';
import Header from './Header';
import Main from './Main';


export default App = () => {
    const { parentComponent } = Styles;
    return (
        <KeyboardAvoidingView style={parentComponent} behavior="padding" enabled>
            <Header />
            <Main />
        </KeyboardAvoidingView>
    );
}
