import React from "react";
import Navbarone from "./../Navbarone";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { blue } from "@mui/material/colors";
function index() {

  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    borderColor: blue,
   
  }));
//  function BpCheckbox(props: CheckboxProps) {
//     return (
//       <Checkbox
//         color="blue"
//         //checkedIcon={<BpCheckedIcon />}
//         icon={<BpIcon />}
//         inputProps={{ 'aria-label': 'Checkbox demo' }}
//         {...props}
//       />
//     );
//   }
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
                      <div class="code-edit">
                        <span>ex, Human Resource Manager</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <label>Job Category</label>
                    </div>
                    <div class="col-sm-9">
                      <div class="dropdown tr-change-dropdown" >
                        <a data-toggle="dropdown" href="#" aria-expanded="true">
                          <span class="change-text">Select a category</span>
                          <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu tr-change">
                          <li>
                            <a href="#">Select a category</a>
                          </li>
                          <li>
                            <a href="#">Software Engineer</a>
                          </li>
                          <li>
                            <a href="#">Project Manager</a>
                          </li>
                          <li>
                            <a href="#">Graphics Designer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row job-category">
                    <div class="col-sm-3">
                      <label>Job Category</label>
                    </div>
                    <div class="col-sm-9">
                      <div class="job-type">
                        <input
                          type="radio"
                          name="radio1"
                          value="full-time"
                          id="full-time"
                        />
                        <label for="full-time">Full Time</label>
                        <input
                          type="radio"
                          name="radio1"
                          value="part-time"
                          id="part-time"
                        />
                        <label for="part-time">Part Time</label>
                        <input
                          type="radio"
                          name="radio1"
                          value="freelance"
                          id="freelance"
                        />
                        <label for="freelance">Freelance</label>
                        <input
                          type="radio"
                          name="radio1"
                          value="contract"
                          id="contract"
                        />
                        <label for="contract">Contract</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <label>Salary Information</label>
                    </div>
                    <div class="col-sm-9">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="code-edit">
                            <span>$5000</span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="aegotiable">
                            <span>Or</span>
                            <input
                              type="radio"
                              name="radio2"
                              value="aegotiable"
                              id="aegotiable"
                            />
                            <label for="aegotiable">Negotiable</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row exprience-level">
                    <div class="col-sm-3">
                      <label>Exprience Level</label>
                    </div>
                    <div class="col-sm-9">
                      <div class="exprience">
                        <input
                          type="radio"
                          name="radio3"
                          value="entry-level"
                          id="entry-level"
                        />
                        <label for="entry-level">Entry Level</label>
                        <input
                          type="radio"
                          name="radio3"
                          value="mid-level"
                          id="mid-level"
                        />
                        <label for="mid-level">Mid Level</label>
                        <input
                          type="radio"
                          name="radio3"
                          value="mid-senior"
                          id="mid-senior"
                        />
                        <label for="mid-senior">Mid-Senior Level</label>
                        <input
                          type="radio"
                          name="radio3"
                          value="top-level"
                          id="top-level"
                        />
                        <label for="top-level">Top Level</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <label>Job Function</label>
                    </div>
                    <div class="col-sm-9">
                    <FormControlLabel
                      value="end"
                      control={<Checkbox />}
                      label="Java Dev"
                      labelPlacement="end"
                    />
                     <FormControlLabel
                      value="end"
                      control={<Checkbox />}
                      label="Python Dev"
                      labelPlacement="end"
                    /> <FormControlLabel
                      value="end"
                      control={<Checkbox />}
                      label="Full Stack Dev"
                      labelPlacement="end"
                    /> <FormControlLabel
                      value="end"
                      control={<Checkbox />}
                      label="UI-UX Desginer"
                      labelPlacement="end"
                    />
                     <FormControlLabel
                      value="end"
                      control={<Checkbox />}
                      label="Android Dev"
                      labelPlacement="end"
                    />
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
                    <div class="code-edit">
                      <span>Write few lines about your Job</span>
                    </div>
                    <span class="characters-left">5000 Characters left</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <label>Key Responsibilities:</label>
                  </div>
                  <div class="col-sm-9">
                    <div class="code-edit">
                      <span>Write few lines about your Job</span>
                    </div>
                    <span class="characters-left">5000 Characters left</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <label>Minimum Requirements:</label>
                  </div>
                  <div class="col-sm-9">
                    <div class="code-edit">
                      <span>Write few lines about your Job</span>
                    </div>
                    <span class="characters-left">5000 Characters left</span>
                  </div>
                </div>
              </div>
              
              <div class="section agreement">
                <label for="send">
                  <input type="checkbox" name="send" id="send" />
                  You agree to our <a href="#">Terms of Use</a> and
                  <a href="#">Privacy Policy</a> and acknowledge that you are
                  the rightful owner of this item and using Trade to find a
                  genuine buyer.
                </label>
                <div class="buttons">
                  <a href="#" class="btn btn-primary">
                    Post Your Job
                  </a>
                  <a href="#" class="btn button-cancle">
                    Cancle
                  </a>
                </div>
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

export default index;
