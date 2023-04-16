import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormCard } from 'types/interfaces';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    cards: [] as IFormCard[],
  },
  reducers: {
    setFormCard(state, action: PayloadAction<IFormCard>) {
      state.cards.push(action.payload);
    },
  },
});

export const { setFormCard } = formSlice.actions;
export default formSlice.reducer;
