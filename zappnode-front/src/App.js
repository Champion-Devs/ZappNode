import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './landing/index';
import './tailwind.generated.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Home from './Home';

function App() {
  return (
    <>
      {/* <Landing/> */}
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
