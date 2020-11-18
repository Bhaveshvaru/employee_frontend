import React,{useState,useEffect} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from "axios";
import "../App.css";



const Main = ()=>
    {
        const [apidata,setApidata]=useState([]);
        useEffect(()=>{
            getData();
        },[]);
        
        const getData=()=>{
            axios.get("http://localhost:4000/api/employee/get")
            .then((data)=>{setApidata(data.data)})
            .catch((err)=>{console.log(err)})
        }
        //mapping the data
        const cards=apidata.map((item)=>{
            return (
                <div key={item._id} className="card image" style={{width:"22rem"}}   >
                <img className="card-img-top image" src={`http://localhost:4000/uploads/${item.photo}`} height="330" alt="Card image cap"/>
                <div className="card-body" >
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
           <div className="css-cards " >
             {cards}
           </div>
         <Footer/>
        </>
        );



    };

export default Main;