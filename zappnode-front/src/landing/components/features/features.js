import React, {useState, useEffect} from 'react';
import Card from './card';
import Button from '../button/button';
import '../css/tailwind.generated.css';
import '../css/landing.css';

const Features = props => {
    return(
        <section className="flex justify-center features flex-col py-16 mt-0">
        <h1 className="font-bold text-4xl text-center text-col-secondary text-gray-800">Get all the benefit using ZappNode.</h1>
        <p className="text-center w-2/3 mt-3 mx-auto font-base font-semibold text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="container mx-auto d-flex">
        <Card heading="Ip monitor" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <Card heading="Url Monitor" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <Card heading="Keyword Monitor" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <Card heading="Port Monitor" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <Card heading="Ticketing Tools" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <Card heading="Transaction monitor" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        </div>
        <div className="flex justify-center mt-10 mb-10">
        <Button link="#" content="start monitoring in seconds" styles="text-cl-none btn-primary py-3 px-6 rounded-full font-semibold"/>
        </div>
        </section>
        
    )
}

export default Features;