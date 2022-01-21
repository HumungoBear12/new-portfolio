import React from 'react'
import Card from '../Components/InfoCard'
import { Helmet } from 'react-helmet';
import CardTwo from '../Components/CardTwo';
//Also includes Skills
const Goals = () => {
    return (
        <div>
            <Helmet>
                <title>Goals & Skills </title>
            </Helmet>
            <h1 className='career'>Career</h1>
           <div className='goalOne'>
                <CardTwo header='Career Goals' info='The goals I have for myself to be successful in my future career path are very simple, but if not achieved I will not be where I want to be. My first goal is to practice everyweek day on what it is Im currently working on. My second goal is to never fall behind in my school or work. Lastly my third goal is to always have side projects going to keep improving.'/>
                <CardTwo header='Career Skills' info='Some of my career skills that can be helpful in a work place are that I am hard working, quite, can talk when needed to, never falls behind, and just a nice person. Some coding skills or languages I have learned over the past 18 months or so is html, css, javascript, scss, jquery, jsx, and the one I feel most comfortable with is React.'/>
           </div>
           <div className="rockVideo">
              <iframe  width="700" height="400" src="https://www.youtube.com/embed/oEVnq6LIKOM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
            <h1 className='personal'>Personal</h1>
            <div className='personalCard'>
                <CardTwo header='Personal Goals' info='Me personally, I do have a lot of personal goals that arent related to work or school. For example one of my goals that I have wanted to hit since the beginning of highschool, I have finally accomplished. The goal was to hit 225lbs on bench press and I hit it. It showed me that no matter how long it takes I can accomplish whatever I put my mind too. Another goal of mind that is similar too the first one, is to get visible abs. As of right now I still have more work to do but this is the closet I have ever been. Another goal is a social goal and that is to be more social and make more connections throughout the world. This one could use some work since I am normally a quite person but Im trying ot make as much progess as I can.'/>
            </div>
        </div>
    )
}

export default Goals

