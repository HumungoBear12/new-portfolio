import React from 'react'
import $ from "jquery";

const Banner = () => {
    //.bind
    $('.title').mouseenter(function(){
        $('.title').fadeOut(2000)
        $('.hidden').fadeIn(2000)
    })
    return (
        <div>
            <img className='banner' src="https://i.pinimg.com/originals/da/d4/8c/dad48c511a52c7169c3d810ee4ac2dbc.gif" alt="" />
            <h1 className='title'>Welcome</h1>
            <p className='hidden'>My Name Is Andrew Makris</p>
        </div>
    )
}

export default Banner
