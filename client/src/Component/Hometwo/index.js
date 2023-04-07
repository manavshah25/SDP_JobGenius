import React from 'react'
import Navbartwo from "./../Navbartwo"
const index = () => {
  return (
    <div className="homepage-2">
    <Navbartwo />
    <div className="tr-users section-before bg-image">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6">
            <div className="job-find">
              <div className="icon">
                <img src="images/others/man.png" alt="Icon" className="img-fluid"/>
              </div>
              <h1>Find a Job</h1>
              <span>5,798,298 Skilld People </span>
              <a href="#" className="btn btn-primary">Search Jobs</a>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="for-employers">
              <div className="icon">
                <img src="images/others/briefcase.png" alt="Icon" className="img-fluid"/>
              </div>
              <h1>For Employers</h1>
              <span>5,798,298 Skilld People</span>
              <a href="job-post.html" className="btn btn-primary">Post a Job</a>
            </div>
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
            <li role="presentation" className="active"><a href="#hot-jobs" aria-controls="hot-jobs" role="tab"
                data-toggle="tab">Hot Jobs</a></li>
            <li role="presentation"><a href="#recent-jobs" aria-controls="recent-jobs" role="tab" data-toggle="tab">Recent
                Jobs</a></li>
            <li role="presentation"><a href="#popular-jobs" aria-controls="popular-jobs" role="tab"
                data-toggle="tab">Popular Jobs</a></li>
          </ul>
          <div className="tab-content text-left">
            <div role="tabpanel" className="tab-pane fade in show active" id="hot-jobs">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="#">Dig File</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <a href="#">Project Manager</a>
                        <span><a href="#">Dig File</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="#">Loop</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/2.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Associate</a>
                        <span><a href="#">Loop</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="#">Humanity Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/3.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span><a href="#">Humanity Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="#">Families</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/4.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Consultant</a>
                        <span><a href="#">Families</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="#">Sky Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/5.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Project Manager</a>
                        <span><a href="#">Sky Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="#">Pencil</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/6.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Associate</a>
                        <span><a href="#">Pencil</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="#">Fox</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/7.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span><a href="#">Fox</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#"><span className="btn btn-primary">Part Time</span></a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="#">Owl</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/8.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Consultant</a>
                        <span><a href="#">Owl</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="#">Loop</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/2.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Associate</a>
                        <span><a href="#">Loop</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="#">Dig File</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <a href="#">Project Manager</a>
                        <span><a href="#">Dig File</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="#">Families</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/4.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Consultant</a>
                        <span><a href="#">Families</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="#">Humanity Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/3.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span><a href="#">Humanity Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="#">Pencil</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/6.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Associate</a>
                        <span><a href="#">Pencil</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="#">Sky Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/5.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Project Manager</a>
                        <span><a href="#">Sky Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="#">Owl</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/8.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Consultant</a>
                        <span><a href="#">Owl</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="#">Fox</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/7.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span><a href="#">Fox</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade in" id="popular-jobs">
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="#">Fox</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/7.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span><a href="#">Fox</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="#">Loop</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/2.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Associate</a>
                        <span><a href="#">Loop</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="#">Dig File</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <a href="#">Project Manager</a>
                        <span><a href="#">Dig File</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="#">Humanity Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/3.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span><a href="#">Humanity Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="#">Families</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/4.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Consultant</a>
                        <span><a href="#">Families</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Freelance</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="#">Pencil</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/6.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Associate</a>
                        <span><a href="#">Pencil</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="freelance">Freelance</span></a>
                        <span className="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Part Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="#">Owl</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/8.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Design Consultant</a>
                        <span><a href="#">Owl</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span className="part-time">Part Time</span></a>
                        <span className="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="job-item">
                    <div className="item-overlay">
                      <div className="job-info">
                        <a href="#" className="btn btn-primary">Full Time</a>
                        <span className="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="#">Sky Creative</a></span>
                        </span>
                        <ul className="tr-list job-meta">
                          <li><i className="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i className="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i className="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
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
                        <img src="images/job/5.png" alt="images" className="img-fluid"/>
                      </div>
                      <span className="tr-title">
                        <a href="#">Project Manager</a>
                        <span><a href="#">Sky Creative</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i className="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div className="time">
                        <a href="#"><span>Full Time</span></a>
                        <span className="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tr-cta">
      <div className="container">
        <div className="cta-content section">
          <div className="cta-info">
            <div className="pull-left">
              <h1>Add your resume and let your next job find you.</h1>
            </div>
            <a href="#" className="btn btn-primary pull-right">Add Your Resume</a>
          </div>
        </div>
      </div>
    </div>
    <div className="tr-fun-fact section-padding">
      <div className="container">
        <div className="fun-fact-content">
          <div className="row text-center">
            <div className="col-sm-4">
              <div className="fun-fact">
                <img src="images/icons/fun-fact-color1.png" alt="images" className="img-fluid"/>
                <h1 className="counter">3,412</h1>
                <span>Live Jobs</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fun-fact">
                <img src="images/icons/fun-fact-color2.png" alt="images" className="img-fluid"/>
                <h1 className="counter">12,043</h1>
                <span>Total Company</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fun-fact">
                <img src="images/icons/fun-fact-color3.png" alt="images" className="img-fluid"/>
                <h1 className="counter">5,798,298</h1>
                <span>Total Candidate</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tr-testimonial-2 text-center">
      <div className="container">
        <div className="section-title">
          <h1>Kind Words From Happy Candidates</h1>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="testimonial">
              <div className="testimonial-info">
                <p>‘’ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore aliqua. Ut enim ad minim veniam, quis nostrud exer ‘’</p>
              </div>
              <div className="testimonial-image">
                <img src="images/others/testimonial-img.png" alt="Imag" className="img-fluid"/>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="testimonial">
              <div className="testimonial-info">
                <p>‘’ Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua. Ut enim
                  ad minim veniam, quis nostrud exer ‘’</p>
              </div>
              <div className="testimonial-image">
                <img src="images/others/testimonial-img.png" alt="Imag" className="img-fluid"/>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="testimonial">
              <div className="testimonial-info">
                <p>“Unt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque ”</p>
              </div>
              <div className="testimonial-image">
                <img src="images/others/testimonial-img.png" alt="Imag" className="img-fluid"/>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="testimonial">
              <div className="testimonial-info">
                <p>“ Ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat ”</p>
              </div>
              <div className="testimonial-image">
                <img src="images/others/testimonial-img.png" alt="Imag" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tr-download-app bg-image section-padding section-before">
      <div className="container text-center">
        <h1>Download on App Store</h1>
        <div className="app-content">
          <div className="row">
            <div className="col-sm-4">
              <div className="download-app">
                <a href="#">
                  <div className="download-image">
                    <img src="images/icons/app1.png" alt="Image" className="img-fluid"/>
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
                    <img src="images/icons/app2.png" alt="Image" className="img-fluid"/>
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
                    <img src="images/icons/app3.png" alt="Image" className="img-fluid"/>
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
                  <li><a href="#">About Seeker</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">International Partners</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Feedback</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-widget">
                <h3>Job Seekers</h3>
                <ul className="tr-list">
                  <li><a href="#">Create Account</a></li>
                  <li><a href="#">Career Counseling</a></li>
                  <li><a href="#">My Bdjobs</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Video Guides</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-widget">
                <h3>Employers</h3>
                <ul className="tr-list">
                  <li><a href="#">Create Account</a></li>
                  <li><a href="#">Products/Service</a></li>
                  <li><a href="#">Post a Job</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-widget">
                <h3>Newsletter</h3>
                <p>Earum cumque doloribus, incidunt! Tempora voluptatibus</p>
                <form className="contact-form" method="post" action="#">
                  <div className="form-group">
                    <input type="email" className="form-control" required="required" placeholder="Your email Id"/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
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
            <p>Copyright © 2017 <a href="#">Seeker.com.</a> All rights reserved.</p>
          </div>
          <div className="footer-social pull-right">
            <ul className="tr-list">
              <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="#" title="Youtube"><i className="fa fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
   
  </div>
  )
}

export default index


