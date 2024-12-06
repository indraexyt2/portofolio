import React from 'react';
import EnterLoading from './components/EnterLoading';
import ExitLoading from './components/ExitLoading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contatcs from './pages/Contacts';
import MainLayout from './components/MainLayout';

function App() {

  return (
    <Router>
      <EnterLoading />
      <ExitLoading />
      <Routes>

        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
          } 
        />

        <Route path="/about" element={
          <MainLayout>
            <About />
          </MainLayout>
          } 
        />

        <Route path="/education" element={
          <MainLayout>
            <Education />
          </MainLayout>
          } 
        />
        
        <Route path="/projects" element={
          <MainLayout>
            <Projects />
          </MainLayout>
          } 
        />
        
        <Route path="/resume" element={
          <MainLayout>
            <Resume />
          </MainLayout>
          } 
        />

        <Route path="/contacts" element={
          <MainLayout>
            <Contatcs />
          </MainLayout>
          } 
        />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App
