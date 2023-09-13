import { combineReducers, configureStore } from "@reduxjs/toolkit";

import QuestionReducer from "./Question_reducer";
import { ResultReducer } from "./ResultReducer";

const rootReducer = combineReducers({
  questions: QuestionReducer,
  result: ResultReducer,
});

export default configureStore({ reducer: rootReducer });
