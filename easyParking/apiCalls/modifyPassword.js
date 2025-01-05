import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.0.111:3001';

export const modifyPassword = async (username, newPassword) => {
  try {
    const jwtToken = await AsyncStorage.getItem('userToken'); // Récupérer le jeton JWT

    if (!jwtToken) throw new Error('Utilisateur non authentifié');
    // Mise à jour du mot de passe via l'API
    const updateResponse = await axios.patch(`${API_BASE_URL}/user/me`, {
      username, 
      password: newPassword,
    },
    {
        headers: {
          Authorization: `Bearer ${jwtToken}`, // Ajouter le JWT dans l'en-tête
        }
    });

    if (updateResponse.status !== 204) {
      throw new Error('Échec de la mise à jour du mot de passe');
    }

    return { success: true }; 
  } catch (error) {
    throw new Error(error.response?.data || 'Une erreur est survenue');
  }
};
