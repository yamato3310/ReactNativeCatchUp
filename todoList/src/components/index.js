import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import List from './List/List';
import Post from './Post/Post';

function Main() {
  return (
    <ScrollView style={styles.container}>
      <List />
      <Post />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    backgroundColor: "yellow",
  },
});
export default Main;