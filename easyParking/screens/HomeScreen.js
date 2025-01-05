import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileLocationCard from '../components/ProfileLocationCard';
import SearchBar from '../components/SearchBar';
import MapScreen from './MapScreen';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
  const user = useSelector((state) => state.user.username); 
  const navigation = useNavigation();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#FFF' }}>Chargement des données utilisateur...</Text>
      </View>
    );
  }

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
});
