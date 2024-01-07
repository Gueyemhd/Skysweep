import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import GoogleMap from '../../components/mapCard/mapCard';
import "./mapPage.css"
import Tolbar from '../../components/tolbar/tolbar';

const MapPage = () => {
    return (
        
        <div className='mapPage'>
            
            <div className='tolbar'>
                <Tolbar/>
            </div>

            <div className='content'>
                <Topbar/>
                <GoogleMap/>
            </div>
        </div>
    );
}

export default MapPage;
