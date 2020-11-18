import React from "react";

const Navbar =()=>{
    
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{minHeight:"5rem"}}>
          <a class="navbar-brand" href="http://localhost:3000/">
             <img src="https://cdn4.iconfinder.com/data/icons/people-avatar-1-1/128/29-512.png" width="50" height="50" class="d-inline-block align-top" alt="employee"/>
            
          </a>
          <h4 style={{color:"white"}}>Employee</h4>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav" style={{paddingLeft:"3rem"}}>
                <a className="nav-item nav-link active" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="http://localhost:3000/AddEmployee">Add Employee</a>
                <a className="nav-item nav-link" href="http://localhost:3000/SearchEmployee">Search Employee</a>
              </div>
         </div>
         </nav>
        </>
    )

};

export default Navbar;