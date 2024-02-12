
import './App.css';
import { About } from './Components/About';
import { Home } from './Components/Home';
import Login from './Components/Login';
import  Navbar  from './Components/Navbar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <header>
      <div className="App">
      <Router>
        <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        
         
          
        </Routes>
      
        </>
      </Router>
     
    </div>
      </header>
    </div>
  );
}

export default App;
