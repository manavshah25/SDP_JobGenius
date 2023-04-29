import React, { useState, useEffect } from 'react';
import Navbarone from "./../Navbarone"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import DownloadPage from '../DownloadPage';
import { NavLink } from 'react-router-dom';



function Resume() {
   var  email =localStorage.getItem("useremail");

    const [current, setcurrent] = useState({});
    // const [reducer, setreducer] = useRedcer(x=>x+1,0)
    const navigate = useNavigate();
    useEffect(() => {
        axios.post("http://localhost:8000/resume", { email }).then(
            (res) => {
                setTimeout(() => {
                    setcurrent(res.data);

                });
                console.log("success")
            },
            (error) => {
                console.log("error in fetching");
            }
        );
    }, []);
    console.log(current.g)
    
    
 

    const back = () => {
        navigate('/')
    }
    return (
        <>
        <Navbarone/>
<div class="tr-breadcrumb bg-image section-before">
    <div class="container">
      {current.personaldetail?.map((add,i) => (
      <div class="breadcrumb-info text-center">
        <div class="user-image">
          <img src="images/others/author.png" alt="Image" class="img-fluid"/>
        </div>
        <div class="user-title">
          <h1>{add.Firstname} {add.Lastname}</h1>
        </div>
        <ul class="job-meta tr-list list-inline">
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>{add.City},{add.Country}</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>{add.Mobile}</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="#"><span class="__cf_email__"
                data-cfemail="f8929097969c979db89f95999194d69b9795">{email}</span></a></li>
         
        </ul>
        
      </div>
          ))}
    </div>

  </div>
        <div class="col" id="resumedownload">
                    <div class="all-view section-padding">
                        <div class="container">
                            <div class="section">
                                <ul class="tr-list resume-info">
                                <li class="career-objective media">
            <div class="icon">
              <i class="fa fa-black-tie" aria-hidden="true"></i>
            </div>
            <div class="media-body">
              <span class="tr-title">Career Objective</span>
              To obtain a challenging and fulfilling role as a software engineer where I can leverage my technical expertise and problem-solving skills to develop innovative solutions for complex business problems. I am committed to continuous learning and growth in my field and look forward to contributing to a dynamic team that values collaboration and creativity
            </div>
          </li>
                                    <li class="personal-deatils media">
                                        <div class="icon">
                                            <i class="fa fa-user-secret" aria-hidden="true"></i>
                                        </div>
                                        <div class="media-body">
                                            <span class="tr-title">Personal Details</span>
                                            {current.personaldetail?.map((add,i) => (
                                            
                                            <ul class="tr-list" key={i}>
                                                <li><span class="left">FirstName</span><span class="middle">:</span><span class="right">{add.Firstname}</span>
                                                </li>
                                                <li><span class="left">LastName</span><span class="middle">:</span> <span class="right">{add.Lastname}</span></li>
                                                <li><span class="left">City</span><span class="middle">:</span> <span class="right">{add.City}</span></li>
                                                <li><span class="left">Country</span><span class="middle">:</span> <span
                                                    class="right">{add.Country}</span></li>
                                                <li><span class="left">PinCode</span><span class="middle">:</span> <span class="right">{add.Pincode}</span></li>
                                                <li><span class="left">Mobile Number</span><span class="middle">:</span> <span
                                                    class="right">{add.Mobile}</span></li>
                                            </ul>
                                            ))}
                                        </div>
                                    </li>

                                    <li class="education-background media">
                                        <div class="icon">
                                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                                        </div>

                                        <div class="media-body">
                                            <span class="tr-title">Education</span>
                                            {current.education?.map((add,i) => (
          
                                            <ul class="tr-list" key={i}>
                                                <li>
                                                    <span>School Name</span>
                                                    <ul class="tr-list">
                                                    {add.SchoolName}
                                                    </ul>
                                               
                                                    <span>Collage Name</span>
                                                    <ul class="tr-list">
                                                    {add.CollageName}
                                                    </ul>

                                                
                                                    <span>Qualification</span>
                                                    <ul class="tr-list">
                                                    {add.Qualification}
                                                    </ul>

                                                
                                                    <span>Year of Graduation</span>
                                                    <ul class="tr-list">
                                                    {add.YearOfGraduation}
                                                    </ul>

                                                </li>
                                            </ul>
                                            ))}
                                        </div>
                                    </li>
                                    <li class="work-history media">
                                        <div class="icon">
                                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                                        </div>
                                        <div class="media-body">
                                            <span class="tr-title">Experience</span>
                                            {current.experience?.map((add,i) => (
                                            <ul class="tr-list">
                                                <li>
                                                    <span>Job Type</span>
                                                    <ul class="tr-list">
                                                    {add.jobType}
                                                    </ul>

                                               <br/>
                                                    <span>JobCity</span>
                                                    <ul class="tr-list">

                                                    {add.jobcity}
                                                    </ul>
                                                    <br/>

                                                    <span>Working Experience</span>
                                                    <ul class="tr-list">

                                                    {add.workedAt}
                                                    </ul>
                                                    <br/>

                                               
                                                    <span>Started At</span>
                                                    <ul class="tr-list">
                                                    {add.StartDate.slice(0, 10)}

                                                    </ul>

                                               <br/>
                                                
                                                    <span>Ended At</span>
                                                    <ul class="tr-list">
                                                     {add.EndDate.slice(0, 10)}
                                                    </ul>

                                                </li>
                                            </ul>
                                            ))}
                                        </div>
                                    </li>
                                    <li class="language-proficiency media">
                                        <div class="icon">
                                            <i class="fa fa-language" aria-hidden="true"></i>
                                        </div>
                                        <div class="media-body">
                                            <span class="tr-title">Skills:</span>
                                            {current.skill?.map((add,i) => (
                                            <ul class="tr-list" key={i}>
                                                {/* {add.Skills[0].skill1}
                                                {add.Skills.skill2}
                                                {add.Skills.skill3}
                                                {add.Skills.skill4}
                                                {add.Skills.skill5} */}

                                            </ul>
                                            ))}
                                        </div>
                                    </li>
                                    <li class="personal-deatils media">
            <div class="icon">
              <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
            </div>
            <div class="media-body">
              <span class="tr-title">Declaration</span>
              I hereby declare that all the information provided in this resume is true, complete, and accurate to the best of my knowledge. I understand that any false statement or misrepresentation may result in disqualification from employment or termination of employment, if already hired.
            </div>
          </li>

                                </ul>
                                <DownloadPage rootElementId="resumedownload" downloadFileName="Resume" />
                                <a  class="btn button-send"><NavLink to="/" style={{color:"white"}}><i class="fa fa-envelope-o" aria-hidden="true"></i>Back to Home</NavLink></a>
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
          <p>Copyright © 2023 <a href="#">Seeker.com</a> All rights reserved.</p>
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

            {/* <div>
                    <ul className="job-social tr-list">
                        <li><a><i className="fa fa-long-arrow-left" onClick={back} aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div> */}


        </>
    );
}

export default Resume;
