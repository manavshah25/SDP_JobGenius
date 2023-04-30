import React from "react";
import Navbarone from "./../Navbarone";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Button } from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
const Index = () => {
  const userbool = JSON.parse(localStorage.getItem("userbool"));
  const employeebool = JSON.parse(localStorage.getItem("employeebool"));
  var userId = JSON.parse(localStorage.getItem("user"));
  if(userbool){
    userId=userId._id}
 
  const [post, setPost] = useState({
    g: [],
  });
  const [skill, setskill] = useState({
    g: [],
  });
  const invalidResume = () => {
    toast("Login as a User to create resume")
  }
 
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/data").then(
      (res) => {
        setTimeout(() => {
          setPost({ g: res.data });
        });
      },
      (error) => {
        console.log("error in fetching");
      }
    );
     // setTimeout( () => {
    
      axios.post("http://localhost:8000/skillset", {userId}).then(
        (res) => {
          setTimeout(() => {
            setskill(res.data);
         
          });
          console.log("sucess");
        },
        (error) => {
          console.log("error in fetching");
        }
      );
      
  }, []);
  const checksingleResume=()=>{
    
    if( localStorage.getItem("count")==0){
      navigate("/personaldetail")
    }
    else{
      toast("Resume Already exists")
    }
  }
  localStorage.setItem("skillset", JSON.stringify(skill))
  function jobdetailsfunction(id) {
    localStorage.setItem("id", id);
    navigate("/jobdetails")
  }
  // const resumeExist = async () => {
  //   const res = axios.get("http://localhost:8000/personaldetail")
  //   //console.log(res)
  //   let y = await res.json()
  //   if (y.error) {
  //     toast(y.err)
  //   }
  //   else {
  //     navigate("/personaldetail")
  //   }
  // }
  console.log(post);
  return (
    <div>
      <Navbarone />
      <div className="tr-banner section-before bg-image">
        <div className="container">
          <div className="banner-content text-center">
            <h1>The Easiest Way to Get Your New Job</h1>
            <h2>We offer 12000 jobs vacation right now</h2>
            {/* <div className="banner-form">
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Keyword"
                />
                <div className="dropdown tr-change-dropdown">
                  <a data-toggle="dropdown" href="#" aria-expanded="false">
                    <span className="change-text">Location</span>
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu tr-change">
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  value="Search"
                >
                  Search
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
      <div className="tr-category section-padding">
        <div className="container">
          <div className="section-title">
            <h1>Browse Jobs By Category</h1>
          </div>
          <ul className="category-list tr-list">
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category1.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Accounting/Finance</span>
                <span className="category-quantity">(1298)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category2.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Education/Training</span>
                <span className="category-quantity">(76212)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category3.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Engineer/Architects</span>
                <span className="category-quantity">(212)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category4.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Garments/Textile</span>
                <span className="category-quantity">(972)</span>
              </a>
            </li>
          </ul>
          <ul className="category-list tr-list">
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category5.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">HR/Org. Development</span>
                <span className="category-quantity">(1298)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category6.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Design/Creative</span>
                <span className="category-quantity">(76212)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category7.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Research/Consultancy</span>
                <span className="category-quantity">(1298)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category8.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Medical/Pharma</span>
                <span className="category-quantity">(76212)</span>
              </a>
            </li>
          </ul>
          <ul className="category-list category-list-bottom tr-list">
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category9.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Music & Arts</span>
                <span className="category-quantity">(212)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category10.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Marketing/Sales</span>
                <span className="category-quantity">(972)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category11.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Production/Operation</span>
                <span className="category-quantity">(212)</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <img
                    src="images/icons/category12.png"
                    alt="Icon"
                    className="img-fluid"
                  />
                </span>
                <span className="category-title">Miscellaneous</span>
                <span className="category-quantity">(972)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tr-cta">
        <div className="container">
          <div className="cta-content section">
            <div className="cta-info">
              <div className="pull-left">
                <h1>Add your resume and let your next job find you.</h1>
              </div>
              {/* {console.log(userbool)}
              {console.log(!employeebool)} */}
              {userbool && !employeebool ?
                <a onClick={()=>{checksingleResume()}} style={{color:"white"}} className="btn btn-primary pull-right">
                  Add Your Resume
                </a>
                // <a onClick={resumeExist} className="btn btn-primary pull-right">
                //   Add Your Resume</a>
                :
                <button
                  onClick={invalidResume}
                  className="btn btn-primary pull-right"
                >
                  Add Your Resume
                </button>
              }
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      <div className="tr-job-posted section-padding">
        <div className="container">
          <div className="section-title">
            <h1>Jobs you may be interested in</h1>
          </div>
          <div className="job-tab text-center">
            <ul className="nav nav-tabs justify-content-center" role="tablist">
              <li role="presentation" className="active">
                <a
                  className="active"
                  href="#hot-jobs"
                  aria-controls="hot-jobs"
                  role="tab"
                  data-toggle="tab"
                >
                  Hot Jobs
                </a>
              </li>
              {/* <li role="presentation"><a href="#recent-jobs" aria-controls="recent-jobs" role="tab" data-toggle="tab">Recent
              Jobs</a></li>
          <li role="presentation"><a href="#popular-jobs" aria-controls="popular-jobs" role="tab"
              data-toggle="tab">Popular Jobs</a></li> */}
            </ul>
            <div className="tab-content text-left">
              <div
                role="tabpanel"
                className="tab-pane fade show active"
                id="hot-jobs"
              >
                <div className="row">
                  {post.g.map((add, i) => (
                    <div key={i} className="col-md-6 col-lg-3">
                      <div className="job-item">
                        <div className="item-overlay">
                          <div className="job-info">
                            <a href="#" className="btn btn-primary">
                              {add.jobtype}
                            </a>
                            <span className="tr-title">
                              <a href="job-details.html">{add.title}</a>
                              <span>
                                <a href="#">{add.companyname}</a>
                              </span>
                            </span>
                            <ul className="tr-list job-meta">
                              <li>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                                {add.category} Developer
                              </li>
                              <li>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                                {add.exprience}
                              </li>
                              <li>
                                <i
                                  className="fa fa-money"
                                  aria-hidden="true"
                                ></i>
                                ${add.salary}
                              </li>
                            </ul>
                            <ul className="job-social tr-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-expand"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-bookmark-o"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a onClick={() => { (userbool) ? jobdetailsfunction(add._id) : toast("Login as Seeker") }}><i
                                  className="fa fa-long-arrow-right"
                                  aria-hidden="true"
                                ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="job-info">
                        <center>
                        <div className="company-logo" style={ {width: "50%",height:"10%"}} >
                      <img src="images/others/company.png" alt="images"  className="img-fluid"/>
                    </div>
                    </center>
                          <span className="tr-title">
                            <a href="#">{add.title}</a>
                            <span>
                              <a href="#">{add.companyname}</a>
                            </span>
                          </span>
                          <ul className="tr-list job-meta">
                            <li>
                              <span>
                                <i
                                  className="fa fa-map-signs"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              {add.category} Developer
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-briefcase"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              {add.exprience}
                            </li>
                            <li>
                              <span>
                                <i
                                  className="fa fa-money"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              ${add.salary}
                            </li>
                          </ul>
                          <div className="time">
                            <a href="#">
                              <span class="part-time">{add.jobtype}</span>
                            </a>
                            <span
                              style={{ marginTop: "4%" }}
                              className="pull-right"
                            >
                              Posted on {add.postedDate.slice(0, 16)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
          <div className="row">
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
                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
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
                      <span className="pull-right">Posted on {add.postedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div role="tabpanel" className="tab-pane fade in" id="popular-jobs">
          <div className="row">
            {post.g.map((add,i)=>(
			 
              <div key={i}className="col-md-6 col-lg-3">
                <div className="job-item">
                  <div className="item-overlay">
                    <div className="job-info">
                      <a href="#" className="btn btn-primary">{add.jobtype}</a>
                      <span className="tr-title">
                        <a href="job-details.html">{add.title}</a>
                        <span><a href="#">Dig File</a></span>
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
                        <li><a href="job-details.html"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
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
                      <span><a href="#">Dig File</a></span>
                    </span>
                    <ul className="tr-list job-meta">
                      <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>{add.category} Developer</li>
                      <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>{add.exprience}</li>
                      <li><span><i className="fa fa-money" aria-hidden="true"></i></span>${add.salary}</li>
                    </ul>
                    <div className="time">
                      <a href="#"><span
                         class="part-time">{add.jobtype}</span></a>
                      <span className="pull-right">Posted on {add.postedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="tr-steps bg-image section-padding section-before">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="step">
                  <div className="step-image">
                    <img
                      src="images/icons/step1.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <h1>01 Steps</h1>
                  <h2>Register an account</h2>
                  <p>
                    Register yourself to brighten your Future with a desired job.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="step">
                  <div className="step-image">
                    <img
                      src="images/icons/step2.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <h1>02 Steps</h1>
                  <h2>search your desired job</h2>
                  <p>
                    Advance us with your Skills to guide you for your Career
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="step">
                  <div className="step-image">
                    <img
                      src="images/icons/step3.png"
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <h1>03 Steps</h1>
                  <h2>Send your resume to employers</h2>
                  <p>
                    Wonna Create Resume to enchance people's/employees with your skills and talent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tr-recent-news section-padding">
          <div className="container">
            <div className="section-title">
              <h1>Recent News Articles</h1>
            </div>
            <div className="blog-content">
              <div className="tr-post media">
                <div className="entry-header pull-left">
                  <div className="entry-thumbnail">
                    <a href="#">
                      <img
                        src="images/blog/1.jpg"
                        alt="images"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="entry-content media-body">
                  <h2 className="entry-title">
                    <a href="https://theconversation.com/why-a-universal-job-guarantee-beats-the-basic-income-pipe-dream-186793">
                      Why a universal job guarantee beats the basic income pipe dream
                    </a>
                  </h2>
                  <ul className="entry-meta tr-list">
                    <li>
                      <i className="fa fa-user"></i>By{" "}
                      <a href="https://theconversation.com/why-a-universal-job-guarantee-beats-the-basic-income-pipe-dream-186793">Daniel Tsai </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o"></i>{" "}
                      <a href="https://theconversation.com/why-a-universal-job-guarantee-beats-the-basic-income-pipe-dream-186793">July 27, 2022s</a>
                    </li>

                  </ul>
                </div>
                <div className="blog-post"></div>
              </div>
              <div className="tr-post media">
                <div className="entry-header pull-left">
                  <div className="entry-thumbnail">
                    <a href="#">
                      <img
                        src="images/blog/2.jpg"
                        alt="images"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="entry-content media-body">
                  <h2 className="entry-title">
                    <a href="https://theconversation.com/effective-job-search-requires-good-emotion-management-152655">
                      Effective job search requires good emotion management
                    </a>
                  </h2>
                  <ul className="entry-meta tr-list">
                    <li>
                      <i className="fa fa-user"></i>By{" "}
                      <a href="https://theconversation.com/effective-job-search-requires-good-emotion-management-152655">Serge da Motta Veiga </a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o"></i>{" "}
                      <a href="https://theconversation.com/effective-job-search-requires-good-emotion-management-152655">September 17, 2019</a>
                    </li>

                  </ul>
                </div>
                <div className="blog-post"></div>
              </div>

            </div>
          </div>
        </div>
        <div className="tr-testimonial">
          <div className="container">
            <div className="testimonial-content">
              <div className="testimonial-slider">
                <div className="testimonial">
                  <div className="media">
                    <div className="media-left">
                      <img
                        src="images/others/testimonial.png"
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                    <div className="media-body">
                      <p>
                        If we all did the things we are capable of, we would literally astound ourselves.
                      </p>
                      <div className="testimonial-title">
                        <h2>Thomas Edison</h2>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="media">
                    <div className="media-left">
                      <img
                        src="images/others/testimonial.png"
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                    <div className="media-body">
                      <p>
                        The most common way people give up their power is by thinking they don't have any.
                      </p>
                      <div className="testimonial-title">
                        <h2>Alice Walker</h2>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div className="media">
                    <div className="media-left">
                      <img
                        src="images/others/testimonial.png"
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                    <div className="media-body">
                      <p>
                        I always did something I was a little not ready to do. I think that's how you grow. When there's that moment of 'Wow, I'm not really sure I can do this,' and you push through those moments, that's when you have a breakthrough.
                      </p>
                      <div className="testimonial-title">
                        <h2> Marissa Mayer</h2>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="tr-fun-fact section-padding">
          <div className="container">
            <div className="fun-fact-content">
              <div className="row text-center">
                <div className="col-sm-4">
                  <div className="fun-fact">
                    <img
                      src="images/icons/fun-fact1.png"
                      alt="images"
                      className="img-fluid"
                    />
                    <h1 className="counter">3,412</h1>
                    <span>Live Jobs</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fun-fact">
                    <img
                      src="images/icons/fun-fact2.png"
                      alt="images"
                      className="img-fluid"
                    />
                    <h1 className="counter">12,043</h1>
                    <span>Total Company</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="fun-fact">
                    <img
                      src="images/icons/fun-fact3.png"
                      alt="images"
                      className="img-fluid"
                    />
                    <h1 className="counter">5,798,298</h1>
                    <span>Total Candidate</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="tr-download-app bg-image section-padding section-before">
          <div className="container text-center">
            <h1>Download on App Store</h1>
            <div className="app-content">
              <div className="row">
                <div className="col-sm-4">
                  <div className="download-app">
                    <a href="#">
                      <div className="download-image">
                        <img
                          src="images/icons/app1.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="download-info">
                        <span>available on</span>
                        <strong>Google Play</strong>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="download-app">
                    <a href="#">
                      <div className="download-image">
                        <img
                          src="images/icons/app2.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="download-info">
                        <span>available on</span>
                        <strong>App Store</strong>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="download-app">
                    <a href="#">
                      <div className="download-image">
                        <img
                          src="images/icons/app3.png"
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="download-info">
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
        <div className="footer">
          <div className="footer-top section-padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h3>About Us</h3>
                    <ul className="tr-list">
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
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h3>Job Seekers</h3>
                    <ul className="tr-list">
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
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h3>Employers</h3>
                    <ul className="tr-list">
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
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h3>Newsletter</h3>
                    <p>
                      Earum cumque doloribus, incidunt! Tempora voluptatibus
                    </p>
                    <form className="contact-form" method="post" action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          required="required"
                          placeholder="Your email Id"
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="copyright">
                <p>
                  Copyright © 2023 <a href="#">Seeker.com.</a> All rights
                  reserved.
                </p>
              </div>
              <div className="footer-social pull-right">
                <ul className="tr-list">
                  <li>
                    <a href="#" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Google Plus">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Youtube">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
