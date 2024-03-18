import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.ids), 1);
    },
  },
});

export const addFavorite = favoriteSlice.reducer.addFavorite;
export const removeFavorite = favoriteSlice.reducer.removeFavorite;
export default favoriteSlice.reducer;
