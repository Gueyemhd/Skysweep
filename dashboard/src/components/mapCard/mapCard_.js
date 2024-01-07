import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import {getFirestore, collection, onSnapshot} from 'firebase/firestore'
import "./mapCard.css"
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";



const GoogleMap_ = ({ initialCenter }) => {

    const [map, setMap] = useState(null);
    const [center, setCenter] = useState(initialCenter);

    useEffect(() => {
        function initMap() {

            const dakar = { lat: 14.6928, lng: -17.4467 };
            const db = getFirestore(app);
            const dataRef = collection(db, 'points');

            const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
                center: initialCenter,
                zoom: 12,
                mapTypeId: 'satellite',
            });

            /*
            mapInstance.addListener('click', (e) => {
                setCenter({ lat: 14.7928, lng: -17.4467 });
            });
            */
            
            setMap(mapInstance);
        }

        if (!window.google) {
            const script = document.createElement('script');
            script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBB3mmlEaF5jkGsxRUkPFbRe80Lyt_PbZw&callback=initMap";
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
            script.addEventListener('load', initMap);
        } else {
            initMap();
        }
    },[center]);

    useEffect(() => {
        if (map && center) {
          map.setCenter(center);
          console.log(map.center)
        }
    }, [map, center]);

    const [city, setCity] = useState('');

    
    const handleSearch = () => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBB3mmlEaF5jkGsxRUkPFbRe80Lyt_PbZw`)
        .then(response => {
          //const location = response.data.results[0].geometry.location;
          setCenter({ lat: 14.7928, lng: -17.4467 });
          //console.log(mapCenter)
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    };
    

    /* Configuration de la clé API de Google Maps Geocoding
    setKey("AIzaSyBB3mmlEaF5jkGsxRUkPFbRe80Lyt_PbZw");

    const handleSearch = () =>  {
      geocode(RequestType.ADDRESS, city).then(
        (response) => {
          //const { lat, lng } = response.results[0].geometry.location;
          //setCenter({ lat: lat, lng: lng });
          setCenter({ lat: 14.7928, lng: -17.4467 });
        },
        (error) => {
          console.error("Erreur lors de la géocodage:", error);
        }
      );
    };*/

  
  return (
    <div>

      <div className="topbarContainer">
        
        <div className="topbarLeft">
          <div className="searchbar">
            <SearchIcon className="searchIcon" />
            <input
              placeholder="Search for city"
              className="searchInput"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="buttonSubmit" onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="topbarCenter">

        </div>
        <div className="topbarRight">
          <div className="topbarDropdown">
            <select className="dropdown" id="nameRubrique">
              <option value="Cantonade">Cantonade</option>
              <option value="Relais">Relais</option>
              <option value="Eclaire">Eclaire</option>
              <option value="Identification">Identification</option>
            </select>
          </div>

          <div className="topbarDropdown">
            <select className="dropdown" id="nameRubrique">
              <option value="Cantonade">Cantonade</option>
              <option value="Relais">Relais</option>
              <option value="Eclaire">Eclaire</option>
              <option value="Identification">Identification</option>
            </select>
          </div>

          <div className="topbarImg">
          <ImageIcon className = "imgIcon"/>
          <div className="Note">Images</div>
          </div>
        </div>
      </div>

      <div id="map" style={{ height: '800px', width: '100%' }}></div>

    </div>
  )
};

export default GoogleMap_;
