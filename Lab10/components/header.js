import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Courses</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: 70,
    backgroundColor: '#e83059',
    borderRadius: 20,

  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 20,
  },
});
