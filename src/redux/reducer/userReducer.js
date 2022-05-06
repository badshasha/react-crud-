
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value : [] }

const userSlicer = createSlice({
    name : "user",
    initialState : initialState,
    reducers : {
        addRange : (state,action) => {    
            state.value = [];            
            state.value = state.value.concat(action.payload);
        },
        addOne : (state,action) => {    
           
           state.value = [];
           state.value.push(action.payload);
        },
        addNew : (state,action) => {
            state.value.push(action.payload);
        },
        remove : (state,action)=> {
            state.value = state.value.filter(object => object.id != action.payload );
        }

    }
})


export const  { addRange ,addOne ,addNew , remove } = userSlicer.actions;
export default userSlicer.reducer;
