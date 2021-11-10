import React from 'react'
import Card from '../Components/InfoCard'
//Also includes Skills
const Goals = () => {
    return (
        <div>
            <h1 className='career'>Career Goals & Skills</h1>
           <div className='goalOne'>
                <Card/>
                <Card/>
           </div>
           <div>
               <img src="" alt="" />
           </div>
            <h1 className='personal'>Personal Goals</h1>
           <div className='goalTwo'>
                <Card/>
           </div>
        </div>
    )
}

export default Goals

