import React from 'react';
import Navbarone from "../Navbarone"
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Experience() {
    const [exp, setexp] = useState({
        jobtype: "",
        workedat: "",
        jobcity: "",
        startdate: "",
        enddate:"",
    });
    const navigate = useNavigate()
    let handleInput = async (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setexp(values => ({ ...values, [name]: val }))
    }
    const handleexp = async (e) => {
        e.preventDefault();
        console.log("detail")
        try {
            const email=localStorage.getItem("user")
            const { jobtype,workedat,jobcity,startdate,enddate } = exp;

            const res = await fetch("http://localhost:8000/experience", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,jobtype,workedat,jobcity,startdate,enddate 
                }),
            })
            //console.log(res)
            let mes=await res.json()
            console.log(mes.message);
            navigate("/skill")
        }
        catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
         <Navbarone />
         <div class="tr-post-job page-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                        <form onSubmit={handleexp}>
                            <div class="short-info code-edit-small">
                               

                                    <div class="section">
                                        <span class="tr-title">Your Experience:</span>
                                        <div class="row">

                                            <div class="col-sm-3">
                                                <label>Job Type :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="jobtype" label="Job Type" value={exp.jobtype} onChange={handleInput} variant="outlined" style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>Worked At Company/Industry :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="workedat" label="Company/Industry" value={exp.workedat} onChange={handleInput} variant="outlined" style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>Job City :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="jobcity" label="Job City" value={exp.jobcity} onChange={handleInput} variant="outlined" style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>Start date :</label>
                                            </div>
                                            <TextField required id="outlined-basic" type='date' name="startdate"  variant="outlined" value={exp.startdate} onChange={handleInput} style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>End date :</label>
                                            </div>
                                            <TextField required id="outlined-basic" type='date' name="enddate" variant="outlined" value={exp.enddate} onChange={handleInput} style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                    </div>
                            </div>

                            <div class="section agreement">
                                <center>
                                    <div class="buttons">
                                        <button type='submit' className='btn btn-primary' >Proceed Next</button>
                                    </div>
                                </center>
                            </div>
                                
                        </form>
                        </div>
                        <div class="col-md-3">
                            <div class="section quick-rules">
                                <span class="tr-title">Quick Rules</span>
                                <p>
                                    Feel up all the required details in the form to give you, best Resume
                                    and make others enthusiatic in you for Job.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;