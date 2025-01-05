import {React, useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert  } from 'react-native';
import Logo from '../components/LogoAndTitle';
import { useNavigation } from '@react-navigation/native';
import ProfileLocationCard from '../components/ProfileLocationCard';
import ChampField from '../components/ChampField';
import Button from '../components/Button';
import Bar from '../components/PresentationBar';
import { UserContext } from '../context/UserContext';
import ComboboxCar from '../components/ComboboxCar';
import { getAllCarsByUser } from '../apiCalls/getCars';
import { addCar } from '../apiCalls/addCar';

export default function SettingScreen(){
    const navigation = useNavigation();
     const { user, password, setUser, setPass} = useContext(UserContext);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [selectedCar, setSelectedCar] = useState('BMW X1');
    const [cars, setCars] = useState([]);
    const [newVehicle, setNewVehicle] = useState('');
    const [licensePlate, setLicensePlate] = useState('');

     // Récupérer les voitures au chargement
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const fetchedCars = await getAllCarsByUser();
        setCars(fetchedCars.map((car) => car.model)); // Met à jour la liste des voitures
        setSelectedCar(fetchedCars[0]?.model || ''); // Par défaut, sélectionne la première voiture
      } catch (error) {
        Alert.alert('Erreur', 'Impossible de charger les voitures');
      }
    };

    fetchCars();
  }, []);

  const handleAddCar = async () => {
    if (!newVehicle.trim() || !licensePlate.trim()) {
        return navigation.goBack();
    }

    try {
      await addCar(licensePlate, newVehicle, user);
      Alert.alert('Succès', 'Véhicule ajouté avec succès');
      setNewVehicle('');
      setLicensePlate('');
      navigation.goBack(); 
    } catch (error) {
      Alert.alert('Erreur', error.message || 'Une erreur est survenue');
    }
  };

    return(
        <View style={styles.container}>
            <Logo/>
            <ProfileLocationCard style={styles.topSection} title="Bienvenue" information={user} icon="account" />

            <Bar title="Véhicule(s)"/>  
            <ComboboxCar
            label="Véhicule actuel"
            data={cars} // Remplit le combobox avec la liste des voitures
            selectedValue={selectedCar}
            onValueChange={(value) => setSelectedCar(value)}
            />
            <ChampField titleLabel="Nouveau véhicule" titleField="" value={newVehicle}
        onChangeText={setNewVehicle}/>
            <ChampField titleLabel="Plaque d'immatriculation" titleField="" value={licensePlate}
        onChangeText={setLicensePlate}/>
            <Button title="Mettre à jour" color="#52889F" onPress={handleAddCar}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#151A23',
    }
});