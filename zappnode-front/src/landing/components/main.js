import React, {useState, useEffect} from 'react';
import Features from './features/features';
import Pricing from './pricing/pricing';
import './css/tailwind.generated.css';
import './css/landing.css'

const Main = ()=> {
    return(
        <main className="pt-32">
        <Features/>
        <Pricing/>
        </main>
    )
}
export default Main;