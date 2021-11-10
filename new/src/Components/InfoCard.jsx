import React from 'react'

const InfoCard = ({header,info}) => {
    return (
        <div className='card'>
            <h1 className='cardHead'>{header}</h1>
            <p className='cardInfo'>{info}</p>
        </div>
    )
}

export default InfoCard
