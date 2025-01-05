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
import { haversine } from '../context/haversine';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [location, setLocation] = useState(null);
  const [sortedParkings, setSortedParkings] = useState([]);

  // Récupération de la localisation et des parkings
  useEffect(() => {
    (async () => {
      try {
        // Obtenir la position actuelle de l'utilisateur
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission refusée', 'Impossible d\'accéder à la localisation.');
          return;
        }
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);

        // Récupérer les parkings depuis l'API
        const fetchedParkings = await getAllParkings();

        // Calculer la distance pour chaque parking
        const parkingsWithDistance = fetchedParkings.map((parking) => {
          const [lat, lon] = parking.coordinates.split(',').map(Number);
          return {
            ...parking,
            distance: haversine(
              currentLocation.coords.latitude,
              currentLocation.coords.longitude,
              lat,
              lon
            ),
          };
        });

        // Trier les parkings par distance
        parkingsWithDistance.sort((a, b) => a.distance - b.distance);
        setSortedParkings(parkingsWithDistance);
      } catch (error) {
        Alert.alert('Erreur', 'Impossible de récupérer les parkings.');
      }
    })();
  }, []);

  // Fonction pour afficher chaque parking dans une carte
  const renderParking = ({ item }) => (
    <ParkingCard
      title={item.name}
      info={item.telephone}
      distance={`${item.distance.toFixed(1)} km`}
      travelTime={`${(item.distance / 0.3).toFixed(0)} min`} // Hypothèse : 0.3 km/min
      freePlaces={`${item.places} libres`}
      opening={item.opening}
    />
  );

  return (
    <View style={styles.container}>
      {/* En-tête avec la barre de recherche et les informations utilisateur */}
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

      {/* Carte avec les marqueurs */}
      <MapScreen style={styles.map} />

      {/* Liste déroulante des parkings */}
      {sortedParkings.length > 0 && (
        <View style={styles.parkingList}>
          <Text style={styles.listTitle}>Parkings à proximité</Text>
          <FlatList
            data={sortedParkings}
            renderItem={renderParking}
            keyExtractor={(item) => item.parking_id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
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
    height: '50%',
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
