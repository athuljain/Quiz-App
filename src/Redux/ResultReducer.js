import { createSlice } from "@reduxjs/toolkit"


export const ResultReducer= createSlice({
    name :'resul',
    initialState : {
        userId :null,
        result : []
    },
    reducers :{
        setUserId : (state,action)=>{
            state.userId = action.payload
        }
    }
})
    
export const { setUserId} = ResultReducer.actions

export default ResultReducer.reducer