import React, {useState, useEffect} from 'react';
import '../css/tailwind.generated.css';
import '../css/landing.css';

const Card = (props)=> {
    return (
        <div className="w-20 h-20 bg-primary flex font-bold my-5 justify-center mx-10 rounded text-primary items-center">
        {props.icon}
        </div>
    )
}

export default Card;