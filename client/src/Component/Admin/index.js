import React, { useEffect, useState } from 'react'
import Navbarone from "./../Navbarone";
import './Admin.css';
import './javascript'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Index() {
  const [post, setPost] = useState({
    g: []
  });
  const emop = localStorage.getItem('employee')
  const nav = useNavigate()
  function handleClick(id) {
    localStorage.setItem("cuserid", id);
    nav("/verfiycompany")

  }
  useEffect(() => {
    axios.post("http://localhost:8000/data", {
      emop

    }).then(
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
  }, []);
  console.log(post)
  return (

    <div>
      <Navbarone />
      <div class="tr-breadcrumb bg-image section-before">
          <div class="container">
            <div class="breadcrumb-info text-center">
            <div class="page-title">
              <h1>Admin Panel</h1>
              
            </div>

              

            </div>
          </div>
        </div>
      <div  class="cont">
      {post.g.map((add, i) => (

   
        <div class="shift"  key={i}>
          <article onClick={() => handleClick(add._id)}>
            <figure>
              <img alt="A rather marvellous macaw, opening one of its wings to support the cause." src="/images/others/person.png" />
            </figure>
            <h2>{add.title}</h2>


            <div>
              <p>
                This job <b>{add.title}</b> is given to employee which is required by our company <b>{add.companyname}</b> which offers you <b>${add.salary}</b>.
                The employee should  have job of type <b>{add.jobtype}</b> and job of category <b>{add.category}</b>
                {/* <strong>Job Summary:</strong>{add.jobsummary}<br />
                <strong>Salary:</strong>{add.salary}<br />
                <strong>Job Type:</strong>{add.jobtype}<br/>
                <strong>Job Category:</strong>{add.category}<br/> */}
               
              </p>

              <p>
                <strong>Deadline:</strong>{add.deadlineDate.slice(0, 15)}<br/>  
                <strong>Posted:</strong> {add.postedDate.slice(0, 15)}
              </p>
              
              <strong style={{ marginLeft: "-5%" }}>{add.companyname}</strong>
            </div>
          </article>
          </div>
        ))}</div>
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


  )
}

export default Index