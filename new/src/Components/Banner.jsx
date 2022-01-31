import React from 'react'
import $ from 'jquery'
import myself from '../images/Winnie.JPG'

// const jqueryStuff = () => {
//     $('.bannerTitle').hover({
//         $('.title').fadeOut(3000)
//         $('.hidden').fadeIn(3000)
//     })
// }

const Banner = () => {
    
    return (
        <div>
            <img className='banner' src="https://i.pinimg.com/originals/da/d4/8c/dad48c511a52c7169c3d810ee4ac2dbc.gif" alt="" />
            <div className='bannerTitle'>
                <h1 className='title'>Welcome to My Portfolio</h1>
            </div>
            <div className='bannerName'>
                <h1 className='bannerWord'>Andrew Markis</h1>
            </div>
            <img className="myself" src={myself} alt="" />
        </div>
    )
}

export default Banner
