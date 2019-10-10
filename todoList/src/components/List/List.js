import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from './row';

function List() {
  return (
    <View style={styles.container}>
      <Row style={styles.row} />
      <Row style={styles.row} />
      <Row style={styles.row} />
      <Row style={styles.row} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    paddingLeft: 10,
  },
  row: {
    marginBottom: 10,
  }
});

export default List;
