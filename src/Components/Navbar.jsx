import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Navbar (){

        let navigate=useNavigate();
        let home=()=>{navigate("/")};
        return(
            <nav>
                <span id="a1">QTrip</span>
                <div id="nav"><ul>
                <li id="home"onClick={home}>Home</li>
                <li>Reservations</li>
                <li><button id="logbutt" onClick={()=>navigate('/login')}>Login Here</button></li>
                <li><button id="regbutt" onClick={()=>navigate('/register')}>Register</button></li>
                </ul></div>
                
            </nav>
        )
    }
