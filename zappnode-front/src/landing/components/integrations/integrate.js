import React from 'react';
import Card from './card'
import Button from '../button/button'
import '../css/tailwind.generated.css';
import '../css/landing.css';

let Integrate = ()=> {
    // integration with default card component
    // need refactoring
    return(
        <section id="integration" className="integrations flex justify-center flex-col bg-secondary py-16">
        <h1 className="font-bold text-4xl text-center text-col-secondary text-gray-800">Get Notified with all available integration.</h1>
        <p className="text-center w-2/3 mt-3 mx-auto  font-base font-semibold text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="cards flex justify-center mt-10 flex-wrap">
        <Card icon="1"/>
        <Card icon="2"/>
        <Card icon="3"/>
        <Card icon="4"/>
        <Card icon="5"/>
        <Card icon="6"/>
        <Card icon="7"/>
        <Card icon="8"/>
        <Card icon="9"/>
        <Card icon="10"/>
        <Card icon="11"/>
        <Card icon="12"/>
        <Card icon="13"/>
        <Card icon="14"/>
        <Card icon="15"/>
        <Card icon="16"/>
        <Card icon="17"/>
        <Card icon="18"/>
        <Card icon="19"/>
        <Card icon="20"/>
        <Card icon="21"/>
        <Card icon="22"/>
        <Card icon="23"/>
        <Card icon="24"/>
        </div>
        <div className="flex justify-center mt-16">
        <Button link="#" content="Seel available integration" styles="text-cl-none btn-primary py-3 px-6 rounded-full font-semibold"/>
        </div>
        </section>
    )
}

export default Integrate;