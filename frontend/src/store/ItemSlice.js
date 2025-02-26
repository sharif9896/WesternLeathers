import { createSlice } from '@reduxjs/toolkit'
import { products } from '../assets/assets';
const ItemSlice = createSlice({
    name: 'items',
    initialState: {
        item: [products.slice()],
    },
    reducers: {
        setItems: (state, action) => {
             return action.payload
        },
    }
})

export const itemAction= ItemSlice.actions
export default ItemSlice;
