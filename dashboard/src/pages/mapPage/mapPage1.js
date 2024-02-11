import Topbar from '../../components/topbar/Topbar';
import GoogleMap from '../../components/mapCard/mapCard';
import "./mapPage.css"
import Tolbar from '../../components/tolbar/tolbar';
import Topbar1 from '../../components/topbar/Topabar1';
import GoogleMap1 from '../../components/mapCard/mapCard1';
import {React,useState, useEffect } from 'react';
import axios from 'axios';
import GoogleMap_ from '../../components/mapCard/mapCard_';

const MapPage1 = () => {
    const [mapCenter, setMapCenter] = useState({ lat: 14.6928, lng: -17.4467 });


    const handleLocationChange = (city) => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBB3mmlEaF5jkGsxRUkPFbRe80Lyt_PbZw`)
        .then(response => {
          //const location = response.data.results[0].geometry.location;
          setMapCenter({ lat: 15.6928, lng: -17.4467});
          //console.log(mapCenter)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = (state) => {
      setIsOpen(state);
    };

    return (
        
        <div className='mapPage'>
            
            <div className={`Tolbar ${isOpen ? 'open' : 'closed'}`}>
                <Tolbar isOpen={isOpen} onToggle={handleToggle}/>
            </div>

            <div className={`content ${isOpen ? 'open' : 'closed'}`} >
                <GoogleMap_ initialCenter={mapCenter}/>
            </div>
        </div>
    );
}

export default MapPage1;