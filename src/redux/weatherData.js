import {createSlice} from '@reduxjs/toolkit'


export const weatherDataSlice=createSlice({
    name:"weather",
    initialState:{
        value:{
            currentData: null
        }
    },
    reducers:{
        currentWeather:(state,action)=>{
state.currentData=action.payload.data
        }
    }
})
export const {currentWeather} = weatherDataSlice.actions;

export default weatherDataSlice.reducer;