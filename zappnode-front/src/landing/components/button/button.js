import React from 'react';

const Button = props => {
    return(
        // declared the button component in which we pass props to 
        // kindly find a suitable route for the button since it's a general purpose button;
        <a href={props.link} className={props.styles}>{props.content}</a>
    )
}

export default Button;