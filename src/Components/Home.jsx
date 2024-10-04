import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Div1(){

let navigate=useNavigate();

let search=(a)=>{
        let val=a.target.value.toLowerCase();
        console.log(val);
        
        switch (val) {
            case "bengaluru":{navigate("/bengaluru")}
            break;
            case "goa":{navigate("/goa")}
            break;
            case "kolkata":{navigate("/kolkata")}
            break;                                         
            case "singapore":{navigate("/singapore")}
            break;
            case "malaysia":{navigate("/malaysia")}
            break;
            case "bangkok":{navigate("/bangkok")}
            break;
            case "newyork":{navigate("/new-york")}
            break;
            case "paris":{navigate("/paris")}
            break;
            default:{navigate("/")}
                
        }
        
    }
    
    

return(
            <div id="div1">
               <div id="div11">
               <h1 id="d1h1">Welcome to QTrip</h1>
               <p id="d1p">Explore the world with fantastic places to venture around</p>
               <input id="d1in" placeholder="Search a City" onChange={search}/>
                </div>
            </div>
        )
    
}
