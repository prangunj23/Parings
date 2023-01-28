import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/navbar.js";
import Login from "./components/login.js";
import PageNotFound from './components/404.js';
import Home from './components/home.js';

function App() {

    return (
      <div>
      <NavBar/>
      <Routes>
        <Route exact path="*" element={ <PageNotFound/> } />
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/login" element={ <Login/> } />
      </Routes>
    </div>
    );
}

export default App;
