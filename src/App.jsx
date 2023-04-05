import Header from './Components/Header/Header';
import './App.css';
import Main from './Components/Main/Main';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import RegConf from './Components/RegConf/RegConf';


const App = () => {

  const [emailRoot,setEmailRoot] = useState("");

  const [loginRoot,setLoginRoot] = useState("");

  console.log("login == "+loginRoot);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main setEmailRoot={setEmailRoot}/>} />
          <Route path="/login" element={<Login setLoginRoot={setLoginRoot}/>} />
          <Route path="/registration" element={<Registration email={emailRoot}/>} />
          <Route path="/regc" element={<RegConf login={loginRoot}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
