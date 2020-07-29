import React, {useState} from 'react';
import Header from './components/header/header'
import Main  from './components/main'
import Footer from './components/footer/footer'

const Landing = () => {
    let [toogled, setToogle] = useState(true)
    // the component for landing page.
    let handleToogle = (bool)=> {
       setToogle(bool)
    }
    return(
        <>
        <Header click={handleToogle} toogle={toogled} onc/>
        <Main/>
        <Footer/>
        </>
    )
}

export default Landing;