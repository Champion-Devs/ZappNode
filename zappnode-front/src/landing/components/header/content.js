import React, {useState, useEffect} from 'react';
import '../css/tailwind.generated.css';
import report from './imgs/content right.svg';
import Button from '../button/button';
import '../css/landing.css';

const ContentR = ()=> {
    return (
        <div className="lg:visible mb-10 lg: mx-0 md: mx-auto sm: mx-auto w-1/2 mt-5">
        <img src={report} alt="report"/>
        </div>
    )
}

const ContentL = ()=> {
    return (
        <div className="w-1/2 mt-16 px-5 lg:mr-10 md:mr-0 lg:text-left md:text-center w-1/2 sm:w-1/2 md:w-full lg:w-1/2 xl:w-3/4 lg:ml-10 md:ml-0">
        <h1 className="text-5xl font-extrabold ml-0">SAY NO TO <span className="text-ut">DOWNTIME.</span></h1>
        <p className="text-base font-semibold mt-5 w-2/3 lg:mx-0 md: mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet sagittis arcu, nascetur vel, eget posuere nulla consequat. Et lobortis lectus elementum ridiculus in nam eu morbi.</p>
        <div className="text-center flex items-center mt-12 lg:justify-start md:justify-center sm: justify-center">
        <Button content="See live demo" styles="btn-primary text-primary px-5 py-3 rounded font-semibold mr-10" link="#register"/>
        <Button content="Register" styles="btn-secondary text-primary px-8 py-3 rounded font-semibold" link="#register"/>
        </div>
        </div>
    )
}

const Content = ()=> {
    return(
        <div className="container my-auto flex text-primary justify-center lg:mt-10 md:mt-2 lg:flex-row md: flex-col sm: flex-row sm:mx-auto">
        <ContentL/>
        <ContentR/>
        </div>
    )
}

export default Content;