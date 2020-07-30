import React, {useState} from 'react';
import Header from './components/header/header'
import Navigation from './components/navigation/navigate'
import Main  from './components/main'
import Footer from './components/footer/footer'

const Landing = () => {
    let [classN, setClassN] = useState('to-back')
    // the component for landing page.

   const handleChange = (num)=> {
        setClassN(num)
    }
   

    return(
        <>
        <Navigation change={handleChange} classNa={classN}/>
        <Header change={handleChange}/>
        <Main/>
        <Footer/>
        </>
    )
}

export default Landing;