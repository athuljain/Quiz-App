import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../Redux/ResultReducer";
import "../styles/Main.css"

export default function Main() {
  const inputRef = useRef(null);
  // const [userName, setUserName] = useState(""); // Add state for input value

  // const handleInputChange = (event) => {
  //   setUserName(event.target.value); // Update the input value
  // };

  const dispatch=useDispatch()

  function startQuiz(){ 
      if(inputRef.current?.value){
          dispatch(setUserId(inputRef.current?.value)
          )
      }
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <ol className="orderd-list-main">
        <li className="main-li">You will be asked 10 questions one after another</li>
        <li className="main-li">10 points are awarded for the correct answer</li>
        <li className="main-li">Each question has three options. You can choose only one option</li>
        <li className="main-li">You can review and change answers before the quiz finishes</li>
        <li className="main-li">The result will be declared at the end of the quiz</li>
      </ol>
      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          type="text"
          placeholder="User Name*"
        />
      </form>
      <div className="start">
        <Link className="btn" onClick={startQuiz} to="/quiz">
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
