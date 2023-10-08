import { useEffect, useState } from "react";
// import { data } from "./database/Data";
import { useDispatch, useSelector } from "react-redux";


// coustom Hook

import { useFetchQuestion } from "../hooks/FetchQuestion";
//import { updateResultAction } from "../Redux/ResultReducer";
import { updateResult } from "../hooks/setResult";



export default function Questions({onChecked}) {
  const [checked, setChecked] = useState(undefined);
  const {trace} = useSelector(state=>state.questions)
  const result = useSelector(state => state.result.result)

 const [{isLoading,apiData,serverError}]=  useFetchQuestion()

  // const question = data[0];

  const questions=   useSelector(state => state.questions.queue[state.questions.trace])
  //const trace = useSelector(state => state.questions.trace)
console.log({trace,checked});
    const dispatch=useDispatch()
  useEffect(()=>{
       // console.log( questions );
       dispatch(updateResult({trace,checked}))
  },[checked])



  function onSelect(i) {
    // setChecked(true);
    console.log("radio button Clicked");
    onChecked(i)
    setChecked(i)
  }


if(isLoading) return <h3 className="text-light">isLoading</h3>
if(serverError) return <h3 className="text-light">{serverError || "Unknown Error" }</h3>


  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={()=> onSelect(i)}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className={`check ${result[trace] == i ? 'checked' : ''}`} ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
