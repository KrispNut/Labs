import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

export default function Homepage(){
    return(

        <SafeAreaView styles={styles.homepage}>

            <Text styles={styles.title}>
                HOMEPAGE, I AM
            </Text>
            
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    homepage:{
        display: 'flex',
        backgroundColor: 'black',
        color: 'yellow',


    },

    title: {

        textAlign: 'center',
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },
});