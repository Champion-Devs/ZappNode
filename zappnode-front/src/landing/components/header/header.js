import React, {useState, useEffect} from 'react';
import Navigation from './navigation';
import Report from './imgs/content right.svg'
import Button from '../button/button';
import Content from './content'
import '../css/tailwind.generated.css';
import '../css/landing.css';

const Header = ()=> {
    return(
        <header className="bg-primary">
        <Navigation/>
        <Content/>   
        </header>
    )
}
export default Header;