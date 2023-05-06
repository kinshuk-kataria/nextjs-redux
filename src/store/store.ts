import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import commentReducer from './slices/commentSlice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      comment: commentReducer
    }
  });

export const wrapper = createWrapper(makeStore);
