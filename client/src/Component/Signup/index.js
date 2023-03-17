import {React,useEffect,useState} from 'react'
import Navbarone from '../Navbarone'
import { NavLink, useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Notification from '../Notification';
import FormControl from '@mui/material/FormControl';
import './sigin.css'
function Index() {
  const [Data, setData] = useState({ 
    name: "", 
    email: "", 
    password: "",
    confpassword: "",
    workstatus:"",});
  const [empData,setempData]=useState({
    name:"",
    companyname:"",
    email:"",
    password: "",
    confpassword: "",
  });
    const navigate=useNavigate();
  
  const handleSubmitseeker= async (e)=>
  {
    e.preventDefault();
    console.log("handle")
   
    try {
      const { name,email,password,confpassword,workstatus } = Data;
      const res = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        confpassword,
          workstatus
        }),
      });
      console.log(res)
      var mes=await res.json()
      console.log(mes.message);
      navigate("/login")
    }
    catch(err)
    {
          console.log(err);
    }
  }
  const dropdownMenuProps={
    menuStyle:{
      border: "1px solid green",
      borderRadius: "17%",
      backgroundColor: 'lightgrey',
    },
  }
  const handleChange=({ currentTarget : input })=>{

    setData({ ...Data, [input.name]: input.value });
    console.log(Data.workstatus)

  }
  const handleChangedrop = (event: SelectChangeEvent) => {
    setData({ ...Data, workstatus: event.target.value });
  };
  let name,value;
  const employeeChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setempData({...empData,[name]:value});
  }
  const registerEmployee =async(e)=>
  {
    e.preventDefault();
    console.log("employee")
   
    try {
      const { name,companyname,email,password,confpassword} = empData;
      const res = await fetch("http://localhost:8000/employeesignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          companyname,
          email,
          password,
          confpassword,
         
        }),
      });
      console.log(res)
      var mes=await res.json()
      console.log(mes.message);
      navigate("/login")
    }
    catch(err)
    {
          console.log(err);
    }
  }
  return (
    
  <div>
  <Navbarone />
  
  <div class="tr-breadcrumb bg-image section-before">
    <div class="container">
      <div class="breadcrumb-info text-center">
        <div class="page-title">
          <h1>Create a New Account</h1>
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
              <form  onSubmit={handleSubmitseeker} class="tr-form">
                <div class="form-group">
                  <input 
                  type="text" 
                  class="form-control"
                  name="name"
                  onChange={handleChange}
                  value={Data.name}
                  required 
                  placeholder="Full Name"
                  />
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
                <div class="form-group">
                <input 
                  type="password" 
                  class="form-control"
                  name="confpassword"
                  onChange={handleChange}
                  value={Data.confpassword}
                  required 
                  placeholder="Conform Password"
                  />
                </div>
                <FormControl fullWidth>
  <InputLabel   id="demo-simple-select-label">WorkStatus</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    dropDownMenuProps={dropdownMenuProps}
    id="demo-simple-select"
    value={Data.workstatus}
    label="WorkStatus"
    required
    onChange={handleChangedrop}
  >
    <MenuItem value={"professinal"}>professinal</MenuItem>
    <MenuItem value={"student"}>Student</MenuItem>
  </Select>
</FormControl>
                <button type="submit" class="btn btn-primary">Sign Up</button>
              </form>
              <div class="new-user text-center">
                <span>Already Registered? <NavLink to="/themetwo">Home theme two</NavLink> </span>
              </div>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="employers">
            <div class="account-content">
              <form onSubmit={registerEmployee} class="tr-form">
                <div class="form-group">
                  <input type="text" name="name" required value={empData.name} class="form-control" onChange={employeeChange} placeholder="Your Full Name"/>
                </div>
                <div class="form-group">
                  <input type="text" name='companyname' required value={empData.companyname} class="form-control"onChange={employeeChange} placeholder="Company Name"/>
                </div>
                <div class="form-group">
                  <input type="email" name='email' required value={empData.email} class="form-control" onChange={employeeChange} placeholder="your Email"/>
                </div>
                <div class="form-group">
                  <input type="password" name='password' required value={empData.password} class="form-control" onChange={employeeChange} placeholder="Password"/>
                </div>
                <div class="form-group">
                  <input type="password" name='confpassword' required value={empData.confpassword} class="form-control" onChange={employeeChange} placeholder="Confirm Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
              </form>
              <div class="new-user text-center">
                <span>Already Registered? <NavLink  to="/login">Sign in</NavLink></span>
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
                  <input type="email" class="form-control" required="required" placeholder="Your email Id"/>
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
</div>
  )
}


export default Index;

