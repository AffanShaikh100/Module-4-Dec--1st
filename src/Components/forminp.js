import React from "react";
import { useState } from "react";


const Forminp = () =>{

let [formdata, setFormdata] = useState({
    email : "",
    pass : "",
    cpass : ""
})

let [etrue,setEt]    = useState(false);
let [ptrue, setPt]   = useState(false);
let [cptrue, setCpt] = useState(false)

function getdata(e){
    e.preventDefault()

    if(etrue===false||ptrue===false||cptrue===false){
        alert("Please input all the values")
    }
    else{
        setFormdata({
            email: "",
            pass: "",
            cpass: "",
        })
        setEt(false)
        setPt(false)
        setCpt(false)
        alert("Form Submitted Successfully")
    }
}

function emaildata(e){
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegex.test(e.target.value)){
        setEt(true);
    }

    setFormdata({...formdata, [e.target.name]:e.target.value})
    
    if(e.target.value===""){
        setEt(false)
    }
}

function passdata(e){
    if(e.target.value.length>=8){
        setPt(true)
    }
    setFormdata({...formdata, [e.target.name]:e.target.value}) 

    if(e.target.value===""){
        setPt(false)
    }
}

function conpassdata(e){

    setFormdata({...formdata, [e.target.name]:e.target.value})

   if(e.target.value!==formdata.pass){
    setCpt(false)
    }
    else if(e.target.value===""){
        setCpt(false)
    }
    else{
    setCpt(true)
    }
}


return(
    <div className="form">

        <form onSubmit={getdata}>
                  <h1>Sign-up Form</h1>

            <label>Email:</label>
            <br></br>
            <input value={formdata.email} className={etrue && "green"}  onChange={emaildata} name="email" type="email" placeholder="Enter your Email"/>
            {etrue ? <p>  </p> : <p className="red">Invalid Email format</p>}

            <label>Password:</label>
            <br></br>
            <input value={formdata.pass} className={ptrue && "green"}  onChange={passdata} name="pass" type="password" placeholder="Password min length 8"/>
            {ptrue ? <p>  </p> : <p className="red">Passwords must be atleast 8 characters</p>}

            <label>Confirm Password:</label>
            <br></br>
            <input value={formdata.cpass} className={cptrue && "green"}  onChange={conpassdata} name="cpass" type="password" placeholder="Confirm Password"/>
            {cptrue ? <p>  </p> : <p className="red">Passwords do not match</p>}
            <button type="submit">Sign up</button>
        </form>

    </div>
   )
}

export default Forminp