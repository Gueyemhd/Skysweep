import "./mapPage.css"
import Tolbar from '../../components/tolbar/tolbar';
import {React,useState, useEffect } from 'react';
import axios from 'axios';
import GoogleMap_depot from '../../components/mapCard/mapCard_Depot';

const MapPage_depot = () => {
    const [mapCenter, setMapCenter] = useState({ lat: 14.758395, lng: -17.394008 });
    //14.758395, -17.394008

    // const handleLocationChange = (city) => {
    //   axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBB3mmlEaF5jkGsxRUkPFbRe80Lyt_PbZw`)
    //     .then(response => {
    //       //const location = response.data.results[0].geometry.location;
    //       setMapCenter({ lat: 15.6928, lng: -17.4467});
    //       //console.log(mapCenter)
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // };

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = (state) => {
      setIsOpen(state);
    };

    return (
        
        <div className='mapPage'>
            
            <div className={`Tolbar ${isOpen ? 'open' : 'closed'}`}>
                <Tolbar isOpen={isOpen} onToggle={handleToggle} areMarkersAllowed = {true}/>
            </div>

            <div className={`content ${isOpen ? 'open' : 'closed'}`} >
                <GoogleMap_depot initialCenter={mapCenter} initialZoom = {7} />
            </div>
        </div>
    );
}

export default MapPage_depot;
