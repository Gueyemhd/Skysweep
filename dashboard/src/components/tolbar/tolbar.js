import React from 'react';
import "./tolbar.css"
import MapIcon from '@mui/icons-material/Map';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LoginIcon from '@mui/icons-material/Login';

const Tolbar = () => {
    return (
        <div className='TolbarContent'>
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

            <div className='reduire'>
                <div>
                    Réduire
                </div>
                <button className='reduireButton'>
                <ChevronLeftIcon/>
                </button>
                
            </div>

            <div className='deconnect'>
                <div>
                    Se déconnecter
                </div>
                <button className='deconnectButton'>
                <LoginIcon/>
                </button>
                
            </div>


        </div>
    );
}

export default Tolbar;
