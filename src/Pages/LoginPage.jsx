import { useNavigate } from "react-router-dom"

export default function Login (){
    let log=()=>{
    let logemail=document.getElementById("logun").value 
    let logpass=document.getElementById("logpass").value 

    let regun=window.sessionStorage.getItem("userEmail")
    let repass=window.sessionStorage.getItem("userpassword")

    if(logemail===regun && logpass===repass){
        window.open("/")
    }
    else{
        alert("Enter valid data")
    }
}

    

    let navigate=useNavigate();
    return(
        <div id="log">
        <h2>Login</h2>
        <input id="logun" type="email" placeholder="Email address" />
        <input id="logpass" type="password" placeholder="Password" />
        <button onClick={log} >Login to Qtrip</button>
        <p>Don't have an account?
            <span onClick={()=>navigate("/register")}>Register Now</span>
        </p>
        </div>
    )
}