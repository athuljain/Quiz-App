import Questions from "./Questions";


export default function Quiz(){

        function onNext(){
            console.log("On next click");
        } 
        function onPrev(){
            console.log("On Prev click");
        } 


    return(
        <div className="container">
            <h1 className="title text-light"> Quiz Application </h1>
            <h3 className="title text-light"> Java Script </h3>
            {/* display questions */}
       <Questions />
            <div className="grid">
                <button onClick={onPrev} className="btn prev" >Prev</button>
                <button  onClick={onNext}  className="btn next" >Next</button>

            </div>
        </div>
    )
}