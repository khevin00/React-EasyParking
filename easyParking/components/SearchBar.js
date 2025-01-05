import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput,  } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function SearchBar(props){
    const [text, setText] = useState('');
    return(
       <View style={styles.container}>
             <TextInput
               style={styles.input}
               placeholder={"Recherche"}
               placeholderTextColor="#777"
               value={text}
               onChangeText={(newText) => setText(newText)}
               

             />
             <TouchableOpacity style={styles.iconContrainer}>
                <MaterialCommunityIcons name="magnify" size={25} color="white" />
             </TouchableOpacity>
             
           </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E242D',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 50,
        alignSelf: 'center',
        width: '82%',
    },
    input: {
        flex: 1,
        color: 'white',
        textAlign: 'left',
        fontSize: 15
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
  },
  });