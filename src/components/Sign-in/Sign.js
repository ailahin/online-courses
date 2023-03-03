import React from 'react';
import './Sign.css'
import { Link } from 'react-router-dom';

const Sign = () => {


  return (
    <div>

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
                  <Link to="/register">  <button className=" btn-log btn btn-outline-success" type="submit">Register</button> </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>


      <div className='text'>
        Sign in Here
      </div>

      <form className='sign-in-form mx-auto '>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>


    </div>
  );
};

export default Sign;