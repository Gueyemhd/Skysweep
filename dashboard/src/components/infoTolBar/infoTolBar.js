import React from 'react';
import "./infoTolBar.css";
import MapIcon from '@mui/icons-material/Map';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LoginIcon from '@mui/icons-material/Login';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const InfoTolBar = () => {
    return (
        <div className='infoTolbarContent'>
            <div className='logo'>
                <div className='LogoImg'>

                </div>

                <div className='NameLogo'>
                skySweep
                </div>
            </div>

            <div className='donne'>
                données drone
            </div>

            <div className='carteButton'>
                <div>
                    carte
                </div>
                <button className='MapIconButton'>
                <MapIcon/>
                </button>
            </div>

            <div className='depots'>
                <div>
                    dépots détectés
                </div>

                <button className='TrendingUpButton'>
                <TrendingUpIcon/>
                </button>
                
            </div>
            <div className="inf">
                <LocationCityIcon className="green"/>
                <div>Thiès</div>
            </div>

            <div className="inf">
                <LocationOnIcon className="green"/>
                <div>41.40338, 2.17403</div>
            </div>

            <div className="inf">
                <CalendarMonthIcon className="green"/>
                <div>02 janvier 2024</div>
            </div>

            <div className="inf">
                <AccessTimeIcon className="green"/>
                <div>12H 57mn</div>
            </div>

            <div className="">
                <button className='retirer'>retirer</button>
            </div>

            <div className='reduire'>
                <div>
                    Réduire
                </div>
                <button className='reduireButton'>
                <ChevronLeftIcon/>
                </button>
                
            </div>
        </div>
    );
}

export default InfoTolBar;
