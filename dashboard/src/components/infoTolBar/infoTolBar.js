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
import { useNavigate } from "react-router-dom";
import droneImage from "../../utils/drone.png";

const InfoTolBar = ({ville, lng, lat, seconds, nanoseconds}) => {
    const navigate = useNavigate()
    var firebaseTimestamp = {
        seconds: seconds,
        nanoseconds: nanoseconds
    };
    
    // Créez un objet Date en utilisant les secondes et les nanosecondes
    var milliseconds = firebaseTimestamp.seconds * 1000 + Math.floor(firebaseTimestamp.nanoseconds / 1000000);
    var date = new Date(milliseconds);
    
    // console.log("=====Recu=====")
    // console.log(datetime)
    var year = date.getUTCFullYear(); // Année en UTC
    var month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Mois en UTC
    var day = date.getUTCDate().toString().padStart(2, '0'); // Jour en UTC
    var hours = date.getUTCHours().toString().padStart(2, '0'); // Heures en UTC
    var minutes = date.getUTCMinutes().toString().padStart(2, '0');

    var formattedDate = `${day}-${month}-${year}`
    var formamttedTime = `${hours}h:${minutes}mn`

    return (
        <div className='infoTolbarContent'>
            <div className='logo'>
                <div className='LogoImg'>
                <img className='droneImg' src={droneImage} />
                </div>

                <div className='NameLogo'>
                skySweep
                </div>
            </div>

            <div className='donne'>
                données drone
            </div>

            <div className='carteButton' onClick={() => navigate('/map')}>
                <div>
                    carte
                </div>
                <button className='MapIconButton'>
                <MapIcon/>
                </button>
            </div>

            <div className='depots' onClick={() => navigate('/depot')}>
                <div>
                    dépots détectés
                </div>

                <button className='TrendingUpButton'>
                <TrendingUpIcon/>
                </button>
                
            </div>
            <div className="inf">
                <LocationCityIcon className="green"/>
                <div>{ville}</div>
            </div>

            <div className="inf">
                <LocationOnIcon className="green"/>
                <div>{lng}, {lat}</div>
            </div>

            <div className="inf">
                <CalendarMonthIcon className="green"/>
                <div>{formattedDate}</div>
            </div>

            <div className="inf">
                <AccessTimeIcon className="green"/>
                <div>{formamttedTime}</div>
            </div>

            <div className="">
                <button className='retirer'>retirer</button>
            </div>
{/* 
            <div className='reduire'>
                <div>
                    Réduire
                </div>
                <button className='reduireButton'>
                <ChevronLeftIcon/>
                </button>
                
            </div> */}
        </div>
    );
}

export default InfoTolBar;
