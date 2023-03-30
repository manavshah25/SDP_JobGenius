import React, { useState, useEffect } from 'react';
import Navbarone from "./../Navbarone"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import "./resume.css"

function Resume() {
    const email = localStorage.getItem("user");
    const [post, setpost] = useState({
        g: []
    })
    const navigate = useNavigate();
    useEffect(() => {
        axios.post("http://localhost:8000/resume", { email }).then((response) => {
            setpost({ g: response.data })
        })
    }, [])
    console.log(post)
    const back = () => {
        navigate('/')
    }
    return (
        <>

            <div class="col">

                {post.g.map((add, index) => { 
                    <div>
                <div class="tr-breadcrumb bg-image section-before">
                    <div class="container">
                        <div class="breadcrumb-info text-center">
                            <div class="user-image">
                                <img src="images/others/author.png" alt="Image" class="img-fluid" />
                            </div>
                            <div class="user-title">
                                <h1>Jhon Doe</h1>
                            </div>
                            <ul class="job-meta tr-list list-inline">
                                <li><i class="fa fa-map-marker" aria-hidden="true"></i>San Francisco, CA, US</li>
                                <li><i class="fa fa-phone" aria-hidden="true"></i>+0123 456 789</li>
                                <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="#"><span class="__cf_email__"
                                    data-cfemail="f8929097969c979db89f95999194d69b9795">[email&#160;protected]</span></a></li>
                                <li><i class="fa fa-briefcase" aria-hidden="true"></i>UI & UX Designer</li>
                            </ul>
                            <ul class="breadcrumb-social social-icon-bg  tr-list">
                                <li><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i> <span>Twitter</span> </a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i> <span>Google Plus</span> </a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i><span>Linkedin</span> </a></li>
                                <li><a href="#"><i class="fa fa-dribbble"></i> <span>Dribbble</span></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i> <span>Behance</span></a></li>
                                <li><a href="#"><i class="fa fa-globe"></i> <span>Website</span> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="all-view section-padding">
                    <div class="container">
                        <div class="section">
                            <ul class="tr-list resume-info">

                                <li class="work-history media">
                                    <div class="icon">
                                        <i class="fa fa-briefcase" aria-hidden="true"></i>
                                    </div>
                                    <div class="media-body">
                                        <span class="tr-title">Experience</span>
                                        <ul class="tr-list">
                                            <li>
                                                <span>Senior Graphic Designer @ Buildomo</span>
                                                <span class="present">2017 - Present</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat.</p>
                                            </li>
                                            <li>
                                                <span>Former Graphic Designer @ Ideame</span>
                                                <span class="present">2015 - 2016</span>
                                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </li>
                                            <li>
                                                <span>Head of Design @ Titan Compnay</span>
                                                <span class="present">2007 - 2015</span>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                            </li>
                                            <li>
                                                <span>Graphic Designer @ Precision</span>
                                                <span class="present">2005 - 2007</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat.</p>
                                            </li>
                                            <li>
                                                <span>Graphic Designer (Intern) @ Costa Rica Fruit Compnay</span>
                                                <span class="present">2003 - 2005</span>
                                                <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="education-background media">
                                    <div class="icon">
                                        <i class="fa fa-briefcase" aria-hidden="true"></i>
                                    </div>
                                    <div class="media-body">
                                        <span class="tr-title">Education Background</span>
                                        <ul class="tr-list">
                                            <li>
                                                <span>Senior Graphic Designer @ Buildomo</span>
                                                <ul class="tr-list">
                                                    <li>Year: 1999 - 2001</li>
                                                    <li>Major: Major in Accounting</li>
                                                    <li>Course Duration: 2 Years</li>
                                                    <li>Result: 4.00</li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                    nisi ut aliquip ex ea commodo consequat.</p>
                                            </li>
                                            <li>
                                                <span>Bachalor of Arts @ Universty of Bristol</span>
                                                <ul class="tr-list">
                                                    <li>Year: 1999 - 2001</li>
                                                    <li>Major: Major in Accounting</li>
                                                    <li>Course Duration: 2 Years</li>
                                                    <li>Result: 4.00</li>
                                                </ul>
                                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </li>
                                            <li>
                                                <span>Diploma in Graphics Design @ Cincinnati Christian University</span>
                                                <ul class="tr-list">
                                                    <li>Year: 1999 - 2001</li>
                                                    <li>Major: Major in Accounting</li>
                                                    <li>Course Duration: 2 Years</li>
                                                    <li>Result: 4.00</li>
                                                </ul>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="language-proficiency media">
                                    <div class="icon">
                                        <i class="fa fa-language" aria-hidden="true"></i>
                                    </div>
                                    <div class="media-body">
                                        <span class="tr-title">Skills:</span>
                                        <ul class="tr-list">
                                            <li>
                                                <span>English</span>
                                                <ul class="tr-list rating">
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span>German</span>
                                                <ul class="tr-list rating">
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span>Spanish</span>
                                                <ul class="tr-list rating">
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span>Latin</span>
                                                <ul class="tr-list rating">
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="personal-deatils media">
                                    <div class="icon">
                                        <i class="fa fa-user-secret" aria-hidden="true"></i>
                                    </div>
                                    <div class="media-body">
                                        <span class="tr-title">Personal Details</span>
                                        <ul class="tr-list">
                                            <li><span class="left">Name</span><span class="middle">:</span> <span class="right">Jhon Doe</span>
                                            </li>
                                            <li><span class="left">LastName</span><span class="middle">:</span> <span class="right">Robert
                                                Doe</span></li>
                                            <li><span class="left">City</span><span class="middle">:</span> <span class="right">Ismatic
                                                Roderos Doe</span></li>
                                            <li><span class="left">Country</span><span class="middle">:</span> <span
                                                class="right">26/01/1982</span></li>
                                            <li><span class="left">PinCode</span><span class="middle">:</span> <span class="right">United State
                                                of America</span></li>
                                            <li><span class="left">Mobile Number</span><span class="middle">:</span> <span
                                                class="right">Canadian</span></li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                            <div class="buttons pull-right">
                                <a href="#" class="btn button-send"><i class="fa fa-envelope-o" aria-hidden="true"></i>Send Email</a>
                                <a href="#" class="btn btn-primary"><i class="fa fa-cloud-download" aria-hidden="true"></i>Download Resume as
                                    doc</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                })}
                <div>
                    <ul className="job-social tr-list">
                        <li><a><i className="fa fa-long-arrow-left" onClick={back} aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Resume;
