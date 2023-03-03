import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Skills.css'

const Skills = () => {
  const [skillcourse, setSkillcourse]= useState([])

  useEffect(()=>{
    fetch('../../courses.JSON')
    .then(reponse=>reponse.json())
    .then(data=>setSkillcourse(data.skill))
  }, [])
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

    <div id="skill-courses-part" className="  row row-cols-1 row-cols-md-3 g-4 h-50">

      {
        skillcourse.map (course=> (
          <div id=' courses-part ' className="col course-container  ">
    <div className=' shadow p-3 mb-5 bg-body-tertiary rounded'>
    <div className="card h-100">
      <div className='course-image'>
      <img src={course.img} className="card-img-top" alt="..." />
      </div>
      <div className=" course-details card-body">
        <h2 className="  card-title title-name">{course.title}</h2>
        <div className='description-text'> <p className="card-text "> <span className='description' > Description: <span/> </span> {course.description} </p></div>
        <div className='price-list'> <p className="card-text"><span className='price'> Price:</span> £{course.price}</p> </div>
        <div> 
          <Link to="/home/:courseId"> <button className=' single-course-btn  btn btn-outline-info'> See Details</button></Link>
          </div>
      <div>
        
      </div>
      </div>
    </div>
    </div>
  </div>
        ))
      }
      
    </div>

    </div>
  );
};

export default Skills;