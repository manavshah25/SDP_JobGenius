import React from "react";
import Navbar from "../Navbarone"
import { NavLink, useNavigate } from "react-router-dom";
function Index() {
  const nav=useNavigate()
  return (
    <>
    <Navbar />
    <div class="page-content">
      <div class="container">
        <div class="tr-found section">
          <div class="row">
            <div class="col-md-4">
              <div class="found-image">
                <img
                  src="images/others/404.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="found-info">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>We can't seem to find the page you're looking for.</p>
               <a onClick={()=>nav("/")}  class="btn btn-primary">
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Index;
