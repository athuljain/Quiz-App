import { useEffect, useState } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { pushAnswer } from "../hooks/setResult";

// redux store import
import { useSelector,useDispatch } from 'react-redux'
import {Navigate} from 'react-router-dom'



export default function Quiz() {

  const [check,setChecked]=useState(undefined)

    const result=   useSelector(state => state.result.result)
    const {queue,trace}=   useSelector(state => state.questions)
  const dispatch = useDispatch()
    useEffect(()=>{
         console.log(state);
    })




  function onNext() {
    console.log("On next click");
    if(trace < queue.length){
          // update the trace value by one using move next action 
      dispatch(MoveNextQuestion())
      dispatch( pushAnswer(check))
    }

    
  }
  function onPrev() {
    console.log("On Prev click");
    if(trace >0){
      dispatch(MovePrevQuestion())
    }
    
  }


  function onChecked(check){
    console.log(check);
    setChecked(check)
  }
  // finish exam after the last question
  if(result.length && result.length >= trace){
  return <Navigate to={'/result'} replace='true'></Navigate>
  }
  return (
    <div className="container">
      <h1 className="title text-light"> Quiz Application </h1>
      <h3 className="title text-light"> Java Script </h3>
      {/* display questions */}
      <Questions onChecked={onChecked} />
      <div className="grid">
        <button onClick={onPrev} className="btn prev">
          Prev
        </button>
        <button onClick={onNext} className="btn next">
          Next
        </button>
      </div>
    </div>
  );
}
