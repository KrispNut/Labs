import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyle.js';
export default function Home({ navigation }) {
const [details, setDetails] = useState([
{ title: 'Introduction to computing', rating: 5, body: 'computing', key: '1'
},
{ title: 'Discrete Maths', rating: 4, body: 'maths', key: '2' },
{ title: 'Mobile App Development', rating: 5, body: 'mobile', key: '3' },
]);
return (
<View style={globalStyles.container}>
<FlatList data={details} renderItem={({ item }) => (
<TouchableOpacity onPress={() => navigation.navigate('BookDetails', 
item)}>
<Text style={globalStyles.titleText}>{ item.title }</Text>
</TouchableOpacity>
)} />
</View>
);
}
