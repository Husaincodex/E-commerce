import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import authReducer from './authReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
});

export default store;
