import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import{Link} from "react-router-dom";

const NavBar=()=>{
    return(
        <>
          <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">
                    Foodies👩‍🍳
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Recipes 
                            </Link>
                        </li>
                    

                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
          </nav>
        </>
    );
};
export default NavBar;