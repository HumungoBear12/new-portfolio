import React from 'react'
import Links from '../Util/Links'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'

const Navbar = () => {
    return (
        <div className='nav'>
            <ul className='list'>
                {Links
              .filter((link) => link.text !== "Error")
              .map((link) => {
                const { url, id, text } = link;
                return (
                  <li className='itemholder' key={id}>
                    <Link to={url}><p className='listItem'>{text}</p></Link>
                  </li>
                );
              })}
            </ul>
        </div>
    )
}

export default Navbar
