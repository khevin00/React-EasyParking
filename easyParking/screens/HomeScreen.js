import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileLocationCard from '../components/ProfileLocationCard';
import SearchBar from '../components/SearchBar';
import ParkingCard from '../components/ParkingCard';
import MapScreen from './MapScreen';
import { UserContext } from '../context/UserContext';
import { getAllParkings } from '../apiCalls/getAllParkings';
import * as Location from 'expo-location';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <ProfileLocationCard
          style={styles.topSection}
          onPress={() => navigation.navigate('SettingScreen')}
          title="Bienvenue"
          information={user}
          icon="account"
        />
        <SearchBar />
      </View>

      <MapScreen style={styles.map} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#151A23',
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20%',
    paddingBottom: '5%',
  },
  map: {
    width: '100%',
    height: '70%',
  },
  parkingList: {
    flex: 1,
    backgroundColor: '#151A23',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  listTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
