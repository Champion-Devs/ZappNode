import React from 'react';
import Navigation from './navigation';
import Content from './content'

const Header = (props)=> {
    return(
        <header className="bg-primary mb-0">
        <Navigation change={props.change}/>
        <Content/>   
        </header>
    )
}
export default Header;