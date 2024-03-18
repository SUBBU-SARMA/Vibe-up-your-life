import { configureStore } from '@reduxjs/toolkit';
import favortieReducer from './favorites';

const store = configureStore({
  reducer: {
    favoriteMeals: favortieReducer,
  },
});
