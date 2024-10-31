import React from 'react'
import { Helmet } from 'react-helmet';
import CardTwo from '../Components/CardTwo';
// import Card from '../Components/InfoCard'
import Colts from '../images/Boyz.jpg'
import Halloween from '../images/Halloween.JPG'
import Mirror from '../images/Mirror.JPG'

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <div>
                <h1 className='aboutHead'>About Me</h1>
                <div className='infoHold'>
                    <CardTwo header='Who I Am' info="My name is Andrew Makris and I am 18 and currently live in Phoenix Arizona. I just graduated this past year from Sandra Day O'Conner and now I am currently attending Glendale Community College to get my pre-requisites done for as cheap as possible. I am also in the West-Mec Coding program and I have been for the past year. I have enjoyed this class a lot and would like to go into a career path that involves coding"/>
                    <CardTwo header='What I like' info='What I like or enjoy to do is code, obviously. I like making side projects about topics I am interested in. For example I have made a lot of Superhero pages and from my perspective they have gotten drastically better over the past few years. Right now my curret side project is a Boston Celtics page which will show there current roster and upcoming games. Another one of my Hobbies is going to the gym on a daily basis. Mostly because its the only place I can forget about everything and relax. '/>
                </div>
            </div>
            <div className='Break'></div>
            <div>
                <h1 className='headSecOne'>Pictures of Me</h1>
                <div className='pictures'>
                    <img className='me1' src={Colts} alt="" />
                    <img className='me2' src={Mirror} alt="" />
                    <img className='me1' src={Halloween} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
