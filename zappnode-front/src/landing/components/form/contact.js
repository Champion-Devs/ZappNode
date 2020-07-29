import React, {useState, useEffect} from 'react';
import Button from '../button/button';
import '../css/tailwind.generated.css';
import '../css/landing.css';

const Contact = props => {
    // small contact page with link
    return(
        <section className="py-32 bg-primary text-primary flex flex-col justify-center item-center text-center">
        <h1 className="text-5xl font-extrabold">Having issue? contact us soon.</h1>
        <p className="w-1/2 mx-auto font-semibold mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-center mt-16 mb-5">
        <Button link="#" content="Get started now" styles="text-cl-none btn-primary py-3 px-6 rounded-full font-semibold"/>
        </div>
        </section>
    )
}

export default Contact;