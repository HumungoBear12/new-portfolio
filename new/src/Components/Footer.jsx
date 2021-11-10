import React from 'react'
import Links from '../Util/Links'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
            <div className='footer'>
            <div className='InfoHold'>
                <div>
                    <h3 className='footStuff'>Information</h3>
                    <ul>
                        <li className='travel'>Andrew Makris</li>
                        <li className='travel'>623-806-9966</li>
                        <li className='travel'>amakris03@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3 className='footStuff'>Navigation</h3>
                    <ul>
                        <ul className='list1'>
                            {Links
                        .filter((link) => link.text !== "Error")
                        .map((link) => {
                            const { url, id, text } = link;
                            return (
                            <li className='itemholder1' key={id}>
                                <Link to={url}><p className='listItem2'>{text}</p></Link>
                            </li>
                            );
                        })}
                        </ul>
                    </ul>
                </div>
                <div>
                    <h3 className='footStuff'>Socials</h3>
                    <ul>
                        <a href="https://www.instagram.com/andrew.makris/"><li className='travel'>Instagram</li></a>
                        <a href="https://twitter.com/_amakris12?lang=en"><li className='travel'>Twitter</li></a>
                        <a href="https://www.tiktok.com/@andrewmakris1"><li className='travel'>Tiktok</li></a>
                    </ul>
                </div>
                <div className='shortP'>
                    <h3 className='footStuff'>About Me</h3>
                    <p className='About'>My name is Andrew Makris and I am 18 and currently live in Phoenix Arizona. I just graduated this past year from Sandra Day O'Conner and now I am currently attending Glendale Community College to get my pre-requisites done for as cheap as possible. I am also in the West-Mec Coding program and I have been for the past year. I have enjoyed this class a lot and would like to go into a career path that involves coding</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
