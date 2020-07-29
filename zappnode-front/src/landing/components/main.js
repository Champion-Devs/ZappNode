import React, {useState, useEffect} from 'react';
import Features from './features/features';
import Pricing from './pricing/pricing';
import Integration from './integrations/integrate';
import Contact from './form/contact';
import './css/tailwind.generated.css';
import './css/landing.css'
import Integrate from './integrations/integrate';

const Main = ()=> {
    // merging all sections in one component main.
    return(
        <main>
        <Features/>
        <Pricing/>
        <Integrate/>
        <Contact/>
        </main>
    )
}
export default Main;