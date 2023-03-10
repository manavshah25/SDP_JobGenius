import React from "react";
import Navbarone from "./../Navbarone";
function index() {
  return (
    <div>
      <Navbarone />
      <div class="tr-breadcrumb bg-image section-before">
        <div class="container">
          <div class="breadcrumb-info text-center">
            <div class="page-title">
              <h1>Graphics Designer</h1>
            </div>
            <ol class="breadcrumb">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li class="active">Graphics Design</li>
            </ol>
            <div class="banner-form">
              <form action="#">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Job Keyword"
                />
                <div class="dropdown tr-change-dropdown">
                  <a data-toggle="dropdown" href="#" aria-expanded="false">
                    <span class="change-text">Location</span>
                    <i class="fa fa-angle-down"></i>
                  </a>
                  <ul class="dropdown-menu tr-change">
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
                <button type="submit" class="btn btn-primary" value="Search">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="jobs-listing section-padding">
        <div class="container">
          <div class="job-topbar">
            <span class="pull-left">Filter jobs by</span>
            <ul class="nav nav-tabs job-tabs" role="tablist">
              <li>235 Total jobs</li>
              <li role="presentation" class="active">
                <a
                  href="#four-colum"
                  aria-controls="four-colum"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa fa-th" aria-hidden="true"></i>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#two-column"
                  aria-controls="two-column"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa fa-th-list" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="list-menu text-center clearfix">
            <ul class="tr-list">
              <li class="dropdown tr-change-dropdown">
                Category:
                <a data-toggle="dropdown" href="#" aria-expanded="false">
                  <span class="change-text">Designer</span>
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu tr-change">
                  <li>
                    <a href="#">Designer</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Developement</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown tr-change-dropdown">
                Level:
                <a data-toggle="dropdown" href="#" aria-expanded="false">
                  <span class="change-text">Mid</span>
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu tr-change">
                  <li>
                    <a href="#">Top Level</a>
                  </li>
                  <li>
                    <a href="#">Mid Level</a>
                  </li>
                  <li>
                    <a href="#">Entry Level</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown tr-change-dropdown">
                Org Type:
                <a data-toggle="dropdown" href="#" aria-expanded="false">
                  <span class="change-text">Private</span>
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu tr-change">
                  <li>
                    <a href="#">Private</a>
                  </li>
                  <li>
                    <a href="#">public</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown tr-change-dropdown">
                Location:
                <a data-toggle="dropdown" href="#" aria-expanded="false">
                  <span class="change-text">USA</span>
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu tr-change">
                  <li>
                    <a href="#">USA</a>
                  </li>
                  <li>
                    <a href="#">London</a>
                  </li>
                  <li>
                    <a href="#">New York</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown tr-change-dropdown">
                Salary:
                <a data-toggle="dropdown" href="#" aria-expanded="false">
                  <span class="change-text">0 - 50K</span>
                  <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu tr-change">
                  <li>
                    <a href="#">0 - 50K</a>
                  </li>
                  <li>
                    <a href="#">50k - 70K</a>
                  </li>
                  <li>
                    <a href="#">70k - 85K</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="tab-content tr-job-posted">
            <div
              role="tabpanel"
              class="tab-pane fade show active"
              id="four-colum"
            >
              <div class="row">
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Full Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span>
                            <a href="#">Dig File</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/1.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Project Manager</a>
                        <span>
                          <a href="#">Dig File</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span>Full Time</span>
                        </a>
                        <span class="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Part Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/2.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Associate</a>
                        <span>
                          <a href="#">Loop</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="part-time">Part Time</span>
                        </a>
                        <span class="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Freelance
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span>
                            <a href="#">Humanity Creative</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/3.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span>
                          <a href="#">Humanity Creative</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="freelance">Freelance</span>
                        </a>
                        <span class="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Full Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span>
                            <a href="#">Families</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/4.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Consultant</a>
                        <span>
                          <a href="#">Families</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span>Full Time</span>
                        </a>
                        <span class="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Part Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span>
                            <a href="#">Sky Creative</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/5.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Project Manager</a>
                        <span>
                          <a href="#">Sky Creative</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="part-time">Part Time</span>
                        </a>
                        <span class="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Freelance
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Pencil</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/6.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Associate</a>
                        <span>
                          <a href="#">Pencil</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="freelance">Freelance</span>
                        </a>
                        <span class="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Full Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span>
                            <a href="#">Fox</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/7.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span>
                          <a href="#">Fox</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span>Full Time</span>
                        </a>
                        <span class="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#">
                          <span class="btn btn-primary">Part Time</span>
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span>
                            <a href="#">Owl</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/8.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Consultant</a>
                        <span>
                          <a href="#">Owl</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="part-time">Part Time</span>
                        </a>
                        <span class="pull-right">Posted 10 day ago</span>
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
                    <a href="#" class="btn btn-primary pull-right">
                      Add Your Resume
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Full Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span>
                            <a href="#">Dig File</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/1.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Project Manager</a>
                        <span>
                          <a href="#">Dig File</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span>Full Time</span>
                        </a>
                        <span class="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Part Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/2.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Associate</a>
                        <span>
                          <a href="#">Loop</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="part-time">Part Time</span>
                        </a>
                        <span class="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Freelance
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span>
                            <a href="#">Humanity Creative</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/3.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span>
                          <a href="#">Humanity Creative</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="freelance">Freelance</span>
                        </a>
                        <span class="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Full Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span>
                            <a href="#">Families</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/4.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Consultant</a>
                        <span>
                          <a href="#">Families</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span>Full Time</span>
                        </a>
                        <span class="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Part Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span>
                            <a href="#">Sky Creative</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/5.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Project Manager</a>
                        <span>
                          <a href="#">Sky Creative</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="part-time">Part Time</span>
                        </a>
                        <span class="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Freelance
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Pencil</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/6.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Associate</a>
                        <span>
                          <a href="#">Pencil</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="freelance">Freelance</span>
                        </a>
                        <span class="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">
                          Full Time
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span>
                            <a href="#">Fox</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/7.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span>
                          <a href="#">Fox</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span>Full Time</span>
                        </a>
                        <span class="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="job-item">
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#">
                          <span class="btn btn-primary">Part Time</span>
                        </a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span>
                            <a href="#">Owl</a>
                          </span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                            San Francisco, CA, US
                          </li>
                          <li>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                            Mid Level
                          </li>
                          <li>
                            <i class="fa fa-money" aria-hidden="true"></i>$5,000
                            - $6,000
                          </li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-expand" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                class="fa fa-bookmark-o"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="job-details.html">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img
                          src="images/job/8.png"
                          alt="images"
                          class="img-fluid"
                        />
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Consultant</a>
                        <span>
                          <a href="#">Owl</a>
                        </span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                      <div class="time">
                        <a href="#">
                          <span class="part-time">Part Time</span>
                        </a>
                        <span class="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              class="tab-pane fade two-column"
              id="two-column"
            >
              <div class="row">
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/1.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/2.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/3.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/4.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/5.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/6.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/7.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/8.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
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
                    <a href="#" class="btn btn-primary pull-right">
                      Add Your Resume
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/1.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/2.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/3.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/4.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/5.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/6.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/7.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="job-item">
                    <div class="job-info">
                      <div class="clearfix">
                        <div class="company-logo">
                          <img
                            src="images/job/8.png"
                            alt="images"
                            class="img-fluid"
                          />
                        </div>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span>
                            <a href="#">Loop</a>
                          </span>
                        </span>
                        <span>
                          <a href="#" class="btn btn-primary">
                            Part Time
                          </a>
                        </span>
                      </div>
                      <ul class="tr-list job-meta">
                        <li>
                          <span>
                            <i class="fa fa-map-signs" aria-hidden="true"></i>
                          </span>
                          San Francisco, CA, US
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </span>
                          Mid Level
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-money" aria-hidden="true"></i>
                          </span>
                          $5,000 - $6,000
                        </li>
                      </ul>
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

export default index;
