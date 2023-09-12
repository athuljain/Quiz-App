import { createSlice } from "@reduxjs/toolkit"


export const QuestionReducer= createSlice({
    name:'questions',
    initialState:{
        queue:[],
        answers :[],
        trace :0

    },
    reducers:{
        startExamAction:(state,action)=>{
            return{
                state,
                queue:action.payload
            }
        }
    }
})

export const {startExamAction}=QuestionReducer.actions
export default QuestionReducer.reducer;