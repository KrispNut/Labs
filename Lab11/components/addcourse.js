import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';

export default function AddCourse({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const handlePress = () => {
    if (text.trim().length > 0) {
      submitHandler(text.trim());
      setText('');
    } else {
      alert('Course name should not be empty!');
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder='Course name'
        onChangeText={changeHandler}
        value={text}
      />
      <Button color='#e83059' onPress={handlePress} title='Add Course' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
