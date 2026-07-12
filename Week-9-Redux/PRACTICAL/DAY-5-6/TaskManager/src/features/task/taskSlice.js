import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    tasks : [],
    search:'',
    filter: 'all',
    loading: false,
    error:null
}

export const fetchTasks = createAsyncThunk(
    'task/getTask',
     async()=>{
       const res = await axios.get('https://dummyjson.com/todos?limit=10')
       return res.data.todos
    }
)

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers:{
      addTask:(state,action)=>{
        state.tasks.push(action.payload)
      },
      removeTask:(state,action)=>{
       state.tasks= state.tasks.filter((task)=>task.id !== action.payload)
      },
      updateTask:(state,action)=>{
        const index = state.tasks.findIndex((task)=>task.id === action.payload.id)

        if (index!== -1){
            state.tasks[index] = action.payload;
        }
      },
      updateToggle:(state,action)=>{
        const task = state.tasks.find((task)=>task.id === action.payload)
        if(task){
            task.completed = !task.completed
        }
      },
      setSearch:(state,action)=>{
        state.search = action.payload;
      },
      setFilter:(state,action)=>{
        state.filter = action.payload;
      }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchTasks.pending,(state)=>{
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchTasks.fulfilled,(state,action)=>{
                state.tasks = action.payload;
                state.loading = false;
                state.error = null
            })   
            .addCase(fetchTasks.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message
            }) 
            
    }
        
           
})

export const {addTask,removeTask,updateToggle,updateTask,setSearch,setFilter}= taskSlice.actions;
export default taskSlice.reducer