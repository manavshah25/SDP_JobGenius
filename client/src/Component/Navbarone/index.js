import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Index = () => {

  const navigate = useNavigate();
  const userbool = JSON.parse(localStorage.getItem("userbool"))
  const employeebool = JSON.parse(localStorage.getItem("employeebool"))
  const companyname=localStorage.getItem("company")
  // console.log(companyname)
  const checkpostjob=async()=>{
    const x = await fetch("http://localhost:8000/companycheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyname,
      }),
    })
    const res=await x.json();
    console.log(res)
    if(res.error){
      toast(res.error)
    }
    else{
      localStorage.setItem("jobcount",res.company);
      navigate("/adminpanel")
    }
    
  }
  
  const handleEmpProfile=()=>{
    userbool? navigate("/employeeprofile"):toast("Login to view your Profile")
  }
  const handleProfile=()=>{
    employeebool? navigate("/employeerprofile"):toast("Login to view your Profile")
  }
  const login = async () => {
    navigate("/login");
  }
  const jobpost = async () => {
    navigate("/postjob");
  }
  const handlelogout = async () => {
    // localStorage.setItem("employeebool", "false");
    // localStorage.setItem("userbool", "false");
    // localStorage.removeItem("employee");
    localStorage.clear();
      console.log("sucess");
    navigate("/");
  }
  return (
    <div>

      <header className="tr-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
              </button>
              <NavLink to="/"><a className="navbar-brand" ><img className="img-fluid" src="images/logo.png" alt="Logo" /></a></NavLink>
            </div>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav">
                
              {/* {employeebool?(checkpostjob)?<NavLink to="/adminpanel">Admin Panel</NavLink>:toast("You need to First Post Job for viewing Admin Panel"):<></>} */}
                <li>{employeebool?<NavLink onClick={checkpostjob}>Admin Panel</NavLink>:<></>}</li>
                <li><NavLink to="/joblist">Job List</NavLink></li>
                <li className="tr-dropdown"><a href="#">Pages</a>
                  <ul className="tr-dropdown-menu tr-list fadeInUp" role="menu">
                    <li><a  style={{color:"black",cursor:"pointer"}} onClick={()=>handleEmpProfile()} >Employee Profile</a></li>
                    <li><a style={{color:"black",cursor:"pointer"}} onClick={()=>handleProfile()}>Employer Profile</a></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/signup">SIGNUP</NavLink></li>
                    <li><NavLink to="/Login">SIGNIN</NavLink></li>
                  </ul>
                </li>
              </ul>
            </div>
            {!((employeebool)) ? 
              (!(userbool))?
              <div className="navbar-right">

                <ul className="sign-in tr-list">
                  <li><i className="fa fa-user"></i></li>
                  <li><NavLink to="/login">SIGN IN&nbsp;</NavLink></li>
                  <li><NavLink to="/signup">SIGNUP</NavLink></li>
                </ul>

              </div>:<div className="navbar-right">
              <ul className="tr-list">
              <a onClick={()=>handlelogout()} style={{color:"white"}} class="btn button-cancle">Logout</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Button onClick={handlelogout}>LOGOUT</Button> */}
                
              </ul>

            </div> :

              <div className="navbar-right">
                <ul className="tr-list">
                <a onClick={()=>handlelogout()} style={{color:"white"}} class="btn button-cancle">Logout</a>&nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <Button >LOGOUT</Button>&nbsp;&nbsp;&nbsp;&nbsp; */}
                  
                  
                </ul>

              </div>}
            {/* console.log(employeebool) */}
              
            <div>
              {employeebool?<NavLink className="btn btn-primary" to="/postjob">Post A Job</NavLink>:<button className="btn btn-primary" onClick={()=>{toast("Login as Employeer")}}>Post A Job</button>}
            </div>
              <ToastContainer/>


          </div>
        </nav>
      </header>
    </div>
  )
}

export default Index