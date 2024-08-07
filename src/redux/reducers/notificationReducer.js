import {createSlice} from '@reduxjs/toolkit'
import { actions, todoActions } from './todoReducer';
import { noteActions } from './noteReducer';

const initialState={
    message:""
}

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
        reset:(state,action)=>{
            state.message="";
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(todoActions.add,(state,action)=>{
            state.message = "todo created"
        })
        builder.addCase(noteActions.add,(state,action)=>{
            state.message = "todo created"
        })
        builder.addCase(noteActions.delete,(state,action)=>{
            state.message = "todo deleted"
        })
    }
});

export const notificationReducer = notificationSlice.reducer;
export const {reset} =  notificationSlice.actions;
export const notificationSelector = (state)=>state.notificationReducer.message;
