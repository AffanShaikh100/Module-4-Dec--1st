import React from "react";

const Forminp = () =>{


   return(
    <div className="form">
        <form>
            <label>Email:</label>
            <br></br>
            <input type="email" placeholder="Enter your Email"/>
            <br></br>
            <label>Password:</label>
            <br></br>
            <input type="password" placeholder="Password min length 8"/>
            <br></br>
            <label>Confirm Password:</label>
            <br></br>
            <input type="password" placeholder="Confirm Password"/>
            <button type="submit">Sign up</button>
        </form>
    </div>
   )
}

export default Forminp