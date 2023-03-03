import React from 'react';
import './Header.css'
import img2 from '../../images/img-2.jpeg'
import img4 from '../../images/img-4.jpeg'
import img5 from '../../images/img-5.jpeg'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


const Header = () => {


  return (
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

      <section id="home-main" className='courses-feature'>
        <div className='container header-bg '>

          <div className=' text-white mx-auto feature-text '>
            <h1 className=' feature-text'> Get the skills to get ahead, stay relevant & earn more</h1>

            <h3 className='feature-text-admission '> Admission is going  on </h3>

          </div>

          {/* <div className=" d-flex flex-row   card-size card text-center mb-3 "> */}
          <div className='row'>

            <div className='carousel'>
              <div id="carouselExample" className="carousel slide card mx-auto img-card-size ">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img5} className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>

            </div>
            <div className=' card-size mx-auto  col-sm-6 mb-4 mb-sm-0'>
              <div className='card'>
                <div className="card-body  ">
                  <h5 className="card-title">Skill Courses</h5>
                  <p className="card-text"> Data analysis, Software development,Web development, Project management </p>
                  <Link to="/home/skills-courses" href=" " className="btn btn-primary">See Details</Link>
                </div>
              </div>

            </div>
            <div className=' card-size col-sm-6 mb-4 mb-sm-0 mx-auto'>
              <div className='card'>
                <div className="card-body  ">
                  <h5 className="card-title"> Language Courses</h5>
                  <p className="card-text">Spoken English, Bangla Crush Course, French for beginner, Japanese Spoken Coursh, Arabic Language</p>
                  <Link to='/home/languge-courses' href=" " className="btn btn-primary">See Details</Link>
                </div>
              </div>

            </div>
            <div className='card-size col-sm-6 mb-4 mb-sm-0 mx-auto'>
              <div className='card'>
                <div className="card-body  ">
                  <h5 className="card-title">Courses for kids</h5>
                  <p className="card-text">Robotics beginner Level, Programming for Kids Drawing, Spoken English , Crafting for Kids  </p>
                  <Link to='/home/kids-courses' href=" " className="btn btn-primary">See Details</Link>
                </div>
              </div>

            </div>
          </div>






        </div>
      </section>








    </div>
  );
};

export default Header;