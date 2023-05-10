import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education'
import Navb from './Components/Navb';
import Footer from './Components/Footer';
import Contact from './pages/Contact-Me/Contact';
import "./App.css";





const App =()=> {

      return (
            <div id='wrapper'>
        
                   <BrowserRouter>
                        <Navb/>
                            <Routes>
    
                                    <Route path='/' element={<Home/>}/>
                                    <Route path='/Projects' element={<Projects/>}/>
                                    <Route path='/Experience' element={<Experience/>}/>
                                    <Route path='/Education' element={<Education/>}/>
                                    <Route path='/Contact' element={<Contact/>}/>
    
                            </Routes>
                            <Footer/>
                    </BrowserRouter>
    
            </div>
            
          );
}

export default App;