import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Course({pressHandler, item}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item}>
                <FontAwesome5 name='phoenix-framework' size={30} color='black'/>
                <Text style={styles.item}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
  
    },
    itemText: {
        marginLeft: 10,
    },

});