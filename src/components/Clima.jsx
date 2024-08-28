import React from 'react'
import './Clima.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const Clima = () => {
  return (
    <div className='clima'>
     <div className="search-bar">
        <input type="text" placeholder='Buscar'/>
    <img src={search_icon} alt="" />
     </div>
   
   <img src={clear_icon} alt="" className='clima-icon'/>
   <p>16ºc<p/>

   <p>Londres</p>

    </div>
  )
}

export default Clima
