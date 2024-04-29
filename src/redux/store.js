import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice.js";
import { filterReducer } from "./filtersSlice.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
