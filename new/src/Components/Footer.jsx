import React from 'react'
import Links from '../Util/Links'
import {Link} from 'react-router-dom'
import Logo from '../images/logo_size.jpg'

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
                        <h1 className="short">Andrew Makris's <br />Portfolio</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
