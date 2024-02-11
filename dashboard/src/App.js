import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoogleMap from './components/mapCard/mapCard';
import GoogleMap1 from './components/mapCard/mapCard1';

import Topbar from "./components/topbar/Topbar";
import MapPage from './pages/mapPage/mapPage';
import MapPage1 from './pages/mapPage/mapPage1';
import InfoPage from './pages/InfoDepot';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={ <MapPage1/>} />
        <Route path="/info" element={ <InfoPage/>} />
        </Routes>
         
    </div>
    </Router>
    
  );
}

export default App;
