import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPortal } from 'shared/types';

export const initialState: IPortal = {
  username: 'd',
};

export const portalSlice = createSlice({
  name: 'portal',
  initialState,
  reducers: {
    signin: (state: IPortal, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    signout: (state: IPortal) => {
      state.username = '';
    },
  },
});

export const { signin, signout } = portalSlice.actions;
export default portalSlice.reducer;
