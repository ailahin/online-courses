import React from 'react';
import './Blog.css'
import { Link } from 'react-router-dom';

const Blog = () => {

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
                  <Link to="/login">  <button className=" btn-log btn btn-outline-success" type="submit">Log in</button> </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>


      <div class="container mt-5">
        <h1>Blog of Learning Courses</h1>
        <div class="post">
          <p>Online courses have become increasingly popular over the last few years, and for good reason. They offer a range of benefits that make them a great option for anyone looking to learn new skills or enhance their knowledge. Here are some of the main benefits:</p>
          <ul>
            <li>Flexibility: Online courses are often self-paced, which means you can study whenever it's convenient for you. This is great if you have a busy schedule or other commitments that make it difficult to attend traditional classes.</li>
            <li>Cost-effective: Online courses are often cheaper than traditional courses, and there are often no additional costs for textbooks or materials. This can make learning more accessible for people who may not have the resources to attend traditional classes.</li>
            <li>Customization: Online courses often offer a range of options for learners to customize their learning experience, such as choosing the pace of the course, the order of topics, and the type of assessments.</li>
            <li>Access to top-quality education: Online courses often provide access to top-quality education that may not be available locally. This means you can learn from experts in your field and gain valuable knowledge and skills.</li>
          </ul>
          <p class="small">by Aminul Islam Lahin</p>
        </div>
      </div>



    </div>
  );
};

export default Blog;