import React from 'react';
import Navbarone from "./../Navbarone"
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Personaldetail() {
    const [details, setdetails] = useState({
        fname: "",
        lname: "",
        city: "",
        country: "",
        pincode: "",
        mobile: "",
    });
    const navigate = useNavigate()
    let handleInput = async (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setdetails(values => ({ ...values, [name]: val }))
    }
    const handledetails = async (e) => {
        e.preventDefault();
        console.log("detail")
        try {
            const email=localStorage.getItem("useremail")
            const { fname, lname,city, country, pincode, mobile } = details;

            const res = await fetch("http://localhost:8000/personaldetail", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fname, lname,email, city, country, pincode, mobile
                }),
            })
            //console.log(res)
            let mes=await res.json()
            console.log(mes.message);
            navigate("/education")
        }
        catch (error) {
            console.log(error);

        }
    }
    return (
        <div className="job-post-page">
            <Navbarone />
            <div class="tr-post-job page-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                        <form onSubmit={handledetails}>
                            <div class="short-info code-edit-small">
                               

                                    <div class="section">
                                        <span class="tr-title">Your Personal Details:</span>
                                        <div class="row">

                                            <div class="col-sm-3">
                                                <label>FirstName :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="fname" label="FirstName" value={details.fname} onChange={handleInput} variant="outlined" style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>LastName :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="lname" label="LastName" value={details.lname} onChange={handleInput} variant="outlined" style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>City :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="city" label="City" variant="outlined" value={details.city} onChange={handleInput} style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>Country :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="country" label="Country" variant="outlined" value={details.country} onChange={handleInput} style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>PinCode :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="pincode" label="PinCode" variant="outlined" value={details.pincode} onChange={handleInput} style={{ marginBottom: "20px", width: "280px" }} />
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <label>Mobile Number :</label>
                                            </div>
                                            <TextField required id="outlined-basic" name="mobile" label="Mobile Number" variant="outlined" value={details.mobile} onChange={handleInput} style={{ marginBottom: "20px", width: "280px" }} />
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

export default Personaldetail;