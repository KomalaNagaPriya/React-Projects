import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
function Cardpages({id}){
    let[api,setApi]=useState([])

    useEffect(()=>{
        fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=${id}`).then(x=>x.json()).then(x=>setApi(x))
    },[api])

    // console.log(api);
    return(<>
           <div id="maindiv">
            <div id="mdiv1">
                <h1>Explore all adventures</h1>
                <p>Here's a list of places that you can explore in city</p>
                <div id="mdiv11">
                    <label htmlFor="">Filters </label>
                    <div id="mdiv111">
                        <select name=""  className='tab'>
                            <option>Filter by Duration (Hours)</option>
                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>
                    <div id="mdiv112">
                        <select name=""  className='tab'>
                            <option value="">Add Category</option>
                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>
                    <div id="mdiv113">
                        <input type="text" placeholder='Search adventures' className='tab'/>
                        <div className='cleardiv'>Clear</div>
                    </div>
                </div>
            </div>
            </div>


       <div id="mdiv2"> 
                     
       {api.map(x=>{
        return(
            <div className="mdcard">
        <Link to={"/"+x.name}>
        <img src={x.image}/></Link>
        <p  className="p1">{x.category}</p>
        <h5 className="h51">{x.name}</h5>
        <p  className="p2">₹{x.costPerHead}</p>
        <h5 className="h5">Duration</h5>
        <p  className="p3">{x.duration} Hours</p>
        </div> 

        )
       })}
        
        </div>
    </> )
}

let  Bengaluru=()=><Cardpages id="bengaluru" />
let  Goa=()=><Cardpages id="goa" />
let  Kolkata=()=><Cardpages id="kolkata" />
let  Singapore=()=><Cardpages id="singapore" />
let  Malaysia=()=><Cardpages id="malaysia" />
let  Bangkok=()=><Cardpages id="bangkok" />
let  NewYork=()=><Cardpages id="new-york" />
let  Paris=()=><Cardpages id="paris" />

export {
    Bengaluru,Goa,Kolkata,Singapore,Malaysia,Bangkok,NewYork,Paris
}









