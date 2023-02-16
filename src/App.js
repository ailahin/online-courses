import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sign from './components/Sign-in/Sign';
import { Route, Routes } from 'react-router-dom';
import Notfound from './components/Page-not-found/Notfound';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';





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
        <Route path="/login" element={<Login/>} />
        <Route path="/courses" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Notfound> </Notfound>} />
      </Routes>
    </div>
  );
}

export default App;
