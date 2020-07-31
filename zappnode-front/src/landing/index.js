import React, {useState, useEffect} from 'react';
import Header from './components/header/header'
import Navigation from './components/navigation/navigate'
import Main  from './components/main'
import Footer from './components/footer/footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = () => {
    let [classN, setClassN] = useState('to-back')
    // the component for landing page.

    useEffect(()=>{
        AOS.init({
            duration: 2000
        })
    }, [])

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