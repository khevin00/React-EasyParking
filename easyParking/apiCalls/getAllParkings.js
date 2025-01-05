import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'http://192.168.0.111:3001';

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
    throw error;
  }
};
