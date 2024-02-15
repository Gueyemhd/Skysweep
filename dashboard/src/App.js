import './App.css';
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect, Navigate } from "react-router-dom";

import MapPage1 from './pages/mapPage/mapPage1';
import MapPage_depot from './pages/mapPage/mapPage_Depot';
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
          <Route path="/depot" element={ <MapPage_depot/>} />
          <Route path="/info" element={ <InfoPage/>} />
        </Routes>
         
      </div>
    </Router>
  );
}

export default App;
