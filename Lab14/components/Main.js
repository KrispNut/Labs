// Main.js

import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

class Main extends React.Component {
  state = {
    name: '', // Initialize name state
  };

  onPress = () => {
    // Navigate to Chat screen with the provided name
    this.props.navigation.navigate('Chat', { name: this.state.name });
  };

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter your Name:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: offset,
    fontSize: offset,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
});

export default Main;
