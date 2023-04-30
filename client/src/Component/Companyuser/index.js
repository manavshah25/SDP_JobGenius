import React, { useReducer } from "react";
import "./user.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
function Index() {
  const [post, setPost] = useState({
    g: [],
  });
  const [delred, setDelred] = useReducer(x => x + 1, 0)
  const [acceptred, setacceptred] = useReducer(x => x + 1, 0)
  const [rejectred, setrejectred] = useReducer(x => x + 1, 0)
  const [viewresume, setresume] = useReducer(x => x + 1, 0)
  const nav = useNavigate()
  const jobid = localStorage.getItem("cuserid");
  useEffect(() => {
    axios
      .post("http://localhost:8000/jobuser", {
        jobid,
      })
      .then(
        (res) => {
          setTimeout(() => {
            setPost({ g: res.data });
          });
          console.log("sucess");
        },
        (error) => {
          console.log("error in fetching");
        }
      );
  }, [delred, acceptred, rejectred,viewresume]);
  var accepted = "Accepted"
  var rejected = "Rejected"
  const handleclickaccept = async (userId) => {

    const update = await axios.post("http://localhost:8000/updateaccept", {
      userId, jobid,
      accepted,

    })
    setacceptred()
  };
  const handleclickresume = async (email) => {
   localStorage.setItem("useremail",email);
    nav("/resume")

  };
  const handleclickreject = async (userId) => {

    const update = await axios.post("http://localhost:8000/updatereject", {
      userId, jobid,
      rejected,


    })
    setrejectred()
  };
  const handleclickdelete = async (userId) => {

    const update = await axios.post("http://localhost:8000/delete", {
      userId, jobid,


    })
    setDelred()
    console.log(update)
  };
  //   const handleclickdel = async(userId) => {

  //     const update= await axios.post("https://localhost:8000/delete",{
  //      userId,jobid
  //     })
  //     setDelred()
  //   };
  console.log(post.g);

  return (
    <>
      {post && (
        <div class="n">
          <div class="container-xl">
            <div class="table-responsive">
              <div class="table-wrapper">
                <div class="table-title">
                  <div class="row">
                    <div class="col-sm-6">
                      <h2>
                        Manage <b>Applicants</b>
                      </h2>
                    </div>
                  </div>
                </div>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>
                        <span class="custom-checkbox">
                          <input type="checkbox" id="selectAll" />
                          <label for="selectAll"></label>
                        </span>
                      </th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Work Status</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.g.map((add, i) => (
                      <tr key={i}>
                        <td>
                          <span class="custom-checkbox">
                            <input
                              type="checkbox"
                              id="checkbox1"
                              name="options[]"
                              value="1"
                            />
                            <label for="checkbox1"></label>
                          </span>
                        </td>
                        <td>{add[0].name}</td>
                        <td>{add[0].email}</td>
                        <td>{add[0].workstatus}</td>
                        <td>{add.status}</td>
                        <td>
                          <td>
                            { 
                              <a
                               onClick={() => handleclickresume(add[0].email)}
                                class="edit"
                                data-toggle="modal"
                               
                              >
                                <svg
                                  xmlns="'http://www.w3.org/2000/svg'"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-eye"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                              </a>
                            }
                            &nbsp; &nbsp;
                            <a
                              href="#deleteEmployeeModal"
                              class="delete"
                              onClick={() => handleclickdelete(add[0]._id)}
                              data-toggle="modal"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash3-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                              </svg>
                            </a>
                          </td>
                          <td>
                            <a
                              href="#EmployeeModal"
                              class="edit"
                              onClick={() => handleclickaccept(add[0]._id)}
                              data-toggle="modal"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                color="green"
                                height="16"
                                fill="currentColor"
                                class="bi bi-clipboard2-check-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                              </svg>
                            </a>
                            &nbsp;
                            <a
                              href="#EmployeeModal"
                              class="delete"
                              onClick={() => handleclickreject(add[0]._id)}
                              data-toggle="modal"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-clipboard2-x-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708L8 8.293Z" />
                              </svg>
                            </a>
                          </td>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
          <div id="deleteEmployeeModal" class="modal fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <form>
                  <div class="modal-header">
                    <h4 class="modal-title">Delete Employee</h4>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      &times;
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Successfully  deleted the Record</p>
                    <p class="text-warning">
                      <small>This action cannot be undone.</small>
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button data-dismiss="modal"
                      aria-hidden="true" type="button" class="btn btn-success">OK</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
