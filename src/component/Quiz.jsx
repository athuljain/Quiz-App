import { useEffect } from "react";
import Questions from "./Questions";
import { MoveNextQuestion } from "../hooks/FetchQuestion";


// redux store import
import { useSelector,useDispatch } from 'react-redux'




export default function Quiz() {

    const state=   useSelector(state => state.questions.trace)
  const dispatch = useDispatch()
    useEffect(()=>{
         console.log(state );
    })


  function onNext() {
    console.log("On next click");
    // update the trace value by one using move next action 
    dispatch(MoveNextQuestion)
  }
  function onPrev() {
    console.log("On Prev click");
  }

  return (
    <div className="container">
      <h1 className="title text-light"> Quiz Application </h1>
      <h3 className="title text-light"> Java Script </h3>
      {/* display questions */}
      <Questions />
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
