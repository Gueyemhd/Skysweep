import './App.css';
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect, Navigate } from "react-router-dom";
import GoogleMap from './components/mapCard/mapCard';
import GoogleMap1 from './components/mapCard/mapCard1';

import firebase from 'firebase/app';

import Topbar from "./components/topbar/Topbar";
import MapPage from './pages/mapPage/mapPage';
import MapPage1 from './pages/mapPage/mapPage1';
import InfoPage from './pages/InfoDepot';
import RegisterAndLogin from './pages/login/RegisterAndLogin';
import ForgotPassword from './pages/login/ForgotPassword';

function App() {

  return (
    <Router>

      <div className="App">
        
        <Routes>
          <Route path="/" element={<RegisterAndLogin/>} />
          <Route path="/reset" element={<ForgotPassword/>} />
          <Route path="/map" element={ <MapPage1/>} />
          <Route path="/info" element={ <InfoPage/>} />
        </Routes>
         
      </div>
    </Router>
  );
}

export default App;
