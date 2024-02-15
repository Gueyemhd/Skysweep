import React, { useState } from "react";
import app from '../../services/firebase';
import { getAuth } from 'firebase/auth'
import './PasswordLoginWithFirebase.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {

  const database = getAuth(app);

  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/map");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
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
      <div className="row">
        <div
          className={login == false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>

        <div
          className={login == true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
      </div>
      <h1>{login ? "SignIn" : "SignUp"}</h1>

      <div className="loginPage">

        <div className="logForm">

            <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
                <input name="email" placeholder="Email" />
                <br />
                <input name="password" type="text" placeholder="Password" />
                <br />
                <p onClick={handleReset}>Forgot Password?</p>
                <br />
                <button>{login ? "SignIn" : "SignUp"}</button>
            </form>

        </div>

        <div className="Animation">
            
        </div>

      </div>

    </div>
  );
}
export default RegisterAndLogin;