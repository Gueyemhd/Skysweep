import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import "./tolbar.css"
import MapIcon from '@mui/icons-material/Map';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LoginIcon from '@mui/icons-material/Login';
import droneImage from "../../utils/drone.png";

const Tolbar = ({ isOpen, onToggle }) => {

    const navigate = useNavigate()

    const [isOpen1, setIsOpen1] = useState(true);

    const handleToggleSidebar = () => {
      setIsOpen1(!isOpen1);
    };
    
    const handleClick = () => {
        onToggle(!isOpen);
        setIsOpen1(!isOpen1);
    };



    return (
        <nav className={`TolbarContent ${isOpen1 ? 'open' : 'closed'}`}>
            <div className={`logo ${isOpen1 ? 'open' : 'closed'}`}>
                <div className={`LogoImg ${isOpen1 ? 'open' : 'closed'}`}>
                  <img className='droneImg' src={droneImage} />
                </div>

                <div className={`NameLogo ${isOpen1 ? 'open' : 'closed'}`}>
                skySweep
                </div>
            </div>

            <div className={`donne ${isOpen1 ? 'open' : 'closed'}`}>
                <span>données drone</span>
                <img className='' src={droneImage} />
            </div>

            <div onClick={() => navigate('/map')} className={`carteButton ${isOpen1 ? 'open' : 'closed'}`}>
                <div>
                    carte
                </div>
                <button className={`MapIconButton ${isOpen1 ? 'open' : 'closed'}`}>
                <MapIcon/>
                </button>
            </div>

            <div onClick={() => navigate('/depot')} className={`depots ${isOpen1 ? 'open' : 'closed'}`}>
                <div>
                    dépots détectés
                </div>

                <button className={`TrendingUpButton ${isOpen1 ? 'open' : 'closed'}`}>
                <TrendingUpIcon/>
                </button>
                
            </div>

            <div className={`reduire ${isOpen1 ? 'open' : 'closed'}`}>
                <div>
                    Réduire
                </div>
                <button className={`reduireButton ${isOpen1 ? 'open' : 'closed'}`} onClick={handleClick}>
                <ChevronLeftIcon/>
                </button>
                
            </div>

            <div className={`deconnect ${isOpen1 ? 'open' : 'closed'}`}>
                <div>
                    Se déconnecter
                </div>
                <button onClick={() => navigate('/')} className={`deconnectButton ${isOpen1 ? 'open' : 'closed'}`}>
                <LoginIcon/>
                </button>
                
            </div>


        </nav>
    );
}

export default Tolbar;
