import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.0.111:3001';

export const getAllCarsByUser = async () => {
  try {
    const jwtToken = await AsyncStorage.getItem('userToken'); // Récupérer le JWT token
    if (!jwtToken) throw new Error('Utilisateur non authentifié');

    const response = await axios.get(`${API_BASE_URL}/car/me`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    if (response.status === 200) {
      return response.data; // Retourne les données des voitures
    } else {
      throw new Error('Impossible de récupérer les voitures');
    }
  } catch (error) {
    throw error;
  }
};
