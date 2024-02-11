import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";

const appStore = configureStore({
    reducer:{
        fav : favoriteSlice
    }
})

export default appStore
