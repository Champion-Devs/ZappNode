import React, {useState, useEffect} from 'react';
import './css/tailwind.generated.css';
import Report from '../imgs/content right.svg'
import Button from './button';
import './css/landing.css';

const Navigation = ()=> {
    return(
        <div className="flex lg:flex-row md:flex-col justify-between px-6 pt-4 text-primary py-10 font-semibold">
        <div className="heading-logo">
        <div className="logo">Logo</div>
        </div>
        <div className="heading-navigation-1 flex list-none lg:flex-row md:flex-col">
        <li className="mr-12"><a href="#" className="text-cl-none">Features</a></li>
        <li className="mr-12"><a href="#" className="text-cl-none">Integration</a></li>
        <li><a href="#" className="text-cl-none">Pricing</a></li>
        </div>

        <div className="heading-navigation-2 flex list-none lg:flex-row md:flex-col">
        <li className="mr-12"><a href="#" className="text-cl-none">Login</a></li>
        <li className="mt-1"><Button link="#" content="Register" styles="text-cl-none px-10 py-3 color-secondary round-circle btn-primary rounded-full"/></li>
        </div>
        </div>
    )
};
const ContentL = () => {
    return(
        <div>
        <img src={Report} alt="report" className="w-full"/>
        </div>
    )
}

const ContentR = ()=> {
    return(
        <>
        <div className="wrapper py-10 lg:m-0 md:mx-auto w-full">
        <div className="text-primary text-5xl font-extrabold">
        <h1>SAY NO TO <span className="text-ut">DOWNTIME.</span></h1>
        </div>
        <p className="text-primary font-semibold max-w-sm mt-3 lg:m-0 md:w-2/3 md:mx-auto sm:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet sagittis arcu, nascetur vel, eget posuere nulla consequat. Et lobortis lectus elementum ridiculus in nam eu morbi. </p>
        <div className="btn-wrapper mt-10 flex lg:mx-0; md:mx-auto text-center">
        <Button link="#" styles="text-cl-none px-10 py-3 color-secondary round-circle btn-secondary rounded-full font-semibold mr-10" content="See live demo"/>
        <Button link="#" styles="text-cl-none px-10 py-3 color-secondary round-circle btn-primary rounded-full font-semibold" content="Register"/>
        </div>
        </div>
        </>
    )
};

const Content = ()=> {
    return(
        <div className="flex flex-row">
        <ContentR/>
        <ContentL/>
        </div>
    )
}



const Header = props => {
    return (
        <>
        <header className="bg-primary h-full px-6">
        <Navigation/>
        <Content/>
        </header>
        </>
    )
}

export default Header;