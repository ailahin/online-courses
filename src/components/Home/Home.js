import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css'



const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {

        fetch('../../education.JSON')
            .then(response => response.json())
            .then(data => setCourses(data));
    }, [])

    return (



        <div className='home-bg-color'>
            <div className='Home-container' >
                <div className='home-list'>
                    <h1 className=' home-list'> All Courses</h1>
                </div>

                <div id="courses-part" className="  row row-cols-1 row-cols-md-3 g-4 h-50">


                    {courses.map(course =>
                        <Course
                            key={course.id}
                            course={course} >
                        </Course>)

                    }

                </div>

            </div>
        </div>



        // <div>
        //     {/* {
        //         // courses.map(course=> <Course course={course}> </Course>)
        //         // courses.map(course=> console.log(course))
        //         // courses.map(course=> console.log(course.title))
        //         courses.map(course=> 
        //         <Course 
        //         key={course.id}
        //         course={course} >
        //         </Course>)

        //     } */}

        //     {
        //         courses.map(course=> 
        //             <Course 
        //             key={course.id}
        //             course={course} >
        //             </Course>)
        //     }

        // </div>


    );
};

export default Home;