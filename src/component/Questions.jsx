import { useState } from "react";
import data from "./database/Data"

export default function Questions(){

    const[checked, setChecked] = useState(undefined)

    function onSelect(){
        setChecked(true)
        console.log('radio button clicked');
    }

    return(
        <div className="questions">
            <h2 className="text-light" > Simple Question 1</h2>
            <ul>
                <li>
                    <input type="radio" 
                    value={checked} 
                    name="options"
                    id='q1-option'
                    onChange={onSelect()} />
                    <label className="text-primary" htmlFor="q1-option">options</label>
                    <div className="check checked"></div>
                </li>
            </ul>
        </div>
    )
}