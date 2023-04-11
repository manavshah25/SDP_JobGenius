import React from "react";
import { useEffect, useState,useReducer } from "react";
import axios from "axios";
function Index() {
  var userId = JSON.parse(localStorage.getItem("user"));
  userId = userId._id;
  console.log(userId);
  var set=JSON.parse(localStorage.getItem("skillset"))
console.log(set); 
const [job, setjob] = useState({
  g:[]
});
  const [recommend, setRecommend] = useState({
  });
  const getrecommend=async()=>{
    var res =await fetch("http://localhost:5000/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       set
      }),
    })
    setRecommend(res.json())
   

  }

  const getjobs = async()=>{
    await axios.post("http://localhost:8000/jobrecommend",{recommend}).then(response=>setjob({g:response.Data}))
  }
  useEffect(() => {
    
     setTimeout( () => {
    getrecommend()
    
    getjobs()
    
    })
    //  const u=JSON.stringify(y.loginuser);
  }, []);


  console.log(recommend)
    // })
   

  return (
    <>
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
    </>
  );
}

export default Index;
