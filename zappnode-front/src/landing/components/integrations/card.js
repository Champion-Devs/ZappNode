import React from 'react';
import '../css/tailwind.generated.css';
import '../css/landing.css';

// card component for integration page
// it need some modification about adding the right icon.

const Card = (props)=> {
    return (
        <div className="w-20 h-20 bg-primary flex font-bold my-5 justify-center mx-10 rounded text-primary items-center">
        {props.icon}
        </div>
    )
}

export default Card;