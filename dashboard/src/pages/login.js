// login.js

import React, { useState, useEffect } from 'react';
import './login_style.css'; 

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const droneImage = document.getElementById('droneImage');
        droneImage.style.animation = 'droneAnimation 5s infinite';
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-page">
            <div className="left-section">
                <h2>Page de Connexion</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Mot de passe:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Se Connecter</button>
                </form>
            </div>
            <div className="right-section">
                <img
                    src="/path/to/background-image.jpg"
                    alt="Background"
                    className="background-login"
                />
                <img
                    src="/path/to/drone-login.png"
                    alt="Drone"
                    id="droneImage"
                    className="drone-image"
                />
            </div>
        </div>
    );
}

export default login;
