import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Text_content() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>aaa</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
  },
  text: {
    fontSize: 24,
  },
});
export default Text_content;
