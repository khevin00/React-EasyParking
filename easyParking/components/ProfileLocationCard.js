import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ProfileLocationCard(props){
    return(
        <View style={[styles.container,props.style]}>
        
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="account" size={20} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>{props.title}</Text>
                <Text style={styles.mainText}>{props.information}</Text>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E242D',
    borderRadius: 100,
    padding: 20,
    width: '72%',
    alignSelf: 'center',
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#2C333D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  subtitle: {
    color: '#777',
    fontSize: 14,
  },
  mainText: {
    color: '#FFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
