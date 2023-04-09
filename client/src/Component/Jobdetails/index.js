import React from 'react'
import Navbarone from '../Navbarone'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { NavLink } from 'react-router-dom';
// import ErrorBoundary from '../ErrorBoundary';
function Index() {
  //const [red,setred]=useReducer(x=>x+1,0)
  const [current, setcurrent] = useState();
  const id = localStorage.getItem("id")
  console.log(id);
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user);
  const invalidResume = () => {
    toast("Login as a User to create resume")
  }
  const userbool = JSON.parse(localStorage.getItem("userbool"));
  const employeebool = JSON.parse(localStorage.getItem("employeebool"));
  const nav = useNavigate()
  useEffect(() => {
    axios.post("http://localhost:8000/details", { id }).then(
      (res) => {
        setTimeout(() => {
          setcurrent(res.data);

        });
        console.log("sucess")
      },
      (error) => {
        console.log("error in fetching");
      }
    );
  }, []);
  console.log(current)

  const handleclick = async (id) => {
    const res = await axios.post("http://localhost:8000/jobupdate", { id, user })
    console.log(res.data)
  }
  return (

    <>
      <Navbarone />
      {current && (<div>
        <div class="tr-breadcrumb bg-image section-before">
          <div class="container">
            <div class="breadcrumb-info text-center">
              <div class="breadcrumb-logo">
                <img src="images/others/company-logo.png" alt="Logo" class="img-fluid" />
              </div>

              <div>
                <div class="page-title">


                </div>
                <ul class="tr-list job-meta list-inline">
                  <li><i class="fa fa-map-signs" aria-hidden="true"></i>{current[0].jobtype}</li>
                  <li><i class="fa fa-map-marker" aria-hidden="true"></i>{current[0].category}</li>
                  <li><i class="fa fa-money" aria-hidden="true"></i>${current[0].salary}</li>
                  <li><i class="fa fa-tags" aria-hidden="true"></i>{current[0].title}</li>
                  <li><i class="fa fa-hourglass-start" aria-hidden="true"></i>Application Deadline : {current[0].postedDate.slice(0, 15)}-{current[0].deadlineDate.slice(0, 15)}</li>
                </ul>
                <div class="buttons">
                  <a onClick={() => { handleclick(current[0]._id); toast("You have Applied for this Job") }} class="btn btn-primary"><i class="fa fa-briefcase" aria-hidden="true"></i>Apply For This Job</a>
                  {/* <a href="#" class="btn button-bookmark"><i class="fa fa-bookmark" aria-hidden="true"></i>Bookmark</a>
                  <span class="btn button-share"><i class="fa fa-share-alt" aria-hidden="true"></i>Share <span><a href="#"><i
                    class="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i class="fa fa-twitter"
                      aria-hidden="true"></i></a><a href="#"><i class="fa fa-google-plus"
                        aria-hidden="true"></i></a></span></span> */}
                </div>
              </div>

            </div>
          </div>
        </div>


        <div class="job-details section-padding">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-lg-9">
                <div class="job-summary section">
                  <span class="tr-title">{current[0].title}</span>
                  <p>{current[0].jobsummary}</p>

                  <span>Key Responsibilities:</span>
                  <ol start="1"><li>Meeting performance expectations: An employee is responsible for meeting the performance standards set by the company for their role. This includes completing tasks and projects on time, producing high-quality work, and meeting productivity targets.</li>

                    <li>Communicating effectively: An employee must communicate effectively with their colleagues, superiors, and customers. This includes listening actively, providing clear instructions, and responding promptly to emails and phone calls.</li>

                    <li>Being accountable: An employee must take responsibility for their actions and decisions. This includes admitting mistakes, seeking help when needed, and being honest and transparent in all their dealings.</li>

                    <li>Upholding company values: An employee must uphold the company's values and standards. This includes behaving ethically and with integrity, treating others with respect, and following all company policies and procedures.</li>

                    <li>Continuous learning: An employee must be committed to continuous learning and professional development. This includes staying up-to-date with industry trends and advancements, seeking feedback and coaching, and taking initiative to improve their skills and knowledge.</li>

                    <li>Collaborating with others: An employee must be able to work effectively with others, including team members, customers, and stakeholders. This includes sharing knowledge and expertise, being open to feedback and new ideas, and resolving conflicts in a constructive manner.</li>

                    <li>Prioritizing tasks: An employee must be able to prioritize tasks and manage their time effectively. This includes identifying urgent and important tasks, setting deadlines, and using tools and techniques to maximize productivity.</li></ol>
                  <span>Minimum Requirements</span>
                  <ul class="tr-list">
                    {current[0].jobrequirement}
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-lg-3">
                <div class="tr-sidebar">
                  <div class="widget-area">
                    <div class="widget short-info">
                      <h3 class="widget_title">Short Info</h3>
                      <ul class="tr-list">
                        <li class="media">
                          <div class="pull-left"><i class="fa fa-calendar" aria-hidden="true"></i></div>
                          <div class="media-body"><span>Published:</span>{current[0].postedDate.slice(0, 15)}</div>
                        </li>
              
                        <li class="media">
                          <div class="pull-left"><i class="fa fa-line-chart" aria-hidden="true"></i></div>
                          <div class="media-body"><span>Experience:</span>{current[0].exprience}</div>
                        </li>
                       
                      </ul>
                    </div>
                    <div class="widget cmpany-info">
                      <h3 class="widget_title">Company Info</h3>
                      <span>{current[0].companyname}</span>
                      <p>A Emerging company
                      </p>
                      <ul class="tr-list">
                  
                        
                      </ul>
                      <div class="widget-social">
                        <ul class="tr-list">
                          <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tr-cta">
              <div class="cta-content section">
                <div class="cta-info">
                  <div class="pull-left">
                    <h1>Add your resume and let your next job find you.</h1>
                  </div>
                  {userbool && !employeebool ?
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
                  <ToastContainer />
                </div>
              </div>
            </div>
            <div class="tr-job-posted similar-jobs">
              <span class="tr-title">Similar Jobs Post</span>
              <div class="row">
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Full Time</a>
                        <span class="tr-title">
                          <a href="#">Project Manager</a>
                          <span><a href="#">Dig File</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/1.png" alt="images" class="img-fluid" />
                      </div>
                      <span class="tr-title">
                        <a href="#">Project Manager</a>
                        <span><a href="#">Dig File</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span>Full Time</span></a>
                        <span class="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Part Time</a>
                        <span class="tr-title">
                          <a href="#">Design Associate</a>
                          <span><a href="#">Loop</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/2.png" alt="images" class="img-fluid" />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Associate</a>
                        <span><a href="#">Loop</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span class="part-time">Part Time</span></a>
                        <span class="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Freelance</a>
                        <span class="tr-title">
                          <a href="#">Graphic Designer</a>
                          <span><a href="#">Humanity Creative</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/3.png" alt="images" class="img-fluid" />
                      </div>
                      <span class="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span><a href="#">Humanity Creative</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span class="freelance">Freelance</span></a>
                        <span class="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Full Time</a>
                        <span class="tr-title">
                          <a href="#">Design Consultant</a>
                          <span><a href="#">Families</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/4.png" alt="images" class="img-fluid" />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Consultant</a>
                        <span><a href="#">Families</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span>Full Time</span></a>
                        <span class="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      <div class="tr-download-app bg-image section-padding section-before">
        <div class="container text-center">
          <h1>Download on App Store</h1>
          <div class="app-content">
            <div class="row">
              <div class="col-sm-4">
                <div class="download-app">
                  <a href="#">
                    <div class="download-image">
                      <img src="images/icons/app1.png" alt="Image" class="img-fluid" />
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
                      <img src="images/icons/app2.png" alt="Image" class="img-fluid" />
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
                      <img src="images/icons/app3.png" alt="Image" class="img-fluid" />
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
    </>

  )
}

export default Index