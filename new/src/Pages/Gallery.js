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
                <a href="https://amakris12.github.io/Pizza-Restraunt/"><Card Image="https://www.creativefabrica.com/wp-content/uploads/2019/11/11/f-33-1-580x387.jpg" header='Pizza Website' info='This was my first ever website. Its a pizza ordering website that taught us radio buttons, checkboxes, and input tags. The difference between that website and my most current one is an insane difference'/></a>
                <a href="https://amakris12.github.io/Batman/index.html"><Card Image="https://cdn.wallpapersafari.com/42/86/xbfrMv.jpg" header='Batman Website' info='This was my first ever side project and I wanted to do it on my favorite superhero batman. It was my first website using multiple pages and have audio while on it.'/></a>
                <a href="https://giles-aiden.github.io/Woodworking-Website/index.html"><Card Image="https://i.etsystatic.com/10855810/r/il/73b77d/2077421579/il_fullxfull.2077421579_hkhl.jpg" header='Woodwork Group Site' info='This was a partner page that we did to promote a company. For this website we just put everything we have been working on prior and put it into a single page.'/></a>
                <a href="https://amakris12.github.io/newportfolio/index.html"><Card Image="https://variety.com/wp-content/uploads/2018/06/playstation-logojpg.jpg" header='First Portfolio' info='This was my first portfolio and I wanted to go for a Ps4/video game theme and I feel like i did for not perfecting a lot of the pages tha resembled the games.'/></a>
                <a href="https://princetonjeffries.github.io/mclarenCarSite/index.html"><Card Image="https://mclaren.scene7.com/is/image/mclaren/Homepage-ownership-tile-1200x1200px:crop-1x1?wid=1920&hei=1920" header='Mclaren Group Site' info='This was a car website we did as a group and it was just to perfect layout. The page I contributed in is the Super series.'/></a>
                <a href="https://amakris12.github.io/weather/#latergate"><Card Image="https://thumbs.dreamstime.com/b/sun-black-background-sun-icon-vector-art-eps-image-logo-sign-70461264.jpg" header='Weather Site Group' info='This was our final project of the year and the part i did was the navbar and the middle section that shows weather updates.'/></a>
                <a href="https://hardcore-swanson-5478ef.netlify.app/"><Card Image="https://res.cloudinary.com/practicaldev/image/fetch/s--Y6YIEgoh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/n7ccgsmop6f4l4ycu4uv.png" header='First React Page' info='This was my first react page that involves a loading and error page. It was just understanding the basics and learning how to map the items I needed to apper.'/></a>
                <a href="https://tender-beaver-d56329.netlify.app/Records"><Card Image="https://sportshub.cbsistatic.com/i/r/2021/07/08/f78223d1-1fd0-4678-8f2e-367238967616/thumbnail/1200x675/cf69240022a895829553adc5465ea03e/nba-75.jpg" header='React Final Page' info='This was my final react project on where we need to access APIs. The games page doesnt have any information on it since the API costed money I did not keep the api since I did not need to. But the standing are still current and are still getting updated currently.'/></a>
                <a href="https://amakris03.herokuapp.com/"><Card Image="https://www.gannett-cdn.com/presto/2020/05/17/USAT/7a047f56-36ce-4d83-8424-a60a07d6ff9b-shoes.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp" header='Shoe Store API' info='This was one our projects learning about mongoDB,node,using postman, and creating APIs. This is a shoe store api where you can edit the shoes and delete the shoes. There is barely any css since I was trying to focus on the functionality.'/></a>
            </div>
        </div>
    )
}

export default Gallery
