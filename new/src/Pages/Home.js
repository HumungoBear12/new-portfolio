import React from 'react'

const Home = () => {
    return (
        <div>
            <div>
                <h1 className='headSecOne'>Current and Previous Employment</h1>
                <ul className='Jobs'>
                    <li className='Work'>Panera Bread <br /> Februray 2020 - May 2021 <br /> <img className='workIMG' src="https://logos-download.com/wp-content/uploads/2016/11/Panera_Bread_logo_symbol.png" alt="" /></li>
                    <li className='Work'>Tillys <br /> May 2021 - August 2021 <br />  <img className='workIMG' src="https://logodix.com/logo/1872267.png" alt="" /></li>
                    <li className='Work'>Buffalo <br /> Wild Wings June 2021 - Present <br /> <img className='workIMG' src="https://www.visitridgeland.com/wp-content/uploads/2013/01/BWW.jpg" alt="" /></li>
                </ul>
            </div>
            <div className='Break'></div>
            <div>
                <h1 className='headSecOne'>Pictures of Me</h1>
                <div className='pictures'>
                <img className='me1' src="https://pbs.twimg.com/profile_images/1456007156189237257/HlMvbuAm_400x400.jpg" alt="" />
                <img className='me2' src="https://pbs.twimg.com/profile_images/1456006341776924677/addqFKwi_400x400.jpg" alt="" />
                <img className='me3' src="https://pbs.twimg.com/profile_images/1456007527297167368/BlmX5Pbb_400x400.jpg" alt="" />
            </div>
            </div>
            <div className='Break'></div>
            <div>
                <h1 className='headSecOne'>Current Academic Achievements</h1>
                <ul className='Education'>
                    <li className='School'>Highschool Graduate, Earned Diploma 2017-2021 <br /> Sandra Day O'conner Highshcool <br /><img className='workIMG' src="https://www.dvusd.org//cms/lib/AZ01901092/Centricity/Domain/43/Eagle%20Logo.jpg" alt="" /></li>
                    <li className='School'>Currently Enrolled in West Mec Coding Program 2020 - present <br /> West-Mec Northeast Campus <br />  <img className='workIMG' src="https://image.slidesharecdn.com/west-mecpresentation-150710233801-lva1-app6891/95/westmec-presentation-1-638.jpg?cb=1436571600" alt="" /></li>
                    <li className='School'>Currently Enrolled in Community College 2021-Present <br />Glendale Community College North Campus <br /><img className='workIMG' src="https://upload.wikimedia.org/wikipedia/en/d/dc/GCC_New_Logo.png" alt="" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Home

