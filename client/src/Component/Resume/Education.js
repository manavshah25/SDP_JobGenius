import React from 'react';
import Navbarone from "../Navbarone"
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Education() {
    const [edu, setedu] = useState({
        schoolname: "",
        collagename: "",
        qualification: "",
        yearofgraduation: "",
    });
    const navigate = useNavigate()
    let handleInput = async (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setedu(values => ({ ...values, [name]: val }))
    }
    const handleedu = async (e) => {
        e.preventDefault();
        console.log("detail")
        try {
            const email=localStorage.getItem("user")
            const { schoolname,collagename,qualification,yearofgraduation } = edu;

            const res = await fetch("http://localhost:8000/education", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,schoolname,collagename,qualification,yearofgraduation
                }),
            })
            //console.log(res)
            let mes=await res.json()
            console.log(mes.message);
            navigate("/experience")
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
                        <form onSubmit={handleedu}>
                            <div class="short-info code-edit-small">
                               

                                    <div class="section">
                                        <span class="tr-title">Your Education:</span>
                                        <div class="row">

                                            <div class="col-sm-3">
                                                <label>School Name :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="schoolname" label="School Name" value={edu.schoolname} onChange={handleInput} variant="outlined" style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>Collage Name :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="collagename" label="Collage Name" value={edu.collagename} onChange={handleInput} variant="outlined" style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>Qualification :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="qualification" label="Qualification" value={edu.qualification} onChange={handleInput} variant="outlined" style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>Year of Graduation :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="yearofgraduation" label="YearofGraduation" variant="outlined" value={edu.yearofgraduation} onChange={handleInput} style={{ marginBottom: "20px", width: "280px" }} />
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

export default Education;