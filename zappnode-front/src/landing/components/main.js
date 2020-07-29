import React from 'react';
import Features from './features/features';
import Pricing from './pricing/pricing';
import Contact from './form/contact';
import Integrate from './integrations/integrate';
import Navigation from './navigation/navigate'
import './css/tailwind.generated.css';
import './css/landing.css'


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