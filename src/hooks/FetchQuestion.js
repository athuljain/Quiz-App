import { useEffect, useState } from "react";
import { data } from "../component/database/Data";
import { useDispatch } from "react-redux";
// redux actions
import * as Action from '../Redux/Question_reducer';

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null
  }); // Fixed the useState call

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    // async function to fetch backend data
    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
          setGetData(prev => ({ ...prev, isLoading: false }));
          setGetData(prev=>({...prev,apiData : question}))
          dispatch(Action.startExamAction(question));
        } else {
          throw new Error("No questions available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};
