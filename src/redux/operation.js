import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchingInProgres } from "./contactsSlice";

import axios from "axios";

axios.defaults.baseURL = `https://662a12e767df268010a282d3.mockapi.io`;

// export const featchContacts = () => async (dispatch) => {
//   try {
//     const res = await axios.get("/contacts");
//     dispatch(fetchingInProgres(res.data));
//     console.log(res.data);
//     return res.data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

export const featchContactsThunk = createAsyncThunk(
  "contacts/featchAll",
  async (_, thunkApi) => {
    try {
      const res = await axios.get("/contacts");
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContactsThunk = createAsyncThunk(
  "contacts/removeId",
  async (contactId, thunkApi) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      const res = await axios.get(`/contacts`);

      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);