import React, {useState, useEffect} from 'react';
import '../css/tailwind.generated.css';
import report from './imgs/content right.svg';
import Button from '../button/button';
import '../css/landing.css';

const ContentR = ()=> {
    return (
        <div className="w-1/2 d-none mb-10 lg: mx-0 md: mx-auto sm: mx-auto mt-5">
        <img src={report} alt="report" className="w-full"/>
        </div>
    )
}

const ContentL = ()=> {
    return (
        <div className="container sm:w-auto center-text wi-full mt-16 px-5 lg:mr-10 md:mr-0 lg:text-left md:text-center lg:ml-10 md:ml-0 sm:pb-10 lg:pb-0 md:pb-10">
        <h1 className="text-5xl font-extrabold ml-0">SAY NO TO <span className="text-ut">DOWNTIME.</span></h1>
        <p className="text-base font-semibold mt-5 w-2/3 lg:mx-0 md: mx-auto sm:text-center lg:text-left md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet sagittis arcu, nascetur vel, eget posuere nulla consequat. Et lobortis lectus elementum ridiculus in nam eu morbi.</p>
        <div className="text-center flex items-center mt-12 lg:justify-start md:justify-center sm: justify-center">
        <Button content="See live demo" styles="btn-primary text-primary px-5 py-3 rounded font-semibold mr-10" link="#register"/>
        <Button content="Register" styles="btn-secondary text-primary px-8 py-3 rounded font-semibold" link="#register"/>
        </div>
        </div>
    )
}

const Content = ()=> {
    return(
        <div className="container my-auto pb-16 flex text-primary justify-center lg:mt-10 md:mt-2 lg:flex-row md: flex-col sm: flex-row sm:mx-auto">
        <ContentL/>
        <ContentR/>
        </div>
    )
}

export default Content;