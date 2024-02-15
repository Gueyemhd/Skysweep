import React, { useState } from "react";
import app from '../../services/firebase';
import { getAuth } from 'firebase/auth'
import './PasswordLoginWithFirebase.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import skysweep from "../../utils/skySweep.png";
import spaceAg from "../../utils/spaceAg.png";
import pngocean from "../../utils/pngocean.png";
import droneAnime from "../../utils/droneAnime.png";

function RegisterAndLogin() {

  const database = getAuth(app);

  const [login, setLogin] = useState(true);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const Confirmedpassword = e.target.Confirmedpassword.value;
    if (type == "signup") {
        if(password == Confirmedpassword ){
            createUserWithEmailAndPassword(database, email, password)
            .then((data) => {
              console.log(data, "authData");
              history("/map");
            })
            .catch((err) => {
              alert(err.code);
              setLogin(true);
            });
        } else{
            alert("Passwords do not match. Please make sure your passwords match.")
            history("/")
        }
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/map");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }
  return (
    <div className="App">
      {/* Registration and login Screen */}
      
      

      <div className="loginPage">

        <div className="logForm">
            <img className='spaceAg' src={spaceAg} /> <br />
            <img className='skysweep' src={skysweep} />
            <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>

                <input name="email" placeholder="Email" />
                <br />
                <input name="password" type="password" placeholder="Password" />
                <br />
                <input className={login == false ? "confirmPass" : "NoConfirm"} name="Confirmedpassword" type="password" placeholder="Confirm you Password" />
                <br />
                <button>{login ? "Se Connecter" : "S'enregistrer"}</button> <br />

                <div className="forgetPassDiv"> Mot de Pass Oublié ? <a className="forgetPass" onClick={handleReset}>Cliquez ici</a> </div>
                <br />
            </form>

            {/* Registration and login Screen 
            <div className="row">
                <div
                className={login == false ? "activeColor" : "pointer"}
                onClick={() => setLogin(false)}
                >
                S'enregistrer
                </div>

                <div
                className={login == true ? "activeColor" : "pointer"}
                onClick={() => setLogin(true)}
                >
                Se Connecter
                </div>
            </div>
          */}
            
            

        </div>

        <div className="Animation">
            <img className='pngocean' src={pngocean} /> <br />
            <img className='droneAnime' src={droneAnime} /> <br />
        </div>

      </div>

    </div>
  );
}
export default RegisterAndLogin;