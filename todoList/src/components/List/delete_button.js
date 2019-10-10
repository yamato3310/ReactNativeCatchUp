import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Delete_button() {
  return (
    <View>
      <Button title="削除" style={styles.container} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {

  },
});
export default Delete_button;
