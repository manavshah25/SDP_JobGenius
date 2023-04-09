import React from "react";
import Navbarone from "./../Navbarone";
import { useEffect,useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { NavLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
function Index() {
  const [post, setPost] = useState({
    g: [],
  });
  const nav=useNavigate();
  const userbool=JSON.parse(localStorage.getItem("userbool"));
  const employeebool=JSON.parse(localStorage.getItem("employeebool"));
  const invalidResume=()=>{
    toast("Login as a User to create resume")
  }
function handleclick(id){
 // e.preventDefault();
   console.log(id);
 localStorage.setItem("id",id);
  nav("/jobdetails")

}
 
  useEffect(() => {
    axios.get("http://localhost:8000/data").then(
      (res) => {
        setTimeout(() => {
          setPost({ g: res.data });
        });
       console.log("sucess")
      },
      (error) => {
        console.log("error in fetching");
      }
    );
  },[]);

  return (
    <div>
      <Navbarone />
      <div class="tr-breadcrumb bg-image section-before">
        <div class="container">
          <div class="breadcrumb-info text-center">
            <div class="page-title">
              <h1>Career Opportunities lists</h1>
              
            </div>
            <ol class="breadcrumb">
              <li class="active">A way for your career</li>
            </ol>
            {/* <div class="banner-form">
              <form action="#">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Job Keyword"
                />
                <div class="dropdown tr-change-dropdown">
                  <a data-toggle="dropdown" href="#" aria-expanded="false">
                    <span class="change-text">Location</span>
                    <i class="fa fa-angle-down"></i>
                  </a>
                  <ul class="dropdown-menu tr-change">
                    <li>
                      <a href="#">Location</a>
                    </li>
                    <li>
                      <a href="#">Location 1</a>
                    </li>
                    <li>
                      <a href="#">Location 2</a>
                    </li>
                    <li>
                      <a href="#">Location 3</a>
                    </li>
                  </ul>
                </div>
                <button type="submit" class="btn btn-primary" value="Search">
                  Search
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
      <div class="jobs-listing section-padding">
        <div class="container">
          
         
          <div class="tab-content tr-job-posted">
            <div
              role="tabpanel"
              class="tab-pane fade show active"
              id="four-colum"
            >
              <div class="row">
              {post.g.map((add,i)=>(
              <div key={i}className="col-md-6 col-lg-3">
                <div className="job-item">
                  <div className="item-overlay">
                    <div className="job-info">
                      <a href="#" className="btn btn-primary">{add.jobtype}</a>
                      <span className="tr-title">
                        <a href="job-details.html">{add.title}</a>
                        <span><a href="#">{add.companyname}</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>{add.category} Developer</li>
                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>{add.exprience}</li>
                        <li><i className="fa fa-money" aria-hidden="true"></i>${add.salary}</li>
                      </ul>
                      <ul className="job-social tr-list">
                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                        <li><a onClick={()=>{(userbool)?handleclick(add._id):toast("Login as Seeker")}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="job-info">
                    <div className="company-logo">
                      <img src="images/job/1.png" alt="images" className="img-fluid"/>
                    </div>
                    <span className="tr-title">
                      <a href="#">{add.title}</a>
                      <span><a href="#">{add.companyname}</a></span>
                    </span>
                    <ul className="tr-list job-meta">
                      <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>{add.category} Developer</li>
                      <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>{add.exprience}</li>
                      <li><span><i className="fa fa-money" aria-hidden="true"></i></span>${add.salary}</li>
                    </ul>
                    <div className="time">
                      <a href="#"><span
                         class="part-time">{add.jobtype}</span></a>
                      <span  style={{marginTop:"4%"}}className="pull-right">Posted on {add.postedDate.slice(0, 16)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
              </div>
              <div class="tr-cta">
                <div class="cta-content section">
                  <div class="cta-info">
                    <div class="pull-left">
                      <h1>Add your resume and let your next job find you.</h1>
                    </div>
                    { userbool &&!employeebool  ? 
                <NavLink to="/personaldetail" className="btn btn-primary pull-right">
                  Add Your Resume
                </NavLink>
               : 
                <button
                  onClick={invalidResume}
                  className="btn btn-primary pull-right"
                >
                  Add Your Resume
                </button>
              }
              <ToastContainer/>
                  </div>
                </div>
              </div>
              <div class="row">
              {post.g.map((add,i)=>(
              <div key={i}className="col-md-6 col-lg-3">
                <div className="job-item">
                  <div className="item-overlay">
                    <div className="job-info">
                      <a href="#" className="btn btn-primary">{add.jobtype}</a>
                      <span className="tr-title">
                        <a href="job-details.html">{add.title}</a>
                        <span><a href="#">{add.companyname}</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>{add.category} Developer</li>
                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>{add.exprience}</li>
                        <li><i className="fa fa-money" aria-hidden="true"></i>${add.salary}</li>
                      </ul>
                      <ul className="job-social tr-list">
                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                        <li><a onClick={()=>{(userbool)?handleclick(add._id):toast("Login as Seeker")}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="job-info">
                    <div className="company-logo">
                      <img src="images/job/1.png" alt="images" className="img-fluid"/>
                    </div>
                    <span className="tr-title">
                      <a href="#">{add.title}</a>
                      <span><a href="#">{add.companyname}</a></span>
                    </span>
                    <ul className="tr-list job-meta">
                      <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>{add.category} Developer</li>
                      <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>{add.exprience}</li>
                      <li><span><i className="fa fa-money" aria-hidden="true"></i></span>${add.salary}</li>
                    </ul>
                    <div className="time">
                      <a href="#"><span
                         class="part-time">{add.jobtype}</span></a>
                      <span  style={{marginTop:"4%"}}className="pull-right">Posted on {add.postedDate.slice(0, 16)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
              </div>
            </div>
            <div
              role="tabpanel"
              class="tab-pane fade two-column"
              id="two-column"
            >
            <div class="row">
              {post.g.map((add,i)=>(
                <div key={i} class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/1.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">{add.title}</a>
                          <span>
                            <a href="#">companyname</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            {add.jobtype}
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                         {add.category}
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          {add.exprience}
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          ${add.salary}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            ))}
              </div>
              <div class="tr-cta">
                <div class="cta-content section">
                  <div class="cta-info">
                    <div class="pull-left">
                      <h1>Add your resume and let your next job find you.</h1>
                    </div>
                    <a href="#" class="btn btn-primary pull-right">
                      Add Your Resume
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
              {post.g.map((add,i)=>(
                <div key={i} class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/1.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">{add.title}</a>
                          <span>
                            <a href="#">companyname</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            {add.jobtype}
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                         {add.category}
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          {add.exprience}
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          ${add.salary}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            ))}
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
                Copyright © 2023 <a href="#">Seeker.com.</a> All rights
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
