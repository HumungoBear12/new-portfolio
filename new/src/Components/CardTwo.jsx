import React from 'react'

const CardTwo = ({header,info}) => {
    return (
        <div className='card2'>
            <h1 className='cardHead'>{header}</h1>
            <p className='cardInfo'>{info}</p>
        </div>
    )
}

export default CardTwo