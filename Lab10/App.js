import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/header';
import Course from './components/course';
import AddCourse from './components/addcourse';
export default function App() {
  const [courses, setCourses] = useState([
    { name: 'programmingI', key: '1' },
    { name: 'mobileAppDevelopment', key: '2' },
    { name: 'natural language processing', key: '3' },
  ]);
  const pressHandler = (key) => {
    setCourses((prevCourses) => {
      return prevCourses.filter((courses) => courses.key != key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 5) {
      setText('');
      setCourses((prevCourses) => {
        return [{ name: text, key: Math.random().toString() }, ...prevCourses];
      });
    } else {
      Alert.alert('OOPS', 'Courses must be atleast5 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddCourse submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={courses}
              renderItem={({ item }) => (
                <Course item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
