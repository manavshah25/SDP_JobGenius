import React from "react";
import Navbarone from "./../Navbarone";
import { useState } from "react";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
function Contact() {
  const [contact,setContact]=useState({fullname:"",email:"",subject:"",message:""})
  const handleContact = ({ currentTarget: input }) => {

    setContact({ ...contact, [input.name]: input.value });
   

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log("handle")

    try {
      const { fullname, email, subject,message} = contact;
      
      
        const res = await fetch("http://localhost:8000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname, email, subject,message
          }),
        });
        console.log(res)
        var mes = await res.json()
        if (mes.error) {
          console.error(mes.error)
          toast(mes.error)
        } else {

          console.log(mes.message);
          toast("Your message is deleivered")
        }
      
      // navigate("/login")
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Navbarone />
      <div class="tr-breadcrumb bg-image section-before">
        <div class="container">
          <div class="breadcrumb-info text-center">
            <div class="page-title">
              <h1>Contact Us</h1>
            </div>
            <ol class="breadcrumb">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li class="active">Contact Us</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="page-content">
        <div class="container">
         
          <div class="contact-section">
            <div class="row">
              <div class="col-md-8">
                <div class="section">
                  <span class="tr-title">Contact Info</span>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words
                  </p>
                  <form onSubmit={handleSubmit} class="tr-form">
                    <div class="row">
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          required="required"
                          name="fullname"
                          value={contact.fullname}
                          onChange={handleContact}
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="email"
                          class="form-control"
                          required="required"
                          placeholder="Email Address"
                          name="email"
                          value={contact.email}
                          onChange={handleContact}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        required="required"
                        placeholder="Subject"
                        name="subject"
                        value={contact.subject}
                        onChange={handleContact}
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        required="required"
                        rows="5"
                        placeholder="Message"
                        name="message"
                        value={contact.message}
                        onChange={handleContact}
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary pull-right">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-4">
                <div class="section">
                  <span class="tr-title">Contact Info</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <ul class="tr-list info-list">
                    <li class="media">
                      <i class="fa fa-map-signs" aria-hidden="true"></i>
                      <span class="media-body">
                        <span>44 Shirley Ave.</span> West Chicago, IL 60185
                      </span>
                    </li>
                    <li class="media">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span class="media-body">
                        <span>+0123 456 789</span> +0987 654 321
                      </span>
                    </li>
                    <li class="media">
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      <span class="media-body">
                        <span>
                          <a href="#">
                            <span
                              class="__cf_email__"
                              data-cfemail="6801060e07280d05090104460b0705"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </span>
                        <a href="#">
                          <span
                            class="__cf_email__"
                            data-cfemail="afdcdadfdfc0dddbefcac2cec6c381ccc0c2"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </span>
                    </li>
                  </ul>
                  <span class="tr-title">Social Network</span>
                  <div class="social">
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

export default Contact;
