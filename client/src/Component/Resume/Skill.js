import React from 'react';
import Navbarone from "./../Navbarone"
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Checkbox} from '@mui/material';
import {FormControl} from '@mui/material';
import {FormControlLabel} from '@mui/material';
import {FormGroup} from '@mui/material';
function Skill() {
    const [skill, setSkill] = useState({
        Java:"false",Python:"false",React:"false",ASPNET:"false",dbms:"false"
    })
    
    const navigate = useNavigate()
    const checksingleResume=()=>{
        // var count=0;
        localStorage.setItem("singleResume",1);
        // count++;
        // localStorage.setItem("count",count);

    }
    const handlechangecheck = (event) => {
        setSkill(values=>({...values ,[event.target.name]: event.target.checked}));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("detail")
        try {
            const email=localStorage.getItem("useremail")
            const {Java,Python,React,ASPNET,dbms} = skill;
            
            const res = await fetch("http://localhost:8000/skill", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,Java,Python,React,ASPNET,dbms
                }),
            })
            //console.log(res)
            let mes=await res.json()
            console.log(mes.message);
            navigate("/resume")
        }
        catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <Navbarone />
            <div class="tr-post-job page-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <form onSubmit={handleSubmit}>
                                <div class="short-info code-edit-small">


                                    <div class="section">
                                        <span class="tr-title">Your Skills:</span>
                                        <FormControl component="fieldset">
                                            <FormGroup aria-label="position" col>

                                                <FormControlLabel
                                                    value={skill.Java}
                                                    control={<Checkbox />}
                                                    onChange={handlechangecheck}
                                                    label="Java"
                                                    name="Java"
                                        
                                                    labelPlacement="end"
                                                />
                                                   <FormControlLabel
                                                    value={skill.Python}
                                                    control={<Checkbox />}
                                                    onChange={handlechangecheck}
                                                    label="Python"
                                                    name="Python"
                                                    labelPlacement="end"
                                                />
                                                    <FormControlLabel
                                                    value={skill.React}
                                                    control={<Checkbox />}
                                                    onChange={handlechangecheck}
                                                    label="React"
                                                    name="React"
                                                    labelPlacement="end"
                                                />
                                                <FormControlLabel
                                                    value={skill.ASPNET}
                                                    control={<Checkbox />}
                                                    onChange={handlechangecheck}
                                                    label="ASPNET"
                                                    name="ASPNET"
                                                    labelPlacement="end"
                                                />
                                                <FormControlLabel
                                                    value={skill.dbms}
                                                    control={<Checkbox />}
                                                    onChange={handlechangecheck}
                                                    label="Database Management System"
                                                    name="dbms"
                                                    labelPlacement="end"
                                                />
                                            </FormGroup>
                                        </FormControl>
                                    </div>
                                </div>

                                <div class="section agreement">
                                    <center>
                                        <div class="buttons">
                                            
                                            <button type='submit' className='btn btn-primary' onClick={checksingleResume} >Proceed Next</button>
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
        </>
    );
}

export default Skill;