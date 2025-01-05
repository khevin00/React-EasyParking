import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { darkMapStyle } from '../context/MapStyles';
import { getAllParkings } from '../apiCalls/getAllParkings';

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    (async () => {
      // Demande de permission pour accéder à la localisation
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission refusée');
        return;
      }
  
      try {
        // Récupérer la localisation actuelle
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);

        // Récupérer les parkings depuis l'API
        const fetchedParkings = await getAllParkings();
        setParkings(fetchedParkings);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#FFF' }}>Chargement de la carte...</Text>
      </View>
    );
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      customMapStyle={darkMapStyle}
    >
      {/* Marqueur pour la position de l'utilisateur */}
      <Marker
        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
        title="Vous êtes ici"
      />
      {/* Marqueurs pour les parkings */}
      {parkings.map((parking) => {
        const [lat, lon] = parking.coordinates.split(',').map(Number);
        return (
          <Marker
            key={parking.parking_id}
            coordinate={{ latitude: lat, longitude: lon }}
            title={parking.name}
            description={`Places disponibles : ${parking.places}`}
          />
        );
      })}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151A23',
  },
  map: {
    width: '100%',
    height: '30%',
  },
});
