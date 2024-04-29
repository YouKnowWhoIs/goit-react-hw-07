import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const filterContact = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = filterContact.actions;

export const filterReducer = filterContact.reducer;

export const selectNameFilter = (state) => state.filters.filters.name;
