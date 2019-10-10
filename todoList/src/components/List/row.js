import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text_content from './text_content';
import Delete_button from './delete_button';
import Done_button from './done_button';

function Row() {
  return (
    <View style={styles.container}>
      <Text_content style={styles.content} />
      <Delete_button style={styles.delete} />
      <Done_button style={styles.done} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 12,
  },
  content: {
    flex: 6,
  },
  delete: {
    flex: 1,

  },
  done: {
    flex: 1,

  },
});
export default Row;
