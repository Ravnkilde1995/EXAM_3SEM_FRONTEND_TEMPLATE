import React, { useState,useEffect } from "react"
import facade from "../../apiFacade.js";
import "./loggedin.css";
function LoggedIn({user}){
  
    return (
      <div class ="loggedin-container">
        <label>Hello, {facade.readJwtToken(facade.getToken()).username}</label>
      </div>
    )
  }
export default LoggedIn;