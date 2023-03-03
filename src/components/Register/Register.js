import './Register.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>

      <h1 className='text'> Register Here</h1>

      <section>
        <nav className="  fixed-top header navbar navbar-expand-lg bg-body-tertiary text-black d-flex flex-row   ">
          <div className="container-fluid d-flex flex-row justify-content-around  ">


            <div className="  d-flex flex-row " id="navbarSupportedContet">
              <div>
                <ul className=" text-color  navbar-nav me-auto mb-2 mb-lg-0    ">
                  <li className="nav-item">
                    <Link className=" text-color nav-link " aria-current="page" to="/home" href="#home-main">Home</Link>
                  </li>
                  <li className="nav-item">

                    <Link className="nav-link" to="/courses">Courses</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/contact">Contact</Link>
                  </li>

                </ul>
              </div>
              <div className=" form d-flex flex-row">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

              </div>
              <div className="btn-log-sign  d-flex  flex-row justify-content-end">
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <Link to="/signin"> <button className=" btn-sign btn btn-outline-success" type="submit">Sign in</button> </Link>
                  <Link to="/register">  <button className=" btn-log btn btn-outline-success" type="submit">Register</button> </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>



      <div className='login-form mx-auto'>

        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="validationCustom03" class="form-label">First Name</label>
            <input type="text" class="form-control" id="validationCustom03" required />
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" required />
            <div class="valid-feedback">

            </div>
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">Username or Email Adress</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div class="invalid-feedback">
                Please choose a username or email .
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label">Country</label>
            <input type="text" class="form-control" id="validationCustom03" required />
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">City</label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">Choose...</option>
              <option>London</option>
              <option>Dhaka</option>
              <option>Paris</option>
              <option>Lima</option>
              <option>New York</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" required />
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <Link to="/home">  <button class="btn btn-primary" type="submit">Register </button></Link>
          </div>
        </form>

      </div>

    </div>
  );
};

export default Register;