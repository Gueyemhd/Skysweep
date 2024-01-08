import React, { useEffect } from 'react';
import app from '../../services/firebase';
import {getFirestore, collection, onSnapshot} from 'firebase/firestore'



const GoogleMap = () => {
  useEffect(() => {
    function initMap() {
        const dakar = { lat: 14.6928, lng: -17.4467 };
        const db = getFirestore(app);
        const dataRef = collection(db, 'points');



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
              map: map,
              title: `Marker at ${point.lat}, ${point.lng}`,
            });

            const infowindow = new window.google.maps.InfoWindow({
              content: `<div id="content"><h2 id="firstHeading" class="firstHeading">Marker at ${point.lat}, ${point.lng}</h2></div>`,
            });

            markers[id].addListener('click', () => {
              infowindow.open(map, markers[id]);
            });
          } else if (change.type === 'removed') {
            markers[id].setMap(null);
            delete markers[id];
          }
        });
      });
  
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: dakar,
          zoom: 12,
          mapTypeId: 'satellite',
        });
  

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
  }, []);

  return <div id="map" style={{ height: '800px', width: '100%' }} />;
};

export default GoogleMap;
