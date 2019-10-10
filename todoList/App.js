import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/components/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Main style={styles.main} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  main: {
    paddingTop: 20,
  }
});
