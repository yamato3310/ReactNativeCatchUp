import React from 'react';
import { StyleSheet, View } from 'react-native';
import Post_button from './post_button';
import Text_area from './text_area';

function Post() {
  return (
    <View>
      <Text_area style={styles.container} />
      <Post_button style={styles.container} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 256,
  }
});

export default Post;
