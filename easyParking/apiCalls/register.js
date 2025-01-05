import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

const API_BASE_URL = 'http://192.168.0.111:3001';

export const register = async ({ firstname, lastname, username, password, dateOfBirth }) => {
    
        const formatDate = (dateOfBirth) => dayjs(dateOfBirth).format('YYYY-MM-DD');
  try {
    const response = await axios.post(`${API_BASE_URL}/user/registration`, {
        name: lastname,
        firstname : firstname,
        date_of_birth: formatDate(dateOfBirth),
        username : username,
        password : password,
        avatar: false,
    });

    if (response.status === 201) {
      return response.data; // Retourne les données de l'utilisateur
    }
  } catch (error) {
    throw new Error(error.response?.data || "Erreur d'inscription");
  }
};
