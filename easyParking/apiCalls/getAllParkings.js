import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.111:3001';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllParkings = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (!token) throw new Error('Token non disponible');
    
    const response = await axios.get(`${API_BASE_URL}/parking/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Erreur lors de la récupération des parkings');
    }
  } catch (error) {
    if (error.response) {
      // Erreurs renvoyées par le serveur
      console.error('Erreur API:', error.response.status, error.response.data);
    } else if (error.request) {
      // Requête envoyée mais pas de réponse
      console.error('Aucune réponse du serveur:', error.request);
    } else {
      // Erreur lors de la configuration de la requête
      console.error('Erreur lors de la configuration:', error.message);
    }
    throw error;
  }
  
};

