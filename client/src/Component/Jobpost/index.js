import React ,{useState} from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import Navbarone from "./../Navbarone";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

function Index() {
  //   var  loginuserinfo=localStorage.getItem("employee");
  //   loginuserinfo=JSON.parse(loginuserinfo)
  //  loginuserinfo=loginuserinfo.companyname
  //   console.log(loginuserinfo)
  const [Data, setData] = useState({
    title: "",
    category:"",
    jobtype:"",
    salary:"",
    exprience:"",
    JavaDev :"false",
     PythonDev :"false",
     FullStackDev :"false",
     UIUXDesginer:"false",
     AndroidDev :"false",
     jobsummary:"",
     jobrequirement:"",
  });

  const Navigate=useNavigate();
  let handlechange = async (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setData(values => ({ ...values, [name]: val }))
    console.log(Data.title)
    console.log(Data.category)
    console.log(Data.jobtype)
    console.log(Data.salary)
    console.log(Data.exprience)
    console.log(Data.JavaDev)
    console.log(Data.PythonDev)
    console.log(Data.jobsummary)
    console.log(Data.jobrequirement)

  }

  const handlesubmit=async(e)=>{
    e.preventDefault();
    try{
      const {title,category,jobtype,salary,exprience,JavaDev,PythonDev,FullStackDev,UIUXDesginer,AndroidDev,jobsummary,jobrequirement}=Data;
        const resi =await fetch("http://localhost:8000/jobpost",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            category,
            jobtype,
            salary,
            exprience,
            JavaDev,
            PythonDev,
            FullStackDev,
            UIUXDesginer,
            AndroidDev,
            jobsummary,
            jobrequirement,
          //  loginuserinfo,
          }),
    })
  
  const y= await resi.json();
    console.log(y);
    if (!y.error) {
      alert("Thanks for posting"+ y.message)
      Navigate("/")
    }
    else {
      alert("You don't have accont");
    }
  } 
  catch(error)
  {
    console.log(error);
  }
}
  
  const handlechangecheck = (event) => {
    setData(values=>({...values ,[event.target.name]: event.target.checked}));
  };


  return (
    <div className="job-post-page">
      <Navbarone />
      <div class="tr-breadcrumb bg-image section-before">
        <div class="container">
          <div class="breadcrumb-info text-center">
            <div class="page-title">
              <h1>Post Your Job</h1>
            </div>
            <ol class="breadcrumb">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li class="active">Job Post</li>
            </ol>
          </div>
        </div>
      </div>
      <form onSubmit={handlesubmit} >
      <div class="tr-post-job page-content">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="short-info code-edit-small">
                <div class="section">
                  <span class="tr-title">Short Info</span>
                  <div class="row">
                    <div class="col-sm-3">
                      <label>Title for your job</label>
                    </div>
                    <div class="col-sm-9">
                    <Box style={{marginLeft:"-5%"}} sx={{ '& > :not(style)': { m: 1 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                          <TextField required fullWidth vale={Data.title}
                          onChange={handlechange} name="title" id="input-with-sx" style={{marginTop:"-3%"}} label="Title" variant="standard" />
                        </Box>
                      </Box>
                    </div>
                  </div>
                  <div style={{marginTop:"2%"}}class="row">
                    <div class="col-sm-3">
                      <label>Job Category</label>
                    </div>
                    <div class="col-sm-9">
                    <FormControl required fullWidth style={{marginTop:"-0.5%"}} variant="standard" sx={{ m: 1}}>
        <InputLabel  id="demo-simple-select-standard-label">Job Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Data.category}
          onChange={handlechange}
          name="category"
          label="Job Category"
        >
          <MenuItem value={"Frontend"}>Frontend</MenuItem>
          <MenuItem value={"Backtend"}>Backend</MenuItem>
          <MenuItem value={"Api"}>Api</MenuItem>
        </Select>
      </FormControl>
                    </div>
                  </div>
                  <div  style={{marginTop:"2%"}}class="row job-category">
                    <div class="col-sm-3">
                      <label>Job Type</label>
                    </div>
                    <div class="col-sm-9">
                    <FormControl required>
                    <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                    <RadioGroup
                    
                        row
                      aria-labelledby="demo-row -controlled-radio-buttons-group"
                      name="jobtype"
                      value={Data.jobtype}
                      onChange={handlechange}
                    
                    >
                  <FormControlLabel value="Full Time" control={<Radio />} label="Full Time" />
                  <FormControlLabel value="Part Time" control={<Radio />} label="Part Time" />
                  <FormControlLabel value="Freelance" control={<Radio />} label="Freelance" />
                  <FormControlLabel value="Contract" control={<Radio />} label="Contract" />
                </RadioGroup>
              </FormControl>
                    </div>
                  </div>
                  <div style={{marginTop:"-1%"}} class="row">
                    <div class="col-sm-3">
                      <label>Salary Information</label>
                    </div>
                    <div class="col-sm-9">
                    <FormControl  required fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
          type="number"  min="0" name="salary" value={Data.salary} onChange={handlechange} startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
                    </div>
                  </div>
                  <div class="row exprience-level">
                    <div class="col-sm-3">
                      <label>Exprience Level</label>
                    </div>
                    <div class="col-sm-9">
                    <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                    <RadioGroup
                        row
                      aria-labelledby="demo-row -controlled-radio-buttons-group"
                      name="exprience"
                      value={Data.exprience}
                      onChange={handlechange}
                    
                    >
                  <FormControlLabel value="Entry Level" control={<Radio />} label="Entry Level" />
                  <FormControlLabel value="Mid Level" control={<Radio />} label="Mid Level" />
                  <FormControlLabel value="Mid-Senior Level" control={<Radio />} label="Mid-Senior Level" />
                  <FormControlLabel value="Top Level" control={<Radio />} label="Top Level" />
                </RadioGroup>
              </FormControl>
                   
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <label>Job Function</label>
                    </div>
                    <div class="col-sm-9">
                    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
       
        <FormControlLabel
          value={Data.JavaDev}
          control={<Checkbox />}
          onChange={handlechangecheck}
          label="Java Dev"
          name="JavaDev"
          labelPlacement="end"
        />    <FormControlLabel
          value={Data.PythonDev}
          control={<Checkbox />}
          onChange={handlechangecheck}
          label="Python Dev"
          name="PythonDev"
          labelPlacement="end"
        />    <FormControlLabel
          value={Data.FullStackDev}
          control={<Checkbox />}
          onChange={handlechangecheck}
          label="Full Stack Dev"
          name="FullStackDev"
          labelPlacement="end"
        />
        <FormControlLabel
          value={Data.UIUXDesginer}
          control={<Checkbox />}
          onChange={handlechangecheck}
          label="UI-UX Desginer"
          name="UIUXDesginer"
          labelPlacement="end"
        />
          <FormControlLabel
          value={Data.AndroidDev}
          control={<Checkbox />}
          onChange={handlechangecheck}
          label="Android Dev"
          name="AndroidDev"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              <div class="job-description section">
                <span class="tr-title">Job Description</span>
                <div class="row">
                  <div class="col-sm-3">
                    <label>Job Summary</label>
                  </div>
                  <div class="col-sm-9">
                  <textarea required value={Data.jobsummary}  style={{backgroundColor:"#faf7fa"}} onChange={handlechange} name="jobsummary" rows={9} cols={80} />
                    <span class="characters-left">5000 Characters left</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <label>Minimum Requirements:</label>
                  </div>
                  <div class="col-sm-9">
                  <textarea  required value={Data.jobrequirement} name="jobrequirement" style={{backgroundColor:"#faf7fa"}} onChange={handlechange} rows={9} cols={80} />
                    <span class="characters-left">5000 Characters left</span>
                  </div>
                </div>
               
              </div>
             
              <div class="section agreement">
              <label>
              <Checkbox required />
                   You agree to our <a href="#">Terms of Use</a> and
                  <a href="#">Privacy Policy</a> and acknowledge that you are
                  the rightful owner of this item and using Trade to find a
                  genuine buyer.
                
                <div class="buttons" style={{marginTop:"2%"}}>
                  <button type="submit" class="btn btn-primary"> 
                    Post Your Job</button>
                  <NavLink to="/" class="btn button-cancle">
                    can</NavLink>
                </div>
                </label>
              </div>
             
            </div>
            <div class="col-md-3">
              <div class="section quick-rules">
                <span class="tr-title">Quick Rules</span>
                <p>
                  Posting an ad on <a href="#">Seeker.com</a> is free! However,
                  all post must follow our rules:
                </p>
                <ul class="tr-list">
                  <li>Make sure you post in the correct category.</li>
                  <li>
                    Do not post the same ad more than once or repost an ad
                    within 48 hours.
                  </li>
                  <li>Do not upload pictures with watermarks.</li>
                  <li>
                    Do not post ads containing multiple items unless it's a
                    package deal.
                  </li>
                  <li>
                    Do not put your email or phone numbers in the title or
                    description.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tr-download-app bg-image section-padding section-before">
        <div class="container text-center">
          <h1>Download on App Store</h1>
          <div class="app-content">
            <div class="row">
              <div class="col-sm-4">
                <div class="download-app">
                  <a href="#">
                    <div class="download-image">
                      <img
                        src="images/icons/app1.png"
                        alt="Image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="download-info">
                      <span>available on</span>
                      <strong>Google Play</strong>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="download-app">
                  <a href="#">
                    <div class="download-image">
                      <img
                        src="images/icons/app2.png"
                        alt="Image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="download-info">
                      <span>available on</span>
                      <strong>App Store</strong>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="download-app">
                  <a href="#">
                    <div class="download-image">
                      <img
                        src="images/icons/app3.png"
                        alt="Image"
                        class="img-fluid"
                      />
                    </div>
                    <div class="download-info">
                      <span>available on</span>
                      <strong>Windows Store</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
      <div class="footer">
        <div class="footer-top section-padding">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>About Us</h3>
                  <ul class="tr-list">
                    <li>
                      <a href="#">About Seeker</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">International Partners</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>Job Seekers</h3>
                  <ul class="tr-list">
                    <li>
                      <a href="#">Create Account</a>
                    </li>
                    <li>
                      <a href="#">Career Counseling</a>
                    </li>
                    <li>
                      <a href="#">My Bdjobs</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Video Guides</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>Employers</h3>
                  <ul class="tr-list">
                    <li>
                      <a href="#">Create Account</a>
                    </li>
                    <li>
                      <a href="#">Products/Service</a>
                    </li>
                    <li>
                      <a href="#">Post a Job</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>Newsletter</h3>
                  <p>Earum cumque doloribus, incidunt! Tempora voluptatibus</p>
                  <form class="contact-form" method="post" action="#">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        required="required"
                        placeholder="Your email Id"
                      />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary">
                        Sign Up
                      </button>
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
              <p>
                Copyright © 2017 <a href="#">Seeker.com.</a> All rights
                reserved.
              </p>
            </div>
            <div class="footer-social pull-right">
              <ul class="tr-list">
                <li>
                  <a href="#" title="Facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Google Plus">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Youtube">
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
