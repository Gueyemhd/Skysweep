import {React, useState} from 'react';
import Topbar from '../../components/topbar/Topbar';
import GoogleMap from '../../components/mapCard/mapCard';
import "./mapPage.css"
import Tolbar from '../../components/tolbar/tolbar';

const MapPage = () => {

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = (state) => {
      setIsOpen(state);
    };
    return (
        
        <div className='mapPage'>
            
            <div className='tolbar'>
                <Tolbar />
            </div>

            <div className='content'>
                <Topbar/>
                <GoogleMap/>
            </div>
        </div>
    );
}

export default MapPage;
