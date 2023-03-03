import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sign from './components/Sign-in/Sign';
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/Page-not-found/Notfound';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import Skills from './components/SkillCourses/Skills';
import SingleCourse from './components/SingleCourse/SingleCourse';
import Kidscourses from './components/KidsCourses/Kidscourses';
import Language from './components/Language/Language';
import Register from './components/Register/Register';





const HomePage = () => (
  <>
    <Header/>
    <Home />
  </>
);

function App() {
  return (
    <div className="App">

    


      <Routes>

        <Route path='/course' element={<Home />} />
        <Route path="/" element={<Header/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<Sign/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/courses" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route  path='/home/skills-courses' element={<Skills/>} />
        <Route path='/home/languge-courses' element={<Language/>}/>
        <Route path='/home/kids-courses' element={<Kidscourses/>} />
        <Route path='/home/:courseId'  element={<SingleCourse/> }/>
        <Route exact path="*" element={<Notfound> </Notfound>} />
      </Routes>

     
    </div>
  );
}

export default App;
