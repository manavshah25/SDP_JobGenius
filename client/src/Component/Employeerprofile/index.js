import React from "react";
import { useEffect, useState } from 'react'
import Navbarone from "../Navbarone";
import axios from "axios";
function Index() {

  var profile = localStorage.getItem("employee");
  profile = JSON.parse(profile)
  console.log(profile);
  return (
    <div>
      <Navbarone />
      <div class="tr-breadcrumb bg-image section-before">
        <div class="container">
          <div class="breadcrumb-info text-center">

            <div class="page-title">
              <h1>{profile.companyname}</h1>
            </div>
            <ul class="job-meta tr-list list-inline">
              {/* <li><i class="fa fa-map-marker" aria-hidden="true"></i>San Francisco, CA, US</li> */}
              <li><i class="fa fa-phone" aria-hidden="true"></i>+0123 456 789</li>
              <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="#"><span class="__cf_email__"
                data-cfemail="9deee8ededf2efe9ddfaf2f2faf1f8b3fef2f0">{profile.email}</span></a></li>
              <li><i class="fa fa-briefcase" aria-hidden="true"></i>IT Industry</li>
              {/* <li><i class="fa fa-black-tie" aria-hidden="true"></i>Company Size: 2K</li> */}
            </ul>

          </div>
        </div>
      </div>
      <div class="tr-profile section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-lg-3">
              <div class="tr-sidebar">
                <ul class="nav nav-tabs profile-tabs section" role="tablist">
                  <li role="presentation"><a class="active" href="#account-info" aria-controls="account-info" role="tab"
                    data-toggle="tab"><i class="fa fa-life-ring" aria-hidden="true"></i> Account Info</a></li>
                  <li role="presentation"><a href="#company-profile" aria-controls="company-profile" role="tab"
                    data-toggle="tab"><span><i class="fa fa-user-o" aria-hidden="true"></i></span>Company Profile</a></li>

                  {/* <li role="presentation"><a href="#open-role" aria-controls="open-role" role="tab"
                  data-toggle="tab"><span><i class="fa fa-bell-o" aria-hidden="true"></i></span>Open Role</a></li>
              <li role="presentation"><a href="#archived" aria-controls="archived" role="tab" data-toggle="tab"><span><i
                      class="fa fa-clone" aria-hidden="true"></i></span>Archived Job Post</a></li>
              <li role="presentation"><a href="#"><span><i class="fa fa-scissors"
                      aria-hidden="true"></i></span>Logout</a></li> */}
                </ul>
              </div>
            </div>
            <div class="col-md-8 col-lg-9">
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade in show active account-info" id="account-info">
                  <div class="tr-fun-fact">
                    {/* <div class="row">
                  <div class="col-sm-4">
                    <div class="fun-fact media">
                      <div class="fun-fact-icon">
                        <img src="images/icons/fun-fact4.png" alt="images" class="img-fluid"/>
                      </div>
                      <div class="media-body">
                        <h1 class="counter">329</h1>
                        <span>Total job post</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="fun-fact media">
                      <div class="fun-fact-icon">
                        <img src="images/icons/fun-fact5.png" alt="images" class="img-fluid"/>
                      </div>
                      <div class="media-body">
                        <h1 class="counter">23,563</h1>
                        <span>Application submit</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="fun-fact media">
                      <div class="fun-fact-icon">
                        <img src="images/icons/fun-fact6.png" alt="images" class="img-fluid"/>
                      </div>
                      <div class="media-body">
                        <h1 class="counter">27</h1>
                        <span>Call for interview</span>
                      </div>
                    </div>
                  </div>
                </div> */}
                  </div>
                  {/* <div class="section resume-last-updated">
                <span class="icon pull-left"><img src="images/icons/1.png" alt="Icon" class="img-fluid"/></span>
                <div class="updated-info">
                  <span class="pull-left">Profile last updated on</span>
                  <span class="pull-right">24/4/2017</span>
                </div>
              </div> */}
                  <div class="section display-information">
                    <div class="title title-after">
                      <div class="icon"><img src="images/icons/2.png" alt="Icon" class="img-fluid" /></div>
                      <span>Your display information</span>
                    </div>
                    {/* <div class="change-photo">
                  <div class="user-image">
                    <img src="images/others/company-logo.png" alt="Image" class="img-fluid"/>
                  </div>
                  <div class="upload-photo">
                    <label class="btn btn-primary" for="upload-photo">
                      <input type="file" id="upload-photo"/>
                      Change Photo
                    </label>
                    <span class="max-size">Max 20 MB</span>
                  </div>
                </div> */}
                    <ul class="tr-list account-details">
                      <li>Name<span>{profile.name}</span></li>
                      <li>Company Name<span>{profile.companyname}</span></li>
                      <li>Email<span>{profile.email}</span></li>


                      <li>Industry Expertise<span>IT Industry</span></li>

                    </ul>
                  </div>
                  {/* <div class="section">
                <div class="title title-after">
                  <div class="icon"><img src="images/icons/3.png" alt="Icon" class="img-fluid"/></div>
                  <span>Social Link</span>
                </div>
                <ul class="social social-icon-bg tr-list">
                  <li><i class="fa fa-facebook"></i><span class="media-body"><a
                        href="#">https://www.facebook.com/jhondoe</a></span></li>
                  <li><i class="fa fa-twitter"></i><span class="media-body"><a
                        href="#">https://www.twitter.com/jhondoe</a></span></li>
                  <li><i class="fa fa-google-plus"></i><span class="media-body"><a
                        href="#">https://www.googleplus.com/jhondoe</a></span></li>
                  <li><i class="fa fa-linkedin"></i><span class="media-body"><a
                        href="#">https://www.linkedin.com/jhondoe</a></span></li>
                  <li><i class="fa fa-dribbble"></i><span class="media-body"><a
                        href="#">https://www.dribbble.com/jhondoe</a></span></li>
                  <li><i class="fa fa-behance"></i><span class="media-body"><a
                        href="#">https://www.behance.com/jhondoe</a></span></li>
                  <li><i class="fa fa-globe"></i><span class="media-body"><a
                        href="#">https://www.globe.com/jhondoe</a></span></li>
                </ul>
              </div> */}
                </div>
                <div role="tabpanel" class="tab-pane section" id="company-profile">
                  <ul class="tr-list resume-info">
                    <li class="career-objective">
                      <div class="icon">
                        <i class="fa fa-black-tie" aria-hidden="true"></i>
                      </div>
                      <div class="media-body">
                        <span class="tr-title">Company Info</span>
                        <p>{profile.companyname} Company is a leading provider of innovative solutions in the technology industry. Established in 1990, the company has grown rapidly and now serves customers in over 30 countries. {profile.companyname} Company specializes in software development, cloud computing, and IT consulting services for businesses of all sizes. The company's cutting-edge solutions help clients streamline their operations, reduce costs, and stay ahead of the competition. With a team of over 1,000 dedicated professionals, {profile.companyname} Company is committed to delivering exceptional service and results to its clients. The company has received numerous awards for its innovation and expertise, and is proud to be a trusted partner for many of the world's leading companies.



                        </p> <br />

                      </div>
                    </li>
                    <li class="mission-vision">
                      <div class="icon">
                        <i class="fa fa-anchor" aria-hidden="true"></i>
                      </div>
                      <div class="media-body">
                        <span class="tr-title">Mission & Vision</span>
                        <p>A company's mission statement defines the organization's purpose and objectives. It outlines the reason for the company's existence and what it seeks to accomplish. A mission statement should be concise, clear, and specific to the company's industry and market. It should also be memorable and inspiring to both employees and customers. A mission statement can guide decision-making, help align employees with the company's goals, and communicate the company's values to stakeholders.

A company's vision statement describes its long-term aspirations and goals. It should be a concise statement of the company's ideal future, and what it wants to achieve in the long-term. A vision statement can inspire employees and guide strategic planning. It should be aspirational and motivate people to work towards a shared goal.

In summary, a mission statement explains why a company exists and what it seeks to achieve, while a vision statement outlines the company's long-term aspirations and goals. Both are essential for setting a direction for the company and communicating its values and purpose to stakeholders.</p> <br />
                       
                      </div>
                    </li>
                    
                  </ul>
                  
                </div>
                <div role="tabpanel" class="tab-pane section" id="edit-profile">
                  <ul class="tr-list resume-info">
                    <li class="career-objective">
                      <div class="icon">
                        <i class="fa fa-black-tie" aria-hidden="true"></i>
                      </div>
                      <div class="media-body">
                        <span class="tr-title">Career Objective</span>
                        <div class="code-edit">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni।</p>
                        </div>
                      </div>
                    </li>
                    <li class="mission-vision">
                      <div class="icon">
                        <i class="fa fa-anchor" aria-hidden="true"></i>
                      </div>
                      <div class="media-body">
                        <span class="tr-title">Mission & Vision</span>
                        <div class="code-edit">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br />
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni।</p>
                        </div>
                      </div>
                    </li>
                    <li class="work-history">
                      <div class="icon">
                        <i class="fa fa-book" aria-hidden="true"></i>
                      </div>
                      <div class="media-body additem-achiev">
                        <span class="tr-title">Company Achievement</span>
                        <div id="achievement" class="additem">
                          <span id="achiev-clone" class="icon clone"><i class="fa fa-plus" aria-hidden="true"></i></span>
                          <span class="icon remove"><i class="fa fa-times" aria-hidden="true"></i></span>
                          <div class="code-edit-small">
                            <label>Title</label>
                            <div class="code-edit">
                              <span>Introducing Our Mobile “Nexus”</span>
                            </div>
                            <label>Year</label>
                            <div class="calendar">
                              <input type="date" class="form-control" value="2017-06-25" />
                            </div>
                          </div>
                          <label>Description</label>
                          <div class="code-edit">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="buttons pull-right">
                    <a href="#" class="btn button-cancle">Cancle</a>
                    <a href="#" class="btn btn-primary">Update Profile</a>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane open-role" id="open-role">
                  <div class="role remove-item">
                    <div class="left-content">
                      <div class="clearfix">
                        <span class="tr-title">
                          <a href="#">Design Associate</a>
                        </span>
                        <span><a href="#" class="btn btn-primary">Part Time</a></span>
                      </div>
                      <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                    <div class="right-content">
                      <span><a href="#"><i class="fa fa-pencil"></i></a></span>
                      <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                    </div>
                  </div>
                  <div class="role remove-item">
                    <div class="left-content">
                      <div class="clearfix">
                        <span class="tr-title">
                          <a href="#">Design Associate</a>
                        </span>
                        <span><a href="#" class="btn btn-primary">Part Time</a></span>
                      </div>
                      <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                    <div class="right-content">
                      <span><a href="#"><i class="fa fa-pencil"></i></a></span>
                      <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                    </div>
                  </div>
                  <div class="role remove-item">
                    <div class="left-content">
                      <div class="clearfix">
                        <span class="tr-title">
                          <a href="#">Design Associate</a>
                        </span>
                        <span><a href="#" class="btn btn-primary">Part Time</a></span>
                      </div>
                      <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                    <div class="right-content">
                      <span><a href="#"><i class="fa fa-pencil"></i></a></span>
                      <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                    </div>
                  </div>
                  <div class="role remove-item">
                    <div class="left-content">
                      <div class="clearfix">
                        <span class="tr-title">
                          <a href="#">Design Associate</a>
                        </span>
                        <span><a href="#" class="btn btn-primary">Part Time</a></span>
                      </div>
                      <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                    <div class="right-content">
                      <span><a href="#"><i class="fa fa-pencil"></i></a></span>
                      <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                    </div>
                  </div>
                  <div class="role remove-item">
                    <div class="left-content">
                      <div class="clearfix">
                        <span class="tr-title">
                          <a href="#">Design Associate</a>
                        </span>
                        <span><a href="#" class="btn btn-primary">Part Time</a></span>
                      </div>
                      <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                    <div class="right-content">
                      <span><a href="#"><i class="fa fa-pencil"></i></a></span>
                      <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                    </div>
                  </div>
                  <div class="role remove-item">
                    <div class="left-content">
                      <div class="clearfix">
                        <span class="tr-title">
                          <a href="#">Design Associate</a>
                        </span>
                        <span><a href="#" class="btn btn-primary">Part Time</a></span>
                      </div>
                      <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                    <div class="right-content">
                      <span><a href="#"><i class="fa fa-pencil"></i></a></span>
                      <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                    </div>
                  </div>
                  <div class="role remove-item">
                    <div class="left-content">
                      <div class="clearfix">
                        <span class="tr-title">
                          <a href="#">Design Associate</a>
                        </span>
                        <span><a href="#" class="btn btn-primary">Part Time</a></span>
                      </div>
                      <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                    </div>
                    <div class="right-content">
                      <span><a href="#"><i class="fa fa-pencil"></i></a></span>
                      <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane archived-job" id="archived">
                  <div class="job-item remove-item">
                    <div class="job-info">
                      <div class="left-content">
                        <div class="clearfix">
                          <span class="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span><a href="#" class="btn btn-primary">Part Time</a></span>
                        </div>
                        <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      </div>
                      <div class="right-content">
                        <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="job-item remove-item">
                    <div class="job-info">
                      <div class="left-content">
                        <div class="clearfix">
                          <span class="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span><a href="#" class="btn btn-primary">Part Time</a></span>
                        </div>
                        <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      </div>
                      <div class="right-content">
                        <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="job-item remove-item">
                    <div class="job-info">
                      <div class="left-content">
                        <div class="clearfix">
                          <span class="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span><a href="#" class="btn btn-primary">Part Time</a></span>
                        </div>
                        <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      </div>
                      <div class="right-content">
                        <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="job-item remove-item">
                    <div class="job-info">
                      <div class="left-content">
                        <div class="clearfix">
                          <span class="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span><a href="#" class="btn btn-primary">Part Time</a></span>
                        </div>
                        <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      </div>
                      <div class="right-content">
                        <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="job-item remove-item">
                    <div class="job-info">
                      <div class="left-content">
                        <div class="clearfix">
                          <span class="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span><a href="#" class="btn btn-primary">Part Time</a></span>
                        </div>
                        <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      </div>
                      <div class="right-content">
                        <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="job-item remove-item">
                    <div class="job-info">
                      <div class="left-content">
                        <div class="clearfix">
                          <span class="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span><a href="#" class="btn btn-primary">Part Time</a></span>
                        </div>
                        <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      </div>
                      <div class="right-content">
                        <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="job-item remove-item">
                    <div class="job-info">
                      <div class="left-content">
                        <div class="clearfix">
                          <span class="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span><a href="#" class="btn btn-primary">Part Time</a></span>
                        </div>
                        <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      </div>
                      <div class="right-content">
                        <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="job-item remove-item">
                    <div class="job-info">
                      <div class="left-content">
                        <div class="clearfix">
                          <span class="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span><a href="#" class="btn btn-primary">Part Time</a></span>
                        </div>
                        <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      </div>
                      <div class="right-content">
                        <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                      </div>
                    </div>
                  </div>
                  <div class="job-item remove-item">
                    <div class="job-info">
                      <div class="left-content">
                        <div class="clearfix">
                          <span class="tr-title">
                            <a href="job-post.html">Design Associate</a>
                          </span>
                          <span><a href="#" class="btn btn-primary">Part Time</a></span>
                        </div>
                        <span class="deadline">Application Deadline : Jun 27, 2017</span>
                      </div>
                      <div class="right-content">
                        <span class="remove-icon"><i class="fa fa-trash-o"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Index;
