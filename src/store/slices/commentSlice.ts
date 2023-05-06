import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface sliceState {
  value: Array<{
    comment: string;
    username: string;
  }>;
}
const initialState: sliceState = {
  value: [
    {
      comment: 'This owl is killer',
      username: 'Beerus'
    },
    {
      comment: 'Dangerous owl',
      username: 'Krillen'
    }
  ]
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.value = [...state.value, action.payload];
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.comments
      };
    }
  }
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
