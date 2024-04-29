import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  featchContactsThunk,
  addContactsThunk,
  removeContactsThunk,
} from "./contactsOps";

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
  state.loading = true;
  state.error = null;
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  // reducers: {
  // addContact: (state, action) => {
  //   state.items.push(action.payload);
  // },
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
  // },

  extraReducers: (builder) => {
    builder
      .addCase(featchContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      .addCase(removeContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addMatcher(isPending, pendingReducer)
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectContacts = (state) => state.contacts.items;

export const selectFilters = (state) => state.filters.filters.name;

// export const {
//   addContact,
// deleteContact,
// fetchingInProgres,
// fetchingSuccess,
// fetchingError,
// } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
