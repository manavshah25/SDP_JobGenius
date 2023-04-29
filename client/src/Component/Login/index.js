import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbarone from './../Navbarone'
// toast.configure()

const Index = () => {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const [empData, setempData] = useState({
    empemail: "", emppassword: "",
  })
  const navigate = useNavigate();

  let handleChange = async (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setData(values => ({ ...values, [name]: val }))
  }
  let employeeChange = async (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setempData(values => ({ ...values, [name]: val }))
  }
  const handleEmployeeLogin = async (e) => {
    e.preventDefault();
    console.log("login")
    try {
      const email=empData.empemail;
      const password=empData.emppassword;
      // console.log(empData.empemail)
      // console.log(empData.emppassword)
      const res = await fetch("http://localhost:8000/employeelogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
      const y = await res.json();
      const u=JSON.stringify(y.loginemployee);
      console.log(y);
      if (!y.error) {
        // alert("Login Successfully")
        localStorage.setItem("employee",u)
        localStorage.setItem("employeebool",JSON.stringify(true))
        localStorage.setItem("userbool",JSON.stringify(false))
        localStorage.setItem("company",y.loginemployee.companyname)
        

        navigate("/")
      }
      else {
        toast("You don't have account");
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login")
    try {
      const { email, password } = Data;
      // console.log(email)
      // console.log(password)
      const res = await fetch("http://localhost:8000/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
      const y = await res.json();
      const u=JSON.stringify(y.loginuser);
      console.log(y);
      if (!y.error) {
        // alert("Login successfully")
        localStorage.setItem("user",u)        
        localStorage.setItem("useremail",y.loginuser.email)        
        localStorage.setItem("userbool",JSON.stringify(true))        
        localStorage.setItem("employeebool",JSON.stringify(false))        
        localStorage.setItem("count",0)
        // localStorage.setItem("singleResume",null)
        navigate("/")
      }
      else {
        toast("You don't have account");
      }
    }
    catch (error) {
      console.log(error);

    }


  }
  return (
    <div>
      <Navbarone />
  
      <div class="tr-breadcrumb bg-image section-before">
        <div class="container">
          <div class="breadcrumb-info text-center">
            <div class="page-title">
              <h1>Sign In</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="tr-account section-padding">
        <div class="container text-center">
          <div class="user-account">

            <ul class="nav nav-tabs  nav-justified" role="tablist">
              <li role="presentation"><a class="active" href="#seeker" aria-controls="seeker" role="tab"
                data-toggle="tab">Job Seeker</a></li>
              <li role="presentation"><a href="#employers" aria-controls="employers" role="tab"
                data-toggle="tab">Employers</a></li>
            </ul>


            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="seeker">
                <div class="account-content">
                  <form onSubmit={handleLogin} class="tr-form">
                    <div class="form-group">
                      {/* <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={Data.name}
                    required
                  className=''
                  /> */}

                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        onChange={handleChange}
                        value={Data.email}
                        required
                        placeholder="Your email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        onChange={handleChange}
                        value={Data.password}
                        required
                        placeholder="Password"
                      />
                    </div>


                    <button type="submit" class="btn btn-primary">Sign In</button>
                  </form>
                  <div class="new-user text-center">
                    <span>Don't have account? <NavLink to="/signup">Sign Up</NavLink> </span>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="employers">
                <div class="account-content">
                  <form onSubmit={handleEmployeeLogin} class="tr-form">


                    <div class="form-group">
                      <input type="email" name="empemail" value={empData.empemail} class="form-control" onChange={employeeChange} placeholder="your Email" />
                    </div>
                    <div class="form-group">
                      <input type="password" name="emppassword" value={empData.emppassword} class="form-control" onChange={employeeChange} placeholder="Password" />
                    </div>

                    <button type="submit" class="btn btn-primary">Sign In</button>
                  </form>
                  <div class="new-user text-center">
                    <span>Don't Have account?? <NavLink to="/signup">Sign Up</NavLink></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-top section-padding">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>About Us</h3>
                  <ul class="tr-list">
                    <li><a href="#">About Seeker</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">International Partners</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Feedback</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>Job Seekers</h3>
                  <ul class="tr-list">
                    <li><a href="#">Create Account</a></li>
                    <li><a href="#">Career Counseling</a></li>
                    <li><a href="#">My Bdjobs</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Video Guides</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>Employers</h3>
                  <ul class="tr-list">
                    <li><a href="#">Create Account</a></li>
                    <li><a href="#">Products/Service</a></li>
                    <li><a href="#">Post a Job</a></li>
                    <li><a href="#">FAQ</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>Newsletter</h3>
                  <p>Earum cumque doloribus, incidunt! Tempora voluptatibus</p>
                  <form class="contact-form" method="post" action="#">
                    <div class="form-group">
                      <input type="email" class="form-control" required="required" placeholder="Your email Id" />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="copyright">
              <p>Copyright © 2017 <a href="#">Seeker.com.</a> All rights reserved.</p>
            </div>
            <div class="footer-social pull-right">
              <ul class="tr-list">
                <li><a href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#" title="Google Plus"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#" title="Youtube"><i class="fa fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Index
