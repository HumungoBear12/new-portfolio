import React from 'react'
import Card from '../Components/InfoCard'
//Also includes Skills
const Goals = () => {
    return (
        <div>
            <h1 className='career'>Career Goals & Skills</h1>
           <div className='goalOne'>
                <Card header='Career Goals' info=''/>
                <Card header='Career Skills' info=''/>
           </div>
           <div>
               <img src="" alt="" />
           </div>
            <h1 className='personal'>Personal Goals</h1>
            <div className='personalCard'>
                <Card header='Personal Goals' info='Me personally, I do have a lot of personal goals that arent related to work or school. For example one of my goals that I have wanted to hit since the beginning of highschool, I have finally accomplished. The goal was to hit 225lbs on bench press and I hit it. It showed me that no matter how long it takes I can accomplish whatever I put my mind too. Another goal of mind that is similar too the first one, is to get visible abs. As of right now I still have more work to do but this is the closet I have ever been. Another goal is a social goal and that is to be more social and make more connections throughout the world. This one could use some work since I am normally a quite person but Im trying ot make as much progess as I can.'/>
            </div>
        </div>
    )
}

export default Goals

