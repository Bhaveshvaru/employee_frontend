import React,{useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import {  useHistory }from "react-router-dom";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ".././App.css"


const AddEmployee = ()=>{
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
 


    const history = useHistory();
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
      setEmployeeBio(event.target.value)
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
              window.alert("Employee added Successfully!")
              history.push("/");
            })
            .catch((err) => {
              console.log("errorMsg",err);
              window.alert(`${err.response.data.message}`)
            });
    }

    const onEditorStateChange=()=>{
      setEditorState(editorState);
      
    }

    
    
    

    return (
        <>
        <Navbar/>
        <div className="container" style={{marginTop:"20px",paddingBottom:"2rem"}}>
              <form onSubmit={handleSubmit}  encType="multipart/form-data" novalidate>
                <h3 className="m-3">Add Employee</h3>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Employee Name:</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" onChange={handleName}  required/>
                  </div>

                  <div className="form-group">
                    <label for="exampleInputEmail1">Employee Email:</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" onChange={handleEmail}  required/>
                  </div>

                  <div className="form-group">
                    <label for="exampleInputusername">Employee Address:</label>
                    <input type="text" className="form-control"  aria-describedby="userHelp" onChange={handleAddress}  required/>
                  </div>

                 
                  <div className="form-group">
                    <label for="exampleInputusername">Employee Bio:</label>
                    <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleBio} required></textarea>
                  </div>

                     <div className="richtext">
                       <Editor
                       initialEditorState={editorState}
                       onChange={editorState => setEditorState(editorState)}
                         wrapperClassName="wrapper-class"
                          editorClassName="editor-class"
                          toolbarClassName="toolbar-class"
                          onEditorStateChange={onEditorStateChange}
                        />
                   </div>
                  
                  <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker">
                    <label for="example">Select Employee's  Date of Birth:</label>
                    <input placeholder="Select date" type="date" id="example" className="form-control"onChange={handleDOB}   required/>
                  <i className="fas fa-calendar input-prefix" ></i><br/></div>

                  <div className="form-group">
                    <label for="exampleInputusername">Employee Phone Number:</label>
                    <input type="text" className="form-control"  aria-describedby="userHelp" onChange={handlePhone}  required/>
                  </div>


                  <div className="form-group">
                    <label for="exampleFormControlFile1">Upload Employee image:</label>
                    <input type="file" className="form-control-file"  name="photo" onChange={handleImage}  required/>
                  </div>


                  <br/>
                  <button onClick={handleClick}  type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                   
             </div>
        <Footer/>
        </>
    )
};

export default AddEmployee;