import React, {useState, useEffect} from 'react';
import '../css/tailwind.generated.css';
import '../css/landing.css';

const Card = props=> {
    return(
        <div className="card mx-3 my-3 flex flex-col bgr-white justify-center rounded text-white mt-16 trans hover:shadow-lg py-10 lg:w-1/4 md:w-3/4 sm:w-full">
        <div className="img-container mt-6 mx-auto">
        <div className="w-20 h-20 rounded-full bg-primary">{props.icon}</div>
        </div>
        <div className="content-container text-gray-800">
        <h3 className="text-3xl mt-2 font-bold text-center">{props.heading}</h3>
        <p className="w-full font-base font-semibold px-5 text-center mt-5 my-2 mx-auto text-justified">{props.content}</p>
        </div>
        </div>
    )
}

export default Card;