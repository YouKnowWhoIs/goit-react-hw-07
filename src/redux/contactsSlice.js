import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filters: {
    name: "",
  },
};

const contactSlice = createSlice({
  name: "contacts", // case "contacts/...":
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    }, // case "contacts/addContact":
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    }, // case "contacts/deleteContact":
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
