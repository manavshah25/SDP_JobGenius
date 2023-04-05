import React, { useState, useEffect } from 'react';
import Navbarone from "./../Navbarone"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import DownloadPage from '../DownloadPage';



function Resume() {
    const email = localStorage.getItem("user");
    const [current, setcurrent] = useState([]);
    // const [reducer, setreducer] = useReducer(x=>x+1,0)
    const navigate = useNavigate();
    useEffect(() => {
        axios.post("http://localhost:8000/resume", { email }).then(
            (res) => {
                setTimeout(() => {
                    setcurrent(res.data);

                });
                console.log("success")
            },
            (error) => {
                console.log("error in fetching");
            }
        );
    }, []);
    console.log(current)
    
    
 

    const back = () => {
        navigate('/')
    }
    return (
        <>

            {current &&
                (<div class="col" id="resumedownload">
                    <div class="all-view section-padding">
                        <div class="container">
                            <div class="section">
                                <ul class="tr-list resume-info">
                                    <li class="personal-deatils media">
                                        <div class="icon">
                                            <i class="fa fa-user-secret" aria-hidden="true"></i>
                                        </div>
                                        <div class="media-body">
                                            <span class="tr-title">Personal Details</span>
                                            <ul class="tr-list">
                                                <li><span class="left">FirstName</span><span class="middle">:</span> <span class="right"></span>
                                                </li>
                                                <li><span class="left">LastName</span><span class="middle">:</span> <span class="right"></span></li>
                                                <li><span class="left">City</span><span class="middle">:</span> <span class="right"></span></li>
                                                <li><span class="left">Country</span><span class="middle">:</span> <span
                                                    class="right"></span></li>
                                                <li><span class="left">PinCode</span><span class="middle">:</span> <span class="right"></span></li>
                                                <li><span class="left">Mobile Number</span><span class="middle">:</span> <span
                                                    class="right"></span></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="education-background media">
                                        <div class="icon">
                                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                                        </div>

                                        <div class="media-body">
                                            <span class="tr-title">Education</span>
                                            <ul class="tr-list">
                                                <li>
                                                    <span>School Name</span>
                                                    <ul class="tr-list">

                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>Collage Name</span>
                                                    <ul class="tr-list">

                                                    </ul>

                                                </li>
                                                <li>
                                                    <span>Qualification</span>
                                                    <ul class="tr-list">

                                                    </ul>

                                                </li>
                                                <li>
                                                    <span>Year of Graduation</span>
                                                    <ul class="tr-list">

                                                    </ul>

                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="work-history media">
                                        <div class="icon">
                                            <i class="fa fa-briefcase" aria-hidden="true"></i>
                                        </div>
                                        <div class="media-body">
                                            <span class="tr-title">Experience</span>
                                            <ul class="tr-list">
                                                <li>
                                                    <span>Job Type</span>
                                                    <ul class="tr-list">

                                                    </ul>

                                                </li>
                                                <li>
                                                    <span>JobCity</span>
                                                    <ul class="tr-list">


                                                    </ul>

                                                </li>
                                                <li>
                                                    <span>Working Experience</span>
                                                    <ul class="tr-list">


                                                    </ul>

                                                </li>
                                                <li>
                                                    <span>Started At</span>
                                                    <ul class="tr-list">


                                                    </ul>

                                                </li>
                                                <li>
                                                    <span>Ended At</span>
                                                    <ul class="tr-list">

                                                    </ul>

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

                                            </ul>
                                        </div>
                                    </li>


                                </ul>
                                <DownloadPage rootElementId="resumedownload" downloadFileName="Resume" />
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* <div>
                    <ul className="job-social tr-list">
                        <li><a><i className="fa fa-long-arrow-left" onClick={back} aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div> */}


        </>
    );
}

export default Resume;
