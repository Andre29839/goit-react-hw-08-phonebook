import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  postContact,
  removeContact,
  redactionContact,
} from 'service/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const result = postContact(contact);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const result = removeContact(id);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const redactContact = createAsyncThunk(
  'contacts/redactContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = redactionContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
