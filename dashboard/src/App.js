import './App.css';
import GoogleMap from './components/mapCard/mapCard';
import GoogleMap1 from './components/mapCard/mapCard1';

import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">

      <div>
        <Topbar/>
      </div>

      

      <div className="carteMap">
      <GoogleMap/>
      </div>
    
    </div>
  );
}

export default App;
