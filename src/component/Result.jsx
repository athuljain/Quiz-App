import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../Redux/Question_reducer";
import { resetResultAction } from "../Redux/ResultReducer";
import { useEffect } from "react";
import { attempts_Number,earnPoints_Number,flagResult } from "../helper/Helper";
export default function Result() {


const dispatch = useDispatch()
const {questions : {queue,answers}, result :{result,userId}} = useSelector(state => state)

useEffect(()=>{
  console.log(attempts);
})

const totalPoints = queue.lenght * 10
const attempts = attempts_Number(result)
const earnPoints = earnPoints_Number(result,answers,10)
const flag = flagResult(totalPoints,earnPoints)

  function onRestart() {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
    console.log("on Restart");
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>UserName :</span>
          <span className="bold">athul </span>
        </div>
        <div className="flex">
          <span>Total Quize Points :</span>
          <span className="bold">{totalPoints || 0} </span>
        </div>

        <div className="flex">
          <span>Total Questions :</span>
          <span className="bold">{queue.lenght || 0} </span>
        </div>
        <div className="flex">
          <span>Total attempts :</span>
          <span className="bold">{attempts || 0} </span>
        </div>
        <div className="flex">
          <span>total earn points :</span>
          <span className="bold">{earnPoints || 0} </span>
        </div>
        <div className="flex">
          <span>Quize Result</span>
          <span style={{color : `${flag ? "#2aff95" : "#ff2a66"}`}} className="bold">{flag ? "Passed" : "Failed" } </span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
}
