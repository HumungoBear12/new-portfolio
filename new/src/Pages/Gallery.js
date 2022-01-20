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
                <a href="https://amakris12.github.io/Pizza-Restraunt/"><Card Image="https://www.pngkit.com/png/full/121-1217302_pizza-and-sandwiches-pizza-png-white.png" header='Pizza Website' info='This was my first ever website. Its a pizza ordering website that taught us radio buttons, checkboxes, and input tags. The difference between that website and my most current one is an insane difference'/></a>
                <a href="https://amakris12.github.io/Batman/index.html"><Card Image="http://assets.stickpng.com/images/58428ba1a6515b1e0ad75ab0.png" header='Batman Website' info='This was my first ever side project and I wanted to do it on my favorite superhero batman. It was my first website using multiple pages and have audio while on it.'/></a>
                <a href="https://giles-aiden.github.io/Woodworking-Website/index.html"><Card Image="https://cdn.pixabay.com/photo/2012/04/18/13/44/nails-37063_960_720.png" header='Woodwork Group Site' info='This was a partner page that we did to promote a company. For this website we just put everything we have been working on prior and put it into a single page.'/></a>
                <a href="https://amakris12.github.io/newportfolio/index.html"><Card Image="https://www.freepnglogos.com/uploads/playstation-png-logo/navy-playstation-png-logo-5.png" header='First Portfolio' info='This was my first portfolio and I wanted to go for a Ps4/video game theme and I feel like i did for not perfecting a lot of the pages tha resembled the games.'/></a>
                <a href="https://princetonjeffries.github.io/mclarenCarSite/index.html"><Card Image="http://pngimg.com/uploads/Mclaren/Mclaren_PNG49.png" header='Mclaren Group Site' info='This was a car website we did as a group and it was just to perfect layout. The page I contributed in is the Super series.'/></a>
                <a href="https://amakris12.github.io/weather/#latergate"><Card Image="https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png" header='Weather Site Group' info='This was our final project of the year and the part i did was the navbar and the middle section that shows weather updates.'/></a>
                <a href="https://hardcore-swanson-5478ef.netlify.app/"><Card Image="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" header='First React Page' info='This was my first react page that involves a loading and error page. It was just understanding the basics and learning how to map the items I needed to apper.'/></a>
                <a href="https://tender-beaver-d56329.netlify.app/Records"><Card Image="http://assets.stickpng.com/images/58428defa6515b1e0ad75ab4.png" header='React Final Page' info='This was my final react project on where we need to access APIs. The games page doesnt have any information on it since the API costed money I did not keep the api since I did not need to. But the standing are still current and are still getting updated currently.'/></a>
                <a href="https://tender-beaver-d56329.netlify.app/Records"><Card Image="http://assets.stickpng.com/images/58428defa6515b1e0ad75ab4.png" header='React Final Page' info='This was my final react project on where we need to access APIs. The games page doesnt have any information on it since the API costed money I did not keep the api since I did not need to. But the standing are still current and are still getting updated currently.'/></a>
            </div>
        </div>
    )
}

export default Gallery
