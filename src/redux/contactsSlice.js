import { createSlice } from "@reduxjs/toolkit";
import { featchContactsThunk, removeContactsThunk } from "./operation";

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

const isPending = (action) =>
  typeof action.type === "string" && action.type.endsWith("/pendding");
const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

const pendingReducer = (state) => {
  state.contacts.loading = true;
  state.contacts.errer = null;
  state.contacts.items = [];
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    //   addContact: (state, action) => {
    //     state.items.push(action.payload);
    //   },
    //   deleteContact: (state, action) => {
    //     state.items = state.items.filter(
    //       (contact) => contact.id !== action.payload
    //     );
    //   },
    // fetchingInProgres: (state) => {
    //   state.loading = true;
    //   state.errer = null;
    //   state.items = [];
    // },
    // fetchingSuccess: (state, action) => {
    //   state.loading = false;
    //   state.errer = null;
    //   state.items = action.payload;
    // },
    // fetchingError: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(featchContactsThunk.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.errer = null;
        state.contacts.items = action.payload;
      })

      .addCase(removeContactsThunk.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.errer = null;
        state.contacts.items = action.payload;
      })

      .addMatcher(isPending, pendingReducer)
      .addMatcher(isRejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const selectContacts = (state) => state.contacts.items;

export const {
  addContact,
  // deleteContact,
  // fetchingInProgres,
  // fetchingSuccess,
  // fetchingError,
} = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
