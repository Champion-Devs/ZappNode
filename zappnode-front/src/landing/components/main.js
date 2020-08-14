import React from 'react';
import Features from './features/features';
import Pricing from './pricing/pricing';
import Contact from './form/contact';
import Integrate from './integrations/integrate';


const Main = ()=> {
    // merging all sections in one component main.
    return(
        <main>
        <Features/>
        <Integrate/>
        <Pricing/>
        <Contact/>
        </main>
    )
}
export default Main;
