import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const contactsSliceNew = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,    
        [deleteContact.rejected]: handleRejected,

        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },

        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(contact => contact.id === action.payload.id);
            state.items.splice(index, 1);
        },
    }
});

export const contactsReducer = contactsSliceNew.reducer;


// export const {fetchInProgress, fetchSuccess, fetchError } = contactsSliceNew.actions;

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: { contacts: initialContactsState },
//     reducers: {
//         addContact: {
//             reducer (state, action) {
//             state.contacts.push(action.payload);
//             },
//             prepare(name, number) {
//                 return {
//                     payload: {
//                         name,
//                         number,
//                         id: nanoid(),
//                     },
//                 };
//             },
//         },
        
//         deleteContact(state, action) {
            // const index = state.contacts.findIndex(contact => contact.id === action.payload);
            // state.contacts.splice(index, 1);
//         },        
//     },   
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

// const persistConfig = {
//     key: 'contacts',
//     storage,
// };
  
// export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);