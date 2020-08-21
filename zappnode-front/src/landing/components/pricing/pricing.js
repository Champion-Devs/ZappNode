import React from 'react';
import Card from './card';

const Pricing = () => {
    // landing page pricing page
    return(
        <section id="pricing" className="pricing bg-secondary text-primary flex flex-col py-10 pb-32 ">
        <h1 className="text-4xl font-extrabold text-center mt-16 color-gray">A pricing option for every need.</h1>
        <div className="cards flex justify-center mt-16 flex-wrap">
        <Card list={["Up to 5 users", "Instant IP monitor", "100 Monitors per month", "Email/Phone Support", "Basic Analytics"]} heading="Starter" amount={50}/>
        <Card list={["Up to 5 users", "Instant IP monitor", "100 Monitors per month", "Email/Phone Support", "Basic Analytics"]} heading="Professional" amount={72}/>
        <Card list={["Up to 5 users", "Instant IP monitor", "100 Monitors per month", "Email/Phone Support", "Basic Analytics"]} heading="Business  " amount={100}/>
        </div>
        <p className="text-center font-semibold color-gray">Or simply <a href="/register" className="transition duration-500 text-green-500 hover:text-green-300">create an account</a> and start your FREE trial.</p>
        </section>
    )
}

export default Pricing;