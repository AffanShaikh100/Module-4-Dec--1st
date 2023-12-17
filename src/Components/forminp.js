import React from "react";
import { useState } from "react";


const Forminp = () =>{

let [email,setEmail] = useState("");
let [pass,setPass]   = useState("");
let [cpass,setCpass] = useState("")

let [etrue,setEt]    = useState(false);
let [ptrue, setPt]   = useState(false);
let [cptrue, setCpt] = useState(false)

function getdata(e){
    e.preventDefault()

    if(email||pass||cpass===""){
        alert("Please input all the values")
    }
    
}

function emaildata(e){
    setEt(true)
    setEmail(e.target.value)
    
    if(e.target.value===""){
        setEt(false)
    }
}

function passdata(e){
    setPt(true)
    setPass(e.target.value) 

    if(e.target.value===""){
        setPt(false)
    }
}

function conpassdata(e){
   setCpt(true)
   setCpass(e.target.value)

   if(e.target.value===""){
    setCpt(false)
}
}

return(
    <div className="form">

        <form onSubmit={getdata}>
            <label>Email:</label>
            <br></br>
            <input onChange={emaildata} type="email" placeholder="Enter your Email"/>
            {etrue ? <p>  </p> : <p className="red">Invalid Email format</p>}

            <label>Password:</label>
            <br></br>
            <input onChange={passdata} type="password" minLength={8} placeholder="Password min length 8"/>
            {ptrue ? <p>  </p> : <p className="red">Passwords must be atleast 8 characters</p>}

            <label>Confirm Password:</label>
            <br></br>
            <input onChange={conpassdata} type="password" placeholder="Confirm Password"/>
            {cptrue ? <p>  </p> : <p className="red">Passwords do not match</p>}
            <button type="submit">Sign up</button>
        </form>

    </div>
   )
}

export default Forminp