import {createSlice} from "@reduxjs/toolkit";
import BookingData from "../BookingData";
//import { act } from "react";

const initialState = BookingData;
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        delateUser(state,action){
            return state.filter((user)=>user.id !== action.payload)
        },
        updateUser(state,action){
            const user = state.find(u=>u.id === action.payload.id)
            if (user){
                user.name=action.payload.name;
                user.phone=action.payload.phone;
                user.fromPlace=action.payload.fromPlace;
                user.toPlace=action.payload.toPlace;
                user.type=action.payload.type;
                user.date=action.payload.date;
                user.time=action.payload.time;
            }
        }
    },
})
export default userSlice.reducer;
export const {addUser, delateUser, updateUser} = userSlice.actions;