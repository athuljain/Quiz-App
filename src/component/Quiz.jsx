import Questions from "./Questions";


export default function Quiz(){

        function onNext(){
            console.log("on next click");
        } 
        function onPrev(){
            console.log("on Prev click");
        } 


    return(
        <div className="container">
            <h1 className="title text-light">Quiz Application </h1>
            {/* display questions */}
       <Questions />
            <div className="grid">
                <button onClick={onPrev} className="btn prev" >Prev</button>
                <button  onClick={onNext}  className="btn next" >Next</button>

            </div>
        </div>
    )
}