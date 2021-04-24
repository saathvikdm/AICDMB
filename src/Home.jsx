import React from 'react'
import './HomeStyles.css'

import About from './About'
import Masthead from './Masthead'
import Speakers from './Speakers'
import Organizers from './Organizers'
import Card from './Card'
import Slider from './Carousel'


const Home = () => {
    return (
        <div>
            <Masthead />
            <Slider/>
            <Card />
            {/* <Topics/> */}
            <Speakers/>
            <About/>
        </div>
     );
}

export default Home;