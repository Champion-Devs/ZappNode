import React from 'react';
import Card from './card';
import Button from '../button/button';

// feature page for the landing page
// authored by Champion-devs

const Features = () => {
    return(
        <section id="features" className="flex justify-center features flex-col py-16 mt-0">
        <h1 className="font-bold text-4xl text-center text-col-secondary text-gray-800">Experience the <span className="text-green-500">benefits</span> of ZappNode.</h1>
        <div className="container mx-auto d-flex">
        <Card heading="Website Monitoring" content="Get instant notifications if your website went down. Save time and money by being able to act fast."/>
        <Card heading="Port Monitoring" content="Find out if your server is still running on the same port. without going through your servers"/>
        <Card heading="Limitless Testing" content="Monitor HTTP(s), Ping, Ports, Keywords, websites and APIs as much as you need at anytime."/>
        <Card heading="Quick Alerts" content="A wide range of fast notification options to integrate into your workflow without any hassle."/>
        <Card heading="Public Status Pages" content="Be transparent. Inform your users of the uptime of your web service with public status pages. "/>
        <Card heading="Uptime Reports" content="View all your uptime data in one location with detailed reports and charting options."/>
        </div>
        <div className="flex justify-center mt-10 mb-10">
        <Button link="/register" content="Start monitoring for FREE." styles="text-cl-none btn-primary py-3 px-6 rounded-full font-semibold"/>
        </div>
        </section>
        
    )
}

export default Features;
