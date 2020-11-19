import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import {  useHistory }from "react-router-dom";

const UpdateEmployee = ()=>{

    const history = useHistory();
   
    
    //get Employee By Id
    const [fetchData,setFetchDate]=useState([]);
    const [newDate,setNewDate]=useState("");
    const id = window.location.pathname.slice(16,40);
    useEffect(()=>{
        axios.get(`http://localhost:4000/api/employeeId/${id}`)
        .then((data)=>{setFetchDate(data.data.data);
        setNewDate(data.data.data.dateofbirth.slice(0,10))
        
        })
        .catch((err)=>{console.log(err)})
    },[])

    


     const [employeeName,setEmployeeName]=useState("");
    const [employeeDOB,setEmployeeDOB]=useState("");
    const [employeeAddress,setEmployeeAddress]=useState("");
    const [employeeEmail,setEmployeeEmail]=useState("");
    const [employeeBio,setEmployeeBio]=useState("");
    const [employeePhone,setEmployeePhone]=useState("");
    const [employeePhoto,setEmployeePhoto]=useState("");
    

    
    
    const handleName=(event)=>{
        setEmployeeName(event.target.value);
    };

    const handleEmail=(event)=>{
        setEmployeeEmail(event.target.value)
    };

    const handleAddress=(event)=>{
        setEmployeeAddress(event.target.value)
    };
    
    const handleBio=(event)=>{
       setEmployeeBio(event.target.value);
    }
    
    const handleDOB=(event)=>{
     setEmployeeDOB(event.target.value);
    };

    const handlePhone=(event)=>{
    setEmployeePhone(event.target.value);
    };
 
    const handleImage=(event)=>{
        setEmployeePhoto(event.target.files[0]);
    };

    const handleSubmit=(event)=>{
     event.preventDefault();
    };

    const handleClick=()=>{
        let formData = new FormData();
        formData.append("employeename",employeeName);
        formData.append("employeeaddress",employeeAddress);
        formData.append("email",employeeEmail);
        formData.append("dateofbirth",employeeDOB);
        formData.append("phone",employeePhone);
        formData.append("bio",employeeBio);
        formData.append("photo",employeePhoto);
    
          axios({
            method: 'post',
            url: 'http://localhost:4000/api/employee/create',
            data: formData,
            })
            .then((data) => {
              window.alert("Employee Updated Successfully!")
              history.push("/");
            })
            .catch((err) => {
              console.log("errorMsg",err);
              window.alert(`${err.response.data.message}`)
            });
    }


    

    return (
        <>
        <Navbar/>
        <div className="container" style={{marginTop:"20px",paddingBottom:"2rem"}}>
              <form onSubmit={handleSubmit}  encType="multipart/form-data" novalidate>
                <h3 className="m-3">Update Employee</h3>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Employee Name:</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" defaultValue={fetchData.employeename}   onChange={handleName}  required/>
                  </div>

                  <div className="form-group">
                    <label for="exampleInputEmail1">Employee Email:</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp"  defaultValue={fetchData.email}  onChange={handleEmail}  required/>
                  </div>

                  <div className="form-group">
                    <label for="exampleInputusername">Employee Address:</label>
                    <input type="text" className="form-control"  aria-describedby="userHelp"  defaultValue={fetchData.employeeaddress} onChange={handleAddress}  required/>
                  </div>

                  <div className="form-group">
                    <label for="exampleInputusername">Employee Bio:</label>
                    <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3" defaultValue={fetchData.bio}  onChange={handleBio} required></textarea>
                  </div>
                  
                  
                  <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker">
                    <label for="example">Select Employee's  Date of Birth:</label>
                    <input placeholder="Select date" type="date" id="example" className="form-control"  defaultValue={newDate}  onChange={handleDOB}   required/>
                  <i className="fas fa-calendar input-prefix" ></i><br/></div>

                  <div className="form-group">
                    <label for="exampleInputusername">Employee Phone Number:</label>
                    <input type="text" className="form-control"  aria-describedby="userHelp" defaultValue={fetchData.phone} onChange={handlePhone}  required/>
                  </div>


                  <div className="form-group">
                    <label for="exampleFormControlFile1">Upload Employee image:</label>
                    <input type="file" className="form-control-file"  name="photo"  onChange={handleImage}  required/>
                  </div>


                  <br/>
                  <button onClick={handleClick}  type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                   
             </div>
        <Footer/>
        </>
    )
};

export default UpdateEmployee;