import React from "react";
import {Link} from "react-router-dom";
function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav">
                <li class="nav-item active"><Link className="nav-link"  to="/">Home</Link></li>
                <li class="nav-item"><Link className="nav-link"  to="/aboutus">Aboutus</Link></li>
                <li class="nav-item"><Link className="nav-link"  to="/contactus">Contactus</Link></li>
            </ul>
        </nav>
    );
}
export default Navigation;