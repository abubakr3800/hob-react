import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOffers = createAsyncThunk('offers/getOffers',async (lan)=>{
    const api = await fetch("https://api.hobitourstravel.com/offer/all/"+lan)
    const res = await  api.json()
    return (res.data)
    }
)
export const offersSlice = createSlice({
    name: 'offers',
    initialState : [],
    reducers:{

    },
    extraReducers :(builder)=> {
        builder.addCase(getOffers.fulfilled,(state,action)=>{
            state = action.payload
            return state
        })
    }
})

export default offersSlice.reducer