import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => {
      return (state = action.payload);
    },
  },
  extraReducers: {
    [logOut.fulfilled](state) {
      return (state = '');
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
