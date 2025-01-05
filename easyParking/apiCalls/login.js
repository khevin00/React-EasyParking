import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.0.111:3001';

// Fonction de connexion
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, {
      username,
      password,
    });

    // Stocke le token dans AsyncStorage
    if (response.status === 201) {
        const token = response.data; // Assurez-vous que l'API renvoie le token JWT directement
        await AsyncStorage.setItem('userToken', token); 
        // Stocke le token dans AsyncStorage
        return { success: true, token }; // Retourne uniquement ce qui est nécessaire
    }
  } catch (error) {
    throw error;
  }
};

export const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        throw new Error('Aucun token trouvé. Veuillez vous connecter.');
      }
      return token;
    } catch (error) {
      throw error;
    }
  };
  
  // Supprime le token pour la déconnexion
  export const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      return { success: true };
    } catch (error) {
      throw new Error('Erreur lors de la déconnexion.');
    }
  };
