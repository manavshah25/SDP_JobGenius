import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Navbarone from "../Navbarone";
import "./require.css";
import imgcom from "./logo2.png";
import { useNavigate } from "react-router-dom";
function Index() {
  const Navigate = useNavigate();
  var userId = JSON.parse(localStorage.getItem("user"));
  userId = userId._id;
  console.log(userId);
  const [Data, setData] = useState({
    JavaDev: "",
    PythonDev: "",
    FullStackDev: "",
    UIUXDesginer: "",
    AndroidDev: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log("login")
    try {
      const { JavaDev, PythonDev, FullStackDev, UIUXDesginer, AndroidDev } = Data;
      // console.log(email)
      // console.log(password)
      const res = await fetch("http://localhost:8000/recommend", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          JavaDev,
          PythonDev,
          FullStackDev,
          UIUXDesginer,
          AndroidDev,
        }),
      });
      const y = await res.json();
      // const u = JSON.stringify(y.loginuser);
       console.log(y);
      // if (!y.error) {
      //   // alert("Login successfully")

      //   navigate("/")
      // }
      // else {
      //   toast("You don't have account");
      // }
    } catch (error) {
      console.log(error);
    }
  };
  let handlechange = async (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setData((values) => ({ ...values, [name]: val }));
    console.log(Data.JavaDev)
  };
  return (
    <>
      <Navbarone />

      <div className="row body">
        <div class="registration-form col-md-9">
          <form onSubmit={handlesubmit}>
            <div class="form-icon">
              <span>
                {/* <i class="icon icon-user"></i> */}
                <img src={imgcom} />
              </span>
            </div>
            <div style={{ margin: "10%" }}>
              <TextField
                id="filled-basic"
                onChange={handlechange}
                value={Data.JavaDev}
                name="JavaDev"
                label="Java Dev"
                min="1"
                max="5"
                type="number"
                variant="standard"
                style={{ margin: "10px" }}
              />
              &nbsp;
              <TextField
                id="filled-basic"
                onChange={handlechange}
                value={Data.PythonDev}
                name="PythonDev"
                label="Python Dev"
                type="number"
                variant="standard"
                style={{ margin: "10px" }}
              />
              <br />
              <TextField
                id="filled-basic"
                onChange={handlechange}
                value={Data.FullStackDev}
                name="FullStackDev"
                label="Full Stack Dev"
                type="number"
                variant="standard"
                style={{ margin: "10px" }}
              />
              <TextField
                id="filled-basic"
                onChange={handlechange}
                value={Data.UIUXDesginer}
                name="UIUXDesginer"
                label="UI-UX Desginer"
                type="number"
                variant="standard"
                style={{ margin: "10px" }}
              />
              <TextField
                id="filled-basic"
                onChange={handlechange}
                value={Data.AndroidDev}
                name="AndroidDev"
                label="Android Dev"
                type="number"
                variant="standard"
                style={{ margin: "10px" }}
              />
            </div>
            <div class="buttons" style={{ marginTop: "2%" }}>
              <button
                type="submit"
                style={{
                  marginLeft: "65%",
                  paddingRight: "5%",
                  paddingLeft: "5%",
                }}
                class="btn btn-primary"
              >
                Post
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-3" style={{ marginTop: "8%" }}>
          <div class="section quick-rules" style={{ borderRadius: "10%" }}>
            <span class="tr-title">Quick Rules</span>
            <p>
              Posting an ad on <a href="#">Seeker.com</a> is free! However, all
              post must follow our rules:
            </p>
            <ul class="tr-list">
              <li>
                Do not put your email or phone numbers in the title or
                description.
              </li>
              <li>
                Make sure that all the Job Functions values should be given in
                rating from 1-5. If you don't know the skills marks rating as 1
                in that skill.
              </li>
            </ul>
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

export default Index;
