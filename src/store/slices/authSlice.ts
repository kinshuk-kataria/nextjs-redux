import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

type sliceState = {
  authState: boolean;
  authUser: string;
} | null;

const initialState: sliceState = {
  authState: false,
  authUser: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.authState = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      };
    }
  }
});

export const { setAuthState, setAuthUser } = authSlice.actions;

export default authSlice.reducer;
