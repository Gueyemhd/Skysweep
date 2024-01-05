import {React,useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const GoogleMap1 = ({ center, zoom }) => {

    const [mapType, setMapType] = useState('satellite'); // Type de carte par défaut
    const [markers, setMarkers] = useState([
      { lat: 14.6928, lng: -17.4467 }, // Exemple de coordonnées
      { lat: 14.7110, lng: -17.4672 }, // Ajoutez plus de coordonnées si nécessaire
      { lat: 14.6760, lng: -17.4671 },
    ]);

    const handleChange = (event) => {
      setMapType(event.target.value);
    };
  
    const getMapOptions = (maps) => {
      return mapType; 
    };

    var dakar = {lat: 14.6928, lng: -17.4467};

    
  return (
    <div style={{ height: '600px', width: '100%' }}>

      <Select value={mapType} onChange={handleChange} style={{ position: 'absolute', top: 100, left: 100, zIndex:100}}>
        <MenuItem value="roadmap">Plan</MenuItem>
        <MenuItem value="satellite">Satellite</MenuItem>
        <MenuItem value="hybrid">Hybride</MenuItem>
        <MenuItem value="terrain">Relief</MenuItem>
      </Select>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBB3mmlEaF5jkGsxRUkPFbRe80Lyt_PbZw',
          // Vous pouvez également ajouter d'autres paramètres ici
          // Par exemple : language: 'fr'
        }}
        defaultCenter={dakar}
        defaultZoom={zoom}
        options={{
            mapTypeId: getMapOptions(),
            
        }}
        
      >
        
      </GoogleMapReact>
    </div>
  );
};

GoogleMap1.defaultProps = {
  center: {
    lat: 37.7749, // Latitude par défaut
    lng: -122.4194, // Longitude par défaut
  },
  zoom: 11, // Niveau de zoom par défaut
};

export default GoogleMap1;
