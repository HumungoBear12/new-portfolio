import React from 'react'
import { Helmet } from 'react-helmet';
import Card from '../Components/InfoCard'


const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Gallery Page</title>
            </Helmet>
            <h1 className='galHead'>Gallery Page</h1>
            <p className='galInfo'>These are some of my previous websites over the last 18 months. They are going to go from when I had first started to where I am currently at now. To show improvement and progress over my journey. Please enjoy!</p>
            <div className='holder'>
                <a href="https://amakris12.github.io/Pizza-Restraunt/"><Card header='Pizza Website' info='Lorem24'/></a>
                <a href="https://amakris12.github.io/Batman/index.html"><Card header='Batman Website' info='Lorem24'/></a>
                <a href="https://giles-aiden.github.io/Woodworking-Website/index.html"><Card header='Woodwork Group Site' info='Lorem24'/></a>
                <a href="https://amakris12.github.io/newportfolio/index.html"><Card header='First Portfolio' info='Lorem24'/></a>
                <a href="https://princetonjeffries.github.io/mclarenCarSite/index.html"><Card header='Mclaren Group Site' info='Lorem24'/></a>
                <a href="https://amakris12.github.io/weather/#latergate"><Card header='Weather Site Group' info='Lorem24'/></a>
                <a href="https://hardcore-swanson-5478ef.netlify.app/"><Card header='First React Page' info='Lorem24'/></a>
                <a href="https://tender-beaver-d56329.netlify.app/Records"><Card header='React Final Page' info='Lorem24'/></a>
                {/* <a href=""><Card header='Website One' info='Lorem24'/></a> */}
            </div>
        </div>
    )
}

export default Gallery
