import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './tailwind.generated.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Home from './Home';

function App() {
  return (
    <>
      <Router>
        <h1 className="text-center">WELCOME TO ZAPPNODE</h1>
        <Home></Home>
      </Router>
    </>
  );
}

export default App;
