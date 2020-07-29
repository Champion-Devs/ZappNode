import React, {useState, useEffect} from 'react';
import Navigation from './navigation';
import Report from './imgs/content right.svg'
import Button from '../button/button';
import Content from './content'
import '../css/tailwind.generated.css';
import '../css/landing.css';

const Header = (props)=> {
    return(
        <header className="bg-primary mb-0">
        <Navigation click={props.click} toogle={props.toogle}/>
        <Content/>   
        </header>
    )
}
export default Header;