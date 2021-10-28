import React from 'react'
import Links from '../Util/Links'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <h1 className='navHead'>Andrew Makris Portfolio</h1>
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
