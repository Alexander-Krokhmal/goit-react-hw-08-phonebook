import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://639bfed042e3ad692724172b.mockapi.io/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, phone });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });


    
// import { fetchInProgress, fetchSuccess, fetchError } from './contactsSlice';
    
// export const fetchContacts = () => async dispatch => {
//     try {
//         dispatch(fetchInProgress());
//         const response = await axios.get('/contacts');
//         dispatch(fetchSuccess(response.data));
//     } catch (error) {
//         dispatch(fetchError(error.message));
//     }
// }