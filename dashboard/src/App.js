// App.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={login} />
     
      </div>
    </Router>
  );
}

export default App;
