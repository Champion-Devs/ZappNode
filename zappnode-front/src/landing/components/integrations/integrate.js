import React from 'react';
import Card from './card'
import Button from '../button/button'

let Integrate = ()=> {
    // integration with default card component
    // need refactoring
    return(
        <section id="integration" className="integrations flex justify-center flex-col bg-secondary py-16">
        <h1 className="font-bold text-4xl text-center text-col-secondary text-gray-800">
            Blazingly <span className="text-green-500">fast</span> notifications.
        </h1>
        <p className="text-center w-2/3 mt-3 mx-auto  font-base font-semibold text-gray-800">
            Website down? Find out before your users do. We provide you with popular notification options out of the box so you can integrate uptime data into your workflow without any hassle.
        </p>
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
        </div>
        <div className="flex justify-center mt-16">
        <Button link="#" content="View all integrations" styles="text-cl-none btn-primary py-3 px-6 rounded-full font-semibold"/>
        </div>
        <p className="text-center w-2/3 mt-5 mx-auto text-gray-800">
            Please contact support if you require a notification channel that is not listed.
        </p>
        </section>
    )
}

export default Integrate;