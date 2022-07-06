import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ICounter {
  counter: number;
}

export const initialState: ICounter = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state: ICounter, action: PayloadAction<number>) => {
      state.counter = state.counter + action.payload;
    },
    subtract: (state: ICounter, action: PayloadAction<number>) => {
      state.counter = state.counter - action.payload;
    },
  },
});

export const {add, subtract} = counterSlice.actions;
export default counterSlice.reducer;
