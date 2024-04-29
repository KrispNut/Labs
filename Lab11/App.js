import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';

import Header from './components/header';
import Course from './components/course';
import AddCourse from './components/addcourse';
import Homepage from './screens/Homepage';

const getFonts = async () => {
  await Font.loadAsync({
    'oswald-regular': require('./assets/fonts/Oswald-VariableFont_wght.ttf'),
    'nunito-bold': require('./assets/fonts/Workbench-Regular-VariableFont_BLED,SCAN.ttf'),
  });
};

export default function App() {
  const [courses, setCourses] = useState([
    { name: 'Mobile Application Development', id: '1' },
    { name: 'Web Application Development', id: '2' },
    { name: 'Machine Learning', id: '3' },
  ]);

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFontsAndHideSplash() {
      await getFonts();
      setFontsLoaded(true);
      if (SplashScreen.hideAsync) {
        SplashScreen.hideAsync();
      }
    }
    loadFontsAndHideSplash();
  }, []);

  const pressHandler = (key) => {
    setCourses(prevCourses => {
      return prevCourses.filter(course => course.id !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 5) {
      // Remove the setText function and set the text directly to an empty string
      setCourses(prevCourses => {
        return [
          { name: text, id: Math.random().toString() },
          ...prevCourses
        ];
      });
    } else {
      Alert.alert('Error', 'Courses length should be at least 5 characters', [{ text: 'Got It', onPress: () => console.log('alert closed') }]);
    }
  };
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <SafeAreaView style={styles.content}>
          <AddCourse submitHandler={submitHandler} />
          <SafeAreaView style={styles.list}>
            <FlatList
              data={courses}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Course item={item} pressHandler={pressHandler} />
              )}
            />
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    textAlign: 'center',
    flexDirection: 'column',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
