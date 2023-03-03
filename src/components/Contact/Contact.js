import './Contact.css'
import { Link } from 'react-router-dom';

import React from 'react';

const Contact = () => {
  return (
    <div >
      <section>
        <nav className=" fixed-top header navbar navbar-expand-lg bg-body-tertiary text-black d-flex flex-row   ">
          <div className="container-fluid d-flex flex-row justify-content-around  ">


            <div className="  d-flex flex-row " id="navbarSupportedContet">
              <div>
                <ul className=" text-color  navbar-nav me-auto mb-2 mb-lg-0    ">
                  <li className="nav-item">
                    <Link className=" text-color nav-link " aria-current="page" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/courses" id=' courses-part' >Courses</Link >
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/blog"> Blog </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/contact">Contact</Link >
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
                  <Link to="/register">  <button className=" btn-log btn btn-outline-success" type="submit"> Register</button> </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>

      <div class="container contact-form mt-5">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h3 class="text-center">Contact Us</h3>
            <form id="contact-form" method="post" action="">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" name="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <Link to='/home'>
                <button type="submit" class="btn btn-primary submit-btn">Submit</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Contact;