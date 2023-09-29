import React from 'react';
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Task from './components/Task';


function App() {

  return (
   <>
         <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/task/:id" element={<Task/>}></Route>
      </Routes>
    <Home/>
   </>
  );
}

export default App;