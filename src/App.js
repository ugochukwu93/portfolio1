import './App.scss';
import Navbar from '../src/components/navbar/Navbar.jsx';
import Header from './components/header/Header'
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
// import Contact from './components/contact/Contact';

function App() {
  return (
    <div className ="App">
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Footer/>
      {/* <Contact/> */}
    </div>
  );

  
}

export default App;
