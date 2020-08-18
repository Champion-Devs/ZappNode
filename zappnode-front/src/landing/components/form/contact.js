import React from 'react';
import Button from '../button/button';

const Contact = () => {
    // small contact page with link
    return(
        <section className="py-32 bg-primary text-primary flex flex-col justify-center item-center text-center">
        <h1 className="text-5xl font-extrabold">Have an issue? Contact support.</h1>
        <p className="w-1/2 mx-auto font-semibold mt-5">Create a support ticket and the ZappNode support team will get on it ASAP.</p>
        <div className="flex justify-center mt-16 mb-5">
        <Button link="#" content="Create ticket" styles="text-cl-none btn-primary py-3 px-6 rounded-full font-semibold"/>
        </div>
        </section>
    )
}

export default Contact;
