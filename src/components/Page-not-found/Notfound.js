import React from 'react';
import './Notfound.css'
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      <div>
        <section>
          <nav className="  fixed-top header navbar navbar-expand-lg bg-body-tertiary text-black d-flex flex-row   ">
            <div className="container-fluid d-flex flex-row justify-content-around  ">


              <div className="  d-flex flex-row " id="navbarSupportedContet">
                <div>
                  <ul className=" text-color  navbar-nav me-auto mb-2 mb-lg-0    ">
                    <li className="nav-item">
                      <Link className=" text-color nav-link " aria-current="page" to="/home" href="#home-main">Home</Link>
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
                    <Link to="/login">  <button className=" btn-log btn btn-outline-success" type="submit">Log in</button> </Link>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </section>


      </div>



      <h1 className='error'> .....404....</h1>
      <h1 className='text'> Page Not Found</h1>

    </div>
  );
};

export default Notfound;