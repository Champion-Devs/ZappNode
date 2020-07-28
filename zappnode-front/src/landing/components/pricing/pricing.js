import React, {useState, useEffect} from 'react';
import Card from './card';
import '../css/tailwind.generated.css';
import '../css/landing.css';

const Pricing = () => {
    return(
        <section className="pricing bg-primary text-primary flex flex-col py-10 pb-32 ">
        <h1 className="text-4xl font-extrabold text-center mt-16">We give the best pricing you can afford.</h1>
        <p className="text-center mt-6 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet sagittis arcu.</p>
        <p className="text-center font-semibold">Lorem ipsum dolor sit amet.</p>
        <div className="cards flex justify-center mt-16 flex-wrap">
        <Card list={["Up to 5 users", "Instant IP monitor", "100 Monitors per month", "Email/Phone Support", "Basic Analytics"]} heading="Starter" amount={50}/>
        <Card list={["Up to 5 users", "Instant IP monitor", "100 Monitors per month", "Email/Phone Support", "Basic Analytics"]} heading="Professional" amount={72}/>
        <Card list={["Up to 5 users", "Instant IP monitor", "100 Monitors per month", "Email/Phone Support", "Basic Analytics"]} heading="Business  " amount={100}/>
        </div>
        </section>
    )
}

export default Pricing;