import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [students, setStudents] = useState([
    {name:'Abid, Arslan',id:'1'},
    {name:'Asad, Momina Binte',id:'2'},
    {name:'Asad, Muhammad M.',id:'3'},
    {name:'Fatima, Dua',id:'4'},
    {name:'Farrukh, Annas A.',id:'5'},
    {name:'Gill, Sahul S.',id:'6'},
    {name:'Qaderi, Muhammad Faizan A.',id:'7'},
    {name:'Rabbi, Sarim',id:'8'},
    {name:'Tir Raazia, Eisha',id:'9'},
    {name:'Mujahid, Hajra',id:'10'},

  ]);

  const pressHandler = (id) => {
    console.log(id);
    setStudents((prevStudents) => {
      return prevStudents.filter((student) => student.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.id)}>
            <Text style={styles.text}> {item.name} </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    marginTop: 60,
    padding: 20,
    backgroundColor: '#e83059',
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
  },
});

export default App;
