import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice(
    {
        name : 'fav',
        initialState : {
            items : []
        },
        reducers : {
            addFavorite : (state,action) =>{
                state.items.push(action.payload)
            },
            removeFavorite : (state,action) =>{
                const data = state.items.map(item=>item.name.common)
                state.items.splice(data.indexOf(action.payload),1)
            },
            clearFavorite : (state,action) =>{
                state.items.length = 0
            }
        }
    }
)

export default favSlice.reducer

export const {addFavorite,removeFavorite,clearFavorite} = favSlice.actions