import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import  axios from "axios";

const Search = ()=>{

    const [searchItem,setSearchItem]=useState("");
    const [apiData,setApiData]=useState([]);
   
    
    const onInputSubmit=(event)=>{
        event.preventDefault();
        setSearchItem(event.target.value);
       
    };

    const searchApi=()=>{
        axios.get(`http://localhost:4000/api/employee/search?employeename=${searchItem}`)
        .then((data)=>{
            setApiData(data.data);
            if(data.data.length===0){
               window.alert("No Employee Found!");
           }
        })
        .catch((err)=>{console.log(err)})
 };

    useEffect(()=>{
        searchApi();
    },[searchItem]);

       //mapping the data
       const cards=apiData.map((item)=>{
        return (
            <div key={item._id} className="card image" style={{width:"25rem"}}   >
            <img className="card-img-top image" src={`http://localhost:4000/uploads/${item.photo}`} height="330" alt="Card cap"/>
            <div className="card-body " style={{backgroundColor:"lightgrey"}} >
               <h5 className="card-title">{item.employeename}</h5>
                <p className="card-text">Employee Email: {item.email} </p>
                <p className="card-text">Employee Bio: {item.bio}</p>
                <p className="card-text">Employee Address: {item.employeeaddress} </p>
                <p className="card-text">Employee Phone: {item.phone} </p>
                <p className="card-text">Employee Date Of Birth: {item.dateofbirth.slice(0,10)} </p>
            </div>
        </div>
        )
    })

    return (
        <>
        <Navbar/>
        <h2 className="App">Search Employee</h2>
        <div className="container width">
        <div className="md-form active-cyan active-cyan-2 mb-3 ">
        <input className="form-control" type="text" placeholder="Search Employee" aria-label="Search" onChange={onInputSubmit}/>
        </div>
        </div>
        <div className="cards">
             {cards}
           </div>
    
           <footer id="sticky-footer" className="py-4 bg-dark text-white-50 fixed-bottom footer">
          <div className="container text-center">
           <small style={{color:"white"}}>Copyright &copy; Employeee</small>
         </div>
       </footer>
        </>
    )
};

export default Search;