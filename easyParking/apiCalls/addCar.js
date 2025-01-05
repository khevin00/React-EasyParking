import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.0.111:3001';

export const addCar = async (licensePlate, model, username) => {
  try {
    const jwtToken = await AsyncStorage.getItem('userToken'); 
    if (!jwtToken) throw new Error('Utilisateur non authentifié');

    const response = await axios.post(
      `${API_BASE_URL}/car/`,
      {
        license_plate: licensePlate,
        model: model,
        username: username,
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`, 
        },
      }
    );

    if (response.status === 201) {
      return response.data; 
    } else {
      throw new Error('Échec de l\'ajout du véhicule');
    }
  } catch (error) {
    throw new Error(error.response?.data || 'Une erreur est survenue');
  }
};
