import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Photo from './components/photo';
import Contact from './components/contact';
import Academic from './components/academic';

function App() {
  return (
    <div>
      <Route exact path="/" render={() =>
          <React.Fragment>
            <Navbar/>
            <Home/>
            <About/>
            <Project/>
            <Photo/>
            <Contact/>
          </React.Fragment>
      }/>
  
      <Route exact path="/academic" component={Academic} />
    </div>
  );
}

export default App;
