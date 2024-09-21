import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDestinations = createAsyncThunk('destinations/getDestinations',async (lan)=>{
    const api = await fetch("https://api.hobitourstravel.com/destination/all/"+lan)
    const res = await  api.json()
    return (res.data)
    }
)
export const destinationsSlice = createSlice({
    name: 'destinations',
    initialState : [],
    reducers:{

    },
    extraReducers :(builder)=> {
        builder.addCase(getDestinations.fulfilled,(state,action)=>{
            state = action.payload
            return state
        })
    }
})

export default destinationsSlice.reducer