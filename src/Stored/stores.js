


import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer"

export const store = configureStore({
    reducer:{
        cartslice:CartReducer,
    }
})



// iski vajah se 2 house proble face krna pdi ek choti si mistake ki wajh se 

// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import CartReducer from "./CartSlicer"

// export const store = configureStore({
//     reducer:{
//         createSlice : CartReducer
//     }
// })
