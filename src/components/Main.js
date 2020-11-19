import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import axios from "axios";
import "../App.css";
import {Button,Modal} from "react-bootstrap"




const Main = ()=>
    {
        const [apidata,setApidata]=useState([]);
        const [modal,setModal]=useState(false);
        useEffect(()=>{
            getData();
           
        },[apidata]);
        
        const getData=()=>{
            axios.get("http://localhost:4000/api/employee/get")
            .then((data)=>{ 
               
                setApidata(data.data)
                

            })
            .catch((err)=>{console.log(err)
               
            })
            
        }

        const handleClick=(id)=>{
            console.log("id",id);
            axios.delete(`http://localhost:4000/api/employee/delete/${id}`)
            .then((data)=>{setModal(false)})
            .catch((err)=>{console.log(err)})

        };

        //mapping the data
        const cards=apidata.map((item)=>{
            return (
                <div key={item._id} className="card image " style={{width:"22rem",margin:"2rem"}}   >
                    <a href={`http://localhost:3000/UpdateEmployee/${item._id}`}>
                        <img className="updateimage" src={"https://i.pinimg.com/originals/7c/36/a8/7c36a8165d6b21cb1c0027ec987cdc97.png"} alt="edit" width="30" height="30"  />
                        </a>
                <img className="card-img-top " src={`http://localhost:4000/uploads/${item.photo}`} height="330" alt="Card  cap"/>
                <div className="card-body  " >
                   <h5 className="card-title">{item.employeename}</h5>
                    <p className="card-text">Employee Email: {item.email} </p>
                    <p className="card-text">Employee Bio: {item.bio}</p>
                    <p className="card-text">Employee Address: {item.employeeaddress} </p>
                    <p className="card-text">Employee Phone: {item.phone} </p>
                    <p className="card-text">Employee Date Of Birth: {item.dateofbirth.slice(0,10)} </p>
                </div>
                <Button className="btn-light" onClick={()=>{setModal(true)}}>Delete</Button>
                   <Modal show={modal}>
                       <Modal.Header>Confirm Delete</Modal.Header>
                             <Modal.Body>Are you sure to Delete?</Modal.Body>
                        <Modal.Footer>
                           <Button onClick={()=>{setModal(false)}} className="btn btn-primary">Cancel</Button>
                           <Button onClick={() => handleClick(item._id)}  className="btn btn-danger">Delete</Button>
                        </Modal.Footer>
                   </Modal> 
            </div>
            )
        });



        //btn click handler
        const handleBtnClick=()=>{
            axios.get("http://localhost:4000/api/employee/excelData")
            .then((data)=>{
               window.alert("Report Generated!")
                
            })
            .catch((err)=>{console.log(err)})
        };


       


        return (
        <>
          <Navbar/>
          <div className="button">
          <Button style={{marginRight:"5px"}} className="btn btn-secondary" onClick={handleBtnClick}>Generate Excel File</Button>
          <a href="http://localhost:4000/uploads/Employee.xlsx"> 
          <Button className="btn btn-secondary" >Download Excel File</Button>
          </a>
          </div>
          <div className="css-cards" >
             {cards}
           </div>
          
           <footer id="sticky-footer" className={apidata ? "py-4 bg-dark text-white-50 footer fixed-bottom": "py-4 bg-dark text-white-50 footer"}>
          <div className="container text-center">
           <small style={{color:"white"}}>Copyright &copy; Employeee</small>
         </div>
       </footer>
        </>
        );



    };

export default Main;