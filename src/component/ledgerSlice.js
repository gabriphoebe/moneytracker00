import { createSlice } from '@reduxjs/toolkit';

export const ledgerSlice = createSlice({
    name: 'ledger',
    initialState: {
        entries: [],
        entry: {}
    },
    reducers: {
        fetchEntry: (state) => {
            
        },
        createEntry: (state) => {
            

        },
    }
});