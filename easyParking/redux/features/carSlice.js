import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCarsByUser } from '../../apiCalls/getAllCarsByUser';

// Thunk pour récupérer les voitures
export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  try {
    const cars = await getAllCarsByUser();
    return cars.map((car) => car.model); // On ne garde que les modèles
  } catch (error) {
    throw new Error('Erreur lors de la récupération des véhicules');
  }
});

// Slice Redux pour les voitures
const carSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [], // Liste des voitures
    loading: false,
    error: null,
  },
  reducers: {
    addNewCar: (state, action) => {
      state.items.push(action.payload.model); // Ajoute un nouveau modèle à la liste
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addNewCar } = carSlice.actions; 
export default carSlice.reducer; 
