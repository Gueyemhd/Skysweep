import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import {getFirestore, collection, onSnapshot} from 'firebase/firestore'
import "./mapCard.css"
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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



const GoogleMap_depot = ({ initialCenter, initialZoom }) => {

    const [map, setMap] = useState(null);

    const [center, setCenter] = useState(initialCenter);

    const [zoom, setZoom] = useState(initialZoom);

    const [mapType, setMapType] = useState('satellite');

    const handleChange = (event) => {
      setMapType(event.target.value);
    };

    useEffect(() => {
      if (map && mapType) {
        map.setMapTypeId(mapType); 
        console.log(map.center)
      }
    }, [map, mapType]);

    useEffect(() => {
        function initMap() {

            const dakar = { lat: 14.6928, lng: -17.4467 };
            const db = getFirestore(app);
            const dataRef = collection(db, 'points');

            const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
                center: initialCenter,
                zoom: initialZoom,
                mapTypeId: mapType,
            });

            const markers = {};

            onSnapshot(dataRef, (snapshot) => {
              snapshot.docChanges().forEach((change) => {
                const point = change.doc.data();
                const id = change.doc.id;
                console.log(point)

                if (change.type === 'added' || change.type === 'modified') {
                  // Créer ou mettre à jour le marqueur
                  markers[id] = new window.google.maps.Marker({
                    position: { lat: point.lat, lng: point.lng },
                    map: mapInstance,
                    title: `Marker at ${point.lat}, ${point.lng}`,
                  });

                  const infowindow = new window.google.maps.InfoWindow({
                    content: `<div id="content"><h2 id="firstHeading" class="firstHeading">Marker at ${point.lat}, ${point.lng}</h2></div>`,
                  });

                  markers[id].addListener('click', () => {
                    infowindow.open(mapInstance, markers[id]);
                  });
                } else if (change.type === 'removed') {
                  markers[id].setMap(null);
                  delete markers[id];
                }
              });
            });
            
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
          map.setZoom(zoom); 
          console.log(map.center)
        }
    }, [map, center]);

    const [city, setCity] = useState('');

    const cities = {
      "dakar": { lat: 14.6928, lng: -17.4467 },
      "pikine": {lat: 14.758395, lng: -17.394008 },
      "yoff" : {lat : 14.747070, lng : -17.490230},
      "keur massar" : {lat : 14.786003, lng : -17.311729}
      // Ajoutez d'autres villes avec leurs coordonnées
    };

    /*
    const handleSearch = () => {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBB3mmlEaF5jkGsxRUkPFbRe80Lyt_PbZw`)
        .then(response => {
          //const location = response.data.results[0].geometry.location;
          setCenter({ lat: 14.7928, lng: -17.4467 });
          setZoom(15)
          //console.log(mapCenter)
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    };
    */

    const handleSearch = () => {
      // Vérifie si la ville est dans la liste
      if (city.toLowerCase() in cities) {
        // Récupère les coordonnées de la ville
        const { lat, lng } = cities[city.toLowerCase()];
        // Centre la carte sur les coordonnées de la ville
        setCenter({ lat, lng });
        setZoom(15);
      } else {
        console.log("Ville non trouvée dans la liste.");
      }
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
            <button className="buttonSubmit_depot" onClick={handleSearch}><HelpOutlineIcon className="HelpOutlineIcon" /></button>
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

          <div>
            <Select className="MapTypeDropdown" value={mapType} onChange={handleChange} style={{ position: 'absolute', top: 800, left: 100, zIndex:100}}>
              <MenuItem value="roadmap">Plan</MenuItem>
              <MenuItem value="satellite">Satellite</MenuItem>
              <MenuItem value="hybrid">Hybride</MenuItem>
              <MenuItem value="terrain">Relief</MenuItem>
            </Select>
          </div>

          <div className="topbarImg">
          <ImageIcon className = "imgIcon"/>
          <div className="Note">Images</div>
          </div>
        </div>
      </div>



      <div id="map" style={{ height: '93vh', width: '100%' }}></div>

    </div>
  )
};

export default GoogleMap_depot;
