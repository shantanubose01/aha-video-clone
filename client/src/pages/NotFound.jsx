import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'
function NotFound(){
return( <div className="nf-cont">
    <div>
        <h1 className="err">404</h1>
        <h3>Looks like we're having trouble finding this page</h3>
        <Link to='/'><button className="btn-home">Home</button></Link>
    </div>
    <div>
        <img className="err-img" src="https://www.aha.video/assets/images/warning.png" alt="nf"/>
    </div>
    </div>
)
}
export default NotFound;