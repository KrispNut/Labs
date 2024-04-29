import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
export default function AddCourse({ submitHandler }) {
  [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="add a new course"
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        color="#e83059"
        onPress={() => submitHandler(text)}
        title="add 
course"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius: 20,
  },
});
