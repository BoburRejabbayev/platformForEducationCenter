// import { combineReducers } from 'redux';
import userSlice from './profileSlice'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    userSlice: userSlice,
  }
});

export default store;