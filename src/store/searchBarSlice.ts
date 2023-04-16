import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearchBarState {
  query: string;
}

const searchBarSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
  } as ISearchBarState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchBarSlice.actions;
export default searchBarSlice.reducer;
