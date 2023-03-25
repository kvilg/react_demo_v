import Header from './Components/Header/Header';
import './App.css';
import Main from './Components/Main/Main';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import RegConf from './Components/RegConf/RegConf';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/reg" element={<Registration/>} />
          <Route path="/regc" element={<RegConf/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
