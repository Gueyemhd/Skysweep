import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import app from '../../services/firebase';
import { getAuth } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import skysweep from "../../utils/skySweep.png";
import spaceAg from "../../utils/spaceAg.png";
import pngocean from "../../utils/pngocean.png";
import droneAnime from "../../utils/droneAnime.png";

function ForgotPassword(){
    const history = useNavigate();

    const database = getAuth(app);

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(

        <div className="loginPage">

        <div className="logForm">
            <img className='spaceAg' src={spaceAg} /> <br />
            <img className='skysweep' src={skysweep} />
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>Entrez Votre email </label>
                <input name="email" placeholder="Email" /><br/><br/>
                <button>Reset</button>
            </form>

        </div>

        <div className="Animation">
            <img className='pngocean' src={pngocean} /> <br />
            <img className='droneAnime' src={droneAnime} /> <br />
        </div>

      </div>
    )
}
export default ForgotPassword;