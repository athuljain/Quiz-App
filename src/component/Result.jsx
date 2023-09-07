import { Link } from "react-router-dom"
import ResultTable from "./ResultTable";
export default function Result(){
    function onRestart(){
        console.log('on Restart');
    }
    return(
        <div className="container">
             <h1 className="title text-light" >Quiz Application</h1>

             <div className="result flex-center">
                <div className="flex">
                    <span>UserName :</span>
                    <span className="bold">athul </span>
                </div>
                <div className="flex">
                    <span>Total Quize Points :</span>
                    <span className="bold">50  </span>
                </div>

                <div className="flex">
                    <span>Total Questions :</span>
                    <span className="bold">05 </span>
                </div>
                <div className="flex">
                    <span>Total attempts :</span>
                    <span className="bold">03 </span>
                </div>
                <div className="flex">
                    <span>total earn points :</span>
                    <span className="bold">30 </span>
                </div>
                <div className="flex">
                    <span>Quize Result</span>
                    <span className="bold">passed  </span>
                </div>
             </div>
             <div className="start" >
                <Link className="btn" to={'/'} onClick={onRestart}>Restart</Link>
             </div>

             <div className="container" >
            
            <ResultTable />
             </div>
             </div> 
    )
}