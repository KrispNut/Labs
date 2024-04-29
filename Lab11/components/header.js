import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

export default function Header(){
    return(
        <SafeAreaView style={styles.header}>

            <Text style={styles.title}>My Courses</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 100,
        paddingTop: 50,
        backgroundColor: '#e83059',
        width: 500,
        marginTop: 140,
    },

    title: {
        padding: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
});