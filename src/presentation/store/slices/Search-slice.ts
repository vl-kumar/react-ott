import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  searchTerm: string;
  isSearchMode: boolean;
}

export interface Action {
  searchTerm: string;
}

export interface SearchAction {
  isSearchMode: boolean;
}

const initialState: SearchState = {
  isSearchMode: false,
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleSearchMode(state, action: PayloadAction<SearchAction>) {
      state.isSearchMode = action.payload.isSearchMode;
    },
    search(state, action: PayloadAction<Action>) {
      state.searchTerm = action.payload.searchTerm;
    },
    clean(state) {
      state.searchTerm = "";
    },
  },
});

export const { search, clean, toggleSearchMode} = searchSlice.actions;
export default searchSlice.reducer;