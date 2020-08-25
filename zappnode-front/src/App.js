import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './tailwind.generated.css';
import './landing/components/css/landing.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { AppProvider } from './context/AppState';

import Home from './Home';

function App() {
  return (
    <AppProvider>
      <Router>
        <Home />
      </Router>
    </AppProvider>
  );
}

export default App;
