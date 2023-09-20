import { createSlice } from "@reduxjs/toolkit";

export const QuestionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        state,
        queue: action.payload,
      };
    },
    moveNextAction :(state, action)=>{
      return {
        ...state,
        trace: state.trace + 1
      }
    }
  },
});

export const { startExamAction, moveNextAction } = QuestionReducer.actions;
export default QuestionReducer.reducer;
