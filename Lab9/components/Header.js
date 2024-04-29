import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function Header() {
  return(
    <SafeAreaView style ={styles.header}>
    <Text style = {styles.title}>My Courses</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: 'coral',
  },

  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});