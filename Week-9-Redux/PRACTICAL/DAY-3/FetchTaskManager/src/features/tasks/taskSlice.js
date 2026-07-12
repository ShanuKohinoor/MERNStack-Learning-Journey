import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const initialState={
    list : [],
    loading: false,
    error: null
}

export const fetchTask = createAsyncThunk(
    'task/fetchTask',               //label for the task to identify
    async ()=>{
        const response = await axios.get('https://dummyjson.com/todos')
         return response.data.todos                    // Real data from public server.This will go to action.payload
    }
)

const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{             // It must be a fucntion and must recieve arrow function
        builder.addCase(fetchTask.pending,(state)=>{       // builder:- Helper object  given by Redux to handle async actions safely.Used to define rules.
         state.loading = true
         state.error = null
        })                                              //extrareducer:- 
        builder.addCase(fetchTask.fulfilled,(state,action)=>{
            state.loading = false
            state.list = action.payload
            state.error = null
        })

        builder.addCase(fetchTask.rejected,(state)=>{
            state.loading = false
            state.error = action.error.message
        })
    }                                               
})


export default taskSlice.reducer