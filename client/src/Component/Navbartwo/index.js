import React from 'react'
import { NavLink } from 'react-router-dom'
const index = () => {
  return (
    <div>
        <header className="tr-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
            </button>
            <a className="navbar-brand" href="index-2.html"><img className="img-fluid" src="images/logo.png" alt="Logo"/></a>
          </div>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="tr-dropdown active"><a href="#">Home</a>
                <ul className="tr-dropdown-menu left tr-list fadeInUp" role="menu">
                  <li><NavLink to="/themeone">Home theme one</NavLink></li>
                  <li className="active"><NavLink to="/themetwo">Home theme two</NavLink></li>
                </ul>
              </li>
              <li><a href="job-post.html">Post A Job</a></li>
              <li><a href="listing.html">Job List</a></li>
              <li><a href="job-details.html">Job Details</a></li>
              <li className="tr-dropdown"><a href="#">Pages</a>
                <ul className="tr-dropdown-menu tr-list fadeInUp" role="menu">
                  <li><a href="employee-profile.html">Employee Profile</a></li>
                  <li><a href="employer-profile.html">Employer Profile</a></li>
                  <li><a href="view-compnay.html">View Compnay</a></li>
                  <li><a href="view-resume.html">View Resume</a></li>
                  <li><a href="coming-soon.html">Coming Soon</a></li>
                  <li><a href="notification.html">Notification</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="signup.html">Sign Up</a></li>
                  <li><a href="signin.html">Sign In</a></li>
                  <li><a href="500.html">500 Opsss</a></li>
                  <li><a href="404.html">404 Error</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="dropdown tr-change-dropdown">
              <i className="fa fa-globe"></i>
              <a data-toggle="dropdown" href="#" aria-expanded="false"><span className="change-text">United Kingdom</span><i
                  className="fa fa-angle-down"></i></a>
              <ul className="dropdown-menu tr-change tr-list">
                <li><a href="#">United Kingdom</a></li>
                <li><a href="#">United States</a></li>
                <li><a href="#">China</a></li>
                <li><a href="#">Russia</a></li>
              </ul>
            </div>
            <ul className="sign-in tr-list">
              <li><i className="fa fa-user"></i></li>
              <li><a href="signin.html">Sign In </a></li>
              <li><a href="signup.html">Register</a></li>
            </ul>
            <a href="job-post.html" className="btn btn-primary">Post Job</a>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default index